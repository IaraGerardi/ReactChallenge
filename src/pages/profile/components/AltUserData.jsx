import React, { useState } from "react";
import EditUserData from "./EditUserData";
import ShowUserData from "./ShowUserData";

function AltUserData() {
  const [editData, setEditData] = useState(false);
  return (
    <div className="self-center w-11/12 lg:w-3/4 lg:self-start lg:relative lg:bottom-12">
    <h1 className="font-bold text-2xl">Datos Personales</h1>
      {editData ? (
        <EditUserData setEditData={setEditData} />
      ) : (
        <ShowUserData setEditData={setEditData} />
      )}
    </div>
  );
}

export default AltUserData;
