import React from "react";
import Icon from "./Icons";

function Footer() {
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
    <div className="flex justify-between items-center p-2 py-8 bg-sky-600">
      <img
        className="w-20 h-12"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Vector_Informatik_Logo.svg"
        alt=""
      />
      <ul className="flex gap-6">{pagesList}</ul>
      <p
        className="text-white cursor-pointer"
        onClick={() => console.log(`Redirigiendo a Terminos y condiciones`)}
      >
        Terminos y condiciones
      </p>
      <div className="flex gap-4 fill-white">
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
  );
}

export default Footer;
