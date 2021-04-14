import React from "react"
import { Typography } from "@material-ui/core";

function UserCard({ userInfo }){
    return (
        <div style={{display:"flex", justifyContent:"space-between", padding: 10}}>
        <div>
        <Typography style={{background:"green", color:"white"}}>Booking Request</Typography>
        <Typography style={{fontWeight:"bold"}}>{userInfo.username}</Typography>
        </div>
        <div>
        <Typography>User Id</Typography>
        <Typography style={{fontWeight:"bold"}}>{userInfo.userId}</Typography>
        </div>
        </div>
    )
}
export default UserCard;