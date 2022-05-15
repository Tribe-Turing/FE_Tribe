import userEvent from "@testing-library/user-event";
import React from "react";

const LoggedInUser = () => {
    return (
        <>
            <img src={user.image} />
            <p>{user.first_name}</p>
        </>
    )
}