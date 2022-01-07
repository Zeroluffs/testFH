import React from "react";
import "./App.css";
import { UserInfo } from "./informationPanel/userInfo";
import { OrderCard } from "./informationPanel/OrderCard";
import { CardContainer } from "./informationPanel/CardContainer";
function App() {
  return (
    <div>
      {/* <UserInfo/> */}
      {/* <OrderCard /> */}
      <CardContainer />
    </div>
  );
}

export default App;
