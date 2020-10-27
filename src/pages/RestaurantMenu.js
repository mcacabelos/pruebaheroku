import React from "react";

import Box from "../components/RestaurantTitle";
import Menu from "../components/Menu";
import HomeNavbar from "../components/UserNavbar"

export default function Pagina() {
  return (
    <div className="Pagina">
      <HomeNavbar />
      <Box />
      <br />
      <Menu />
    </div>
  );
}
