import userData from "../../../mockData.json";

function UserData() {
  const profileData = [
    { title: "Nombre", value: userData.name },
    { title: "Apellido", value: userData.lastname },
    { title: "Fecha nacimiento", value: userData.birthDate },
    { title: "E-mail", value: userData.email },
    { title: "DNI", value: userData.dni },
    {
      title: "¿Tenés licencia de conducir?",
      value: userData.hasDriverLicence ? "Si" : "No",
    },
  ];

  const profileDataList = profileData.map((data) => {
    return (
      <li className="p-2" key={`${data.value}`}>
        <h2>
          {data.title} <span className="text-red-600">*</span>
        </h2>
        <p className="font-light text-slate-500 border border-slate-800 rounded-md p-2 uppercase">
          {data.value}
        </p>
      </li>
    );
  });

  return (
    <div className="self-center w-11/12 lg:w-3/4 lg:self-start lg:relative lg:bottom-12">
      <h1 className="font-bold text-2xl">Datos Personales</h1>
      <ul className="grid md:grid-cols-2 my-2 gap-2">{profileDataList}</ul>
      <p className="text-sm lg:text-base">
        Si quieres editar tus datos podes hacerlo desde{" "}
        <span
          className="cursor-pointer text-blue-500"
          onClick={() => {
            console.log("redirigiendo a tienda serviclub");
          }}
        >
          Tienda ServiClub
        </span>{" "}
        o desde la{" "}
        <span
          className="cursor-pointer text-blue-500"
          onClick={() => {
            console.log("redirigiendo a la app");
          }}
        >
          App
        </span>
      </p>
    </div>
  );
}

export default UserData;
