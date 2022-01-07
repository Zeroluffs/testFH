export function NewCards() {
  return (
    <div>
      <div className="m-4 overflow-hidden bg-white rounded shadow-md display-flex w-80">
        <div className="font-bold">ULTIMAS ORDENES</div>
        <div className="flex-row">
          <div className="mt-2 w-72">
            <img
              alt=""
              src="https://img.icons8.com/ios/100/000000/loading.png"
            />
          </div>
          <div>
            <div className="mx-2 my-2 font-bold">NO TIENES ORDENES</div>
            <div className="mx-2 my-2 text-sm">
              Al parecer no has hecho ninguna orden. Puedes buscar productos y
              hacer tu orden ahora.
            </div>
          </div>
        </div>
      </div>
      <div className="m-4 overflow-hidden bg-white rounded shadow-md display-flex w-80">
        <div className="font-bold">DIRECCIONES</div>
        <div className="m-4 overflow-hidden text-orange-400 border-2 border-orange-400 border-dashed rounded ">
          <div className="flex flex-row justify-between">
            <div className="my-2 ml-4">Agregar nueva direccion</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 my-2 mr-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="m-4 overflow-hidden bg-white rounded shadow-md display-flex w-80">
        <div className="font-bold">METODOS DE PAGO</div>
        <div className="m-4 overflow-hidden text-orange-400 border-2 border-orange-400 border-dashed rounded ">
          <div className="flex flex-row justify-between">
            <div className="my-2 ml-4">Agregar pago</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 my-2 mr-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
