import React from "react";
import userData from "../../../mockData.json";
import Icon from "../../globalComponents/Icons";

function ProfilePicture() {
  return (
    <div className="flex flex-1 flew-row justify-end items-center m-6 lg:m-12 ">
      <button className="flex w-32 h-32 self-end">
        <img
          className="flex w-32 h-32 object-cover rounded-full"
          src={userData.profilePicture}
          alt="profile"
        />
        <div className="w-24 h-8 bg-sky-600 rounded-full flex relative top-24 right-10">
          <Icon
            type="pencil"
            iconStyle="w-8 h-8 fill-white p-2"
            onClick={() => console.log("redirigiendo a editar imagen")}
          />
        </div>
      </button>
    </div>
  );
}

export default ProfilePicture;
