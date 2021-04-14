import React, { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import BookingDetailsCard from "./components/BookingDetailsCard";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, ButtonGroup } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bookingsGrid: {
    display: "grid",
    gridTemplateRows: "auto",
    gridTemplateColumns: "repeat(auto-fit, minmax(25%, 1fr))",
    rowGap: 20,
    columnGap: 20,
  },
  bookingCard: {
    border: "2px solid grey",
    borderRadius: 10,
    boxShadow: "0 6px 10px 0 rgb(125 125 125 / 10%)",
    zIndex: 20,
  },
  btnStyle: {
    width: "45%",
    margin: 10,
    borderRadius: 0,
  },
}));

export default function App() {
  const classes = useStyles();
  const [state, setState] = useState([]);
  const [status, setStatus] = useState({
    bookingId: [],
    bookingStatus: [],
  });
  useEffect(() => {
    fetch("http://localhost:3000/booking")
      .then((res) => res.json())
      .then((bookings) => setState(bookings));
  }, []);

  const handleAdminResponse = (bookStatus, id) => {
    fetch(
      `http://localhost:3000/approval?bookingId=${id}&status=${bookStatus}`
    ).then((res) => {
      if (res.ok) {
        setStatus((prevState) => ({
          bookingId: prevState.bookingId.concat(id),
          bookingStatus: prevState.bookingStatus.concat(bookStatus),
        }));
      }
    });
  };
  return state.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <div className={classes.bookingsGrid}>
      {state.map((hotel) => {
        const propertyName = hotel.name;
        return hotel.bookings.map((booking) => {
          const userInfo = booking.userInfo;
          const bookingDetails = booking.bookingDetails;
          return (
            <div className={classes.bookingCard}>
              <UserCard userInfo={userInfo} />
              <BookingDetailsCard
                propertyName={propertyName}
                bookingDetails={bookingDetails}
              />
              {status.bookingId.includes(bookingDetails.bookingId) ? (
                <Typography
                  variant="h6"
                  style={{ marginLeft: 20, fontWeight: "bold" }}
                >
                  {
                    status.bookingStatus[
                      status.bookingId.indexOf(bookingDetails.bookingId)
                    ]
                  }
                </Typography>
              ) : (
                <div>
                  <Button
                    onClick={() =>
                      handleAdminResponse("Approved", bookingDetails.bookingId)
                    }
                    variant="contained"
                    color="secondary"
                    className={classes.btnStyle}
                  >
                    Approve
                  </Button>
                  <Button
                    onClick={() =>
                      handleAdminResponse("Rejected", bookingDetails.bookingId)
                    }
                    variant="contained"
                    color="secondary"
                    className={classes.btnStyle}
                  >
                    Reject
                  </Button>
                </div>
              )}
            </div>
          );
        });
      })}
    </div>
  );
}
