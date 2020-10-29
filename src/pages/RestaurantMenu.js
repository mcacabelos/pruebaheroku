import React from "react";

import Box from "../components/RestaurantTitle";
import Menu from "../components/Menu";
import UserNavbar from "../components/UserNavbar"

export default function Pagina() {
  return (
    <div className="Pagina">
      <UserNavbar />
      <Box />
      <br />
      <Menu />
    </div>
  );
}
