import React from "react";
import { Grid, Typography } from "@material-ui/core";

function BookingDetailsCard({ propertyName, bookingDetails }) {
  return (
    <div style={{margin: 15, borderTop:"2px solid grey"}}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography style={{ fontWeight: "bold" }}>
            Booking Request Details
          </Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography>Booking Id</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography style={{ fontWeight: "bold" }}>
          {bookingDetails.bookingId}
        </Typography>
      </Grid>
        <Grid item xs={6}>
          <Typography>Property Name</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography style={{ fontWeight: "bold" }}>
            {propertyName}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Property Id</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography style={{ fontWeight: "bold" }}>
            {bookingDetails.hotelId}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>No. of Guests</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography style={{ fontWeight: "bold" }}>
            {bookingDetails.guestCount}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>No. of Rooms</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography style={{ fontWeight: "bold" }}>
            {bookingDetails.roomCount}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Total Price</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="error" style={{ fontWeight: "bold" }}>
            {bookingDetails.totalPrice}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Payment Status</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography style={{ fontWeight: "bold", color:"green" }}>
            Paid
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
export default BookingDetailsCard;
