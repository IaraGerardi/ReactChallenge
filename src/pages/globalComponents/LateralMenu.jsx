import React from "react";
import userData from "../../mockData.json";
import Icon from "./Icons";

function LateralMenu({ openMenu, setOpenMenu }) {
  const pagesArray = [
    "Home",
    "Desafios",
    "Requisitos",
    "Beneficios",
    "¿Como funciona?",
    "TiendaServiClub",
  ];

  const pagesList = pagesArray.map((page) => {
    return (
      <li className="w-full p-2" key={page + Date.now()}>
        <p
          className="font-semibold"
          onClick={() => console.log(`Redirigiendo a ${page}`)}
        >
          {page}
        </p>
      </li>
    );
  });

  return (
    <>
      <div className="flex justify-between items-center px-5 bg-sky-600 fill-white">
        <div onClick={() => setOpenMenu(true)}>
          <Icon type="menu" className="bg-sky-600" />
        </div>
        <img
          className="w-20 h-12"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Vector_Informatik_Logo.svg"
          alt=""
        />
        <Icon
          type="user"
          onClick={() => console.log("redirigiendo al perfil")}
        />
      </div>
      {openMenu && (
        <>
          <div
            id="opacity"
            className="w-full h-full flex absolute bg-black opacity-50 z-10"
          />
          <div className="flex flex-col justify-between absolute w-full bg-sky-600 h-full p-5 md:w-1/2 gap-3 fill-white text-white z-20">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Icon
                  type="user"
                  onClick={() => console.log("redirigiendo al perfil")}
                />
                <p>
                  {userData.name} {userData.lastname}
                </p>
              </div>
              <Icon
                type="close"
                className="flex bg-slate-500 "
                onClick={() => setOpenMenu(false)}
              />
            </div>
            <ul className="flex flex-col flex-1 justify-around border-b">{pagesList}</ul>
            <p className="self-center text-white">Terminos y condiciones</p>
            <div className="flex justify-around">
              <Icon
                type="facebook"
                onClick={() => console.log("redirigiendo a facebook")}
              />
              <Icon
                type="instagram"
                onClick={() => console.log("redirigiendo a instagram")}
              />
              <Icon
                type="youtube"
                onClick={() => console.log("redirigiendo a youtube")}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default LateralMenu;
