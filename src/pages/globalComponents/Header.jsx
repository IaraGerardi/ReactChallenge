import React from "react";
import userData from "../../mockData.json";
import Icon from "./Icons";

function Header() {
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
      <p
        key={page}
        className="text-white cursor-pointer text-sm"
        onClick={() => console.log(`Redirigiendo a ${page}`)}
      >
        {page}
      </p>
    );
  });

  return (
    <div className="flex justify-between items-center p-2 bg-sky-600">
      <img
        className="w-20 h-12"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Vector_Informatik_Logo.svg"
        alt=""
      />
      <ul className="flex gap-6">{pagesList}</ul>
      <div className="flex gap-3 fill-white">
        <p className="text-white">Mis puntos</p>
        <span className="text-white">{userData.points}</span>
        <Icon type="user" className="fill-white" />
      </div>
    </div>
  );
}

export default Header;
