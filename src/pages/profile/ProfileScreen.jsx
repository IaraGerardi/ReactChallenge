import React from "react";
import userData from "../../mockData.json";
import AltUserData from "./components/AltUserData";
import CTABox from "./components/CallToActionBox";
import ProfilePicture from "./components/ProfilePicture";
import UserData from "./components/UserData";

function ProfileScreen() {
  return (
    <div className="flex flex-2 flex-col h-full">
      <div className="w-full flex h-max flex-col justify-center items-center bg-slate-800  lg:flex-row lg:h-56">
        <ProfilePicture />

        <div className="lg:w-4/6">
          <div className="flex flex-col flex-2 items-center text-white fill-white md:flex-row max-lg:m-6 max-lg:gap-3 lg:relative lg:bottom-4 lg:w-3/5 ">
            <CTABox
              ctaIcon="share"
              title={`Hola, ${userData.name}`}
              subtitle={`Socio desde ${userData.createdAt}`}
              callToAction="Invitar amigos"
              redirectPage="Invitar amigos"
              mainBoxStyle="flex flex-1 justify-center rounded-lg  max-md:w-64"
              titleStyle="text-xl font-semibold"
              subtitleStyle="font-light"
              CTAStyle="flex items-center gap-2 font-semibold"
            />
            <CTABox
              mainBoxIcon="gift"
              title="Tenes"
              subtitle={`${userData.points} puntos`}
              callToAction="¿Como cambiar mis puntos?"
              redirectPage="FAQ"
              mainBoxStyle="flex flex-1 rounded-lg p-3 bg-sky-600 justify-around items-center max-md:w-64"
              CTAStyle=" text-xs font-semibold"
              mainIconStyle="w-8 h-8"
            />
          </div>
        </div>
      </div>

      <div className="lg:w-4/6 flex flex-col max-md:m-4 max-lg:gap-12 lg:self-end">
        <CTABox
          ctaIcon="rigthArrow"
          mainBoxIcon="car"
          title="Licencia"
          subtitle={`Obtuviste tu licencia el dia ${userData.licenceDate}`}
          callToAction="Seguir practicando"
          redirectPage="Seguir practicando"
          mainBoxStyle="flex w-11/12 h-24 self-center items-center rounded-lg justify-around bg-white lg:self-start lg:relative lg:bottom-16 lg:w-3/5"
          titleStyle="text-sky-600 font-semibold"
          subtitleStyle="font-semibold max-md:w-11/12"
          CTAStyle="flex items-center text-sky-500 fill-sky-600 font-semibold"
          mainIconStyle="fill-sky-600 w-8 h-8"
        />
        {/* <UserData/> */}
        <AltUserData/>
      </div>
    </div>
  );
}

export default ProfileScreen;
