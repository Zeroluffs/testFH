import { Card } from "../classes/Card";
import { OrderCard } from "./OrderCard";
import { NewCards } from "./NewCards";
import { UserInfo } from "./userInfo";
export function CardContainer() {
  const cards: Card[] = [
    {
      id: 1,
      status: 2,
      statusName: "EN CAMINO",
    },
    {
      id: 2,

      status: 1,
      statusName: "PROGRAMADO",
    },
    {
      id: 3,
      status: 3,
      statusName: "ENTREGADO",
    },
    {
      id: 4,
      statusName: "ENTREGADO",
      status: 3,
    },
    {
      id: 5,
      statusName: "ENTREGADO",
      status: 3,
    },
  ];
  return (
    <div className="flex-row justify-evenly display-flex">
      <div>
        <div className="m-4">
          <UserInfo />
        </div>
        <div className="m-8 text-lg font-bold bg-blue-400 rounded text-gray-50 w-72">
          <div className="flex-row display-flex justify-evenly">
            <div className="m-4">FITPOINTS</div>
            <div className="m-4">20000</div>
          </div>
        </div>
        <div className="m-4 overflow-hidden bg-white rounded shadow-md display-flex w-80 ">
          <div className="font-bold">ULTIMAS ORDENES</div>
          <OrderCard cards={cards} />
          {/* <NewCards /> */}
        </div>
      </div>
      <div>
        <div className="m-4">
          <UserInfo />
        </div>
        <div className="m-8 text-lg font-bold bg-blue-400 rounded text-gray-50 w-72">
          <div className="flex-row display-flex justify-evenly">
            <div className="m-4">FITPOINTS</div>
            <div className="m-4">20000</div>
          </div>
        </div>
        <div>
          <NewCards />
        </div>
      </div>
    </div>
  );
}
