import userData from "../../../mockData.json";
import PropTypes from "prop-types";


function ShowUserData({ setEditData }) {
  const profileData = [
    { title: "Nombre", value: userData.name },
    { title: "Apellido", value: userData.lastname },
    { title: "Fecha nacimiento", value: userData.birthDay },
    { title: "E-mail", value: userData.email },
    { title: "DNI", value: userData.dni },
    {
      title: "¿Tenés licencia de conducir?",
      value: userData.hasDriverLicence ? "Si" : "No",
    },
  ];

  const profileDataList = profileData.map((data) => {
    return (
      <li className="p-2 h-28" key={`${data.value}`}>
        <h2>{data.title}</h2>
        <p className="font-light text-slate-500 p-2 border-b-2 border-sky-600">
          {data.value}
        </p>
      </li>
    );
  });

  return (
    <div>
      <ul className="grid md:grid-cols-2 my-2 gap-2">{profileDataList}</ul>
      <button
        className="text-white font-semibold w-24 rounded-md bg-sky-600 p-2"
        onClick={() => setEditData(true)}
      >
        Editar
      </button>
    </div>
  );
}

ShowUserData.propTypes = {
  setEditData: PropTypes.func,
};

export default ShowUserData;
