import React from "react";
export function OrderCard(props: any): JSX.Element {
  const StatusHeader = ({ children }: { children: any }) => {
    let card = children;
    if (card.status === 1) {
      return (
        <div className="bg-orange-200">
          <div className="flex-row justify-between m-2 display-flex">
            <div className="my-auto font-bold text-orange-400">
              {card.statusName}
            </div>
            <div>
              <div>
                <div className="font-bold text-orange-400">#PEDIDO</div>
                <div>3465FXYTKS</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (card.status === 2) {
      return (
        <div className="bg-blue-200">
          <div className="flex-row justify-between m-2 display-flex">
            <div className="my-auto font-bold text-blue-400">
              {card.statusName}
            </div>
            <div>
              <div>
                <div className="font-bold text-blue-400">#PEDIDO</div>
                <div>3465FXYTKS</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (card.status === 3) {
      return (
        <div className="bg-green-200">
          <div className="flex-row justify-between m-2 display-flex">
            <div className="my-auto font-bold text-green-400">
              {card.statusName}
            </div>
            <div>
              <div>
                <div className="font-bold text-green-400">#PEDIDO</div>
                <div>3465FXYTKS</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const cards = props
    ? props.cards.map((card: any) => (
        <div
          className="m-4 overflow-hidden bg-white rounded shadow-md display-flex w-72 "
          key={card.id}
        >
          <StatusHeader>{card}</StatusHeader>
          <div className="flex-row">
            <div>
              <img
                alt=""
                src="https://img.icons8.com/color/96/000000/bread.png"
              />
            </div>
            <div className="display-flex ">
              <div className="truncate ...">
                <p className="truncate ...">Pan de hamburguesa </p>
              </div>
              <div className="text-sm text-gray-400">10 Productos</div>
              <div className="flex justify-end">$120.000</div>
            </div>
          </div>
        </div>
      ))
    : null;
  return <div>{cards}</div>;
}
