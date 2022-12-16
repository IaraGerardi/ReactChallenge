import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useVerify from "../../../hooks/useVerify";
import verifications from "../../../verificationArguments/userDataVerification.json";
import FormInput from "../../globalComponents/FormInput";
import userData from "../../../mockData.json";

function EditUserData({ setEditData }) {
  const [loader, setLoader] = useState(false);
  const [activeVerify, setActiveVerify] = useState({});

  const [form, setForm] = useState({
    profileName: userData.name,
    profileLastname: userData.lastname,
    profileBirthDate: userData.birthDay,
    profileEmail: userData.email,
    profileDNI: userData.dni,
    profileLicense: userData.hasDriverLicense ? "Si " : "No",
  });

  const formValues = [
    form.profileName,
    form.profileLastname,
    form.profileBirthDate,
    form.profileEmail,
    form.profileDNI,
    form.profileLicense,
  ];

  const { handleVerificationForm, verifyMessages, isVerified } = useVerify(
    formValues,
    verifications
  );

  const selectOptions = [
    { value: "Si", label: "Si", id: "profileLicense" },
    { value: "No", label: "No", id: "profileLicense" },
  ];

  const customStyles = {
    control: (base) => ({
      ...base,
      borderRadius: 6,
      borderWidth: 2,
      borderColor: "white",
      borderBottomColor: "#0284c7",
    }),
  };

  const handleChange = (e) => {
    const ID = e.target ? e.target.id : e.id;
    const value = e.target ? e.target.value : e.value;
    handleTimer(e);
    setForm({
      ...form,
      [ID]: value,
    });
  };

  const handleTimer = (e) => {
    const ID = e.target ? e.target.id : e.value;
    if (activeVerify[ID] === true) return;

    let timer = setTimeout(() => {
      setActiveVerify({
        ...activeVerify,
        [ID]: true,
      });
    }, 8000);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    handleVerificationForm();
  }, [form]);

  const handleErrorMessage = (property) => {
    if (
      !activeVerify[property] ||
      !verifyMessages[property] ||
      verifyMessages[property] === true
    )
      return false;

    return verifyMessages[property];
  };

  console.log(verifyMessages);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isVerified)
      return console.log("El formulario no ha podido ser enviado");

    console.log("Formulario enviado");
    setEditData(false);
  };

  return (
    <form className="grid md:grid-cols-2 my-2 gap-2" onSubmit={handleSubmit}>
      <FormInput
        type="text"
        id="profileName"
        label="Nombre"
        errorStyle="mx-1"
        labelStyle="p-2.5 items-center"
        onChange={handleChange}
        value={form.profileName}
        placeholder="Ingresa tu nombre"
        inputStyle="font-light text-slate-500 p-2 border-b-2 rounded-md border-sky-600"
        containerStyle="flex flex-col h-28 rounded-md p-2"
        errorMessage={handleErrorMessage("profileName")}
      />
      <FormInput
        type="text"
        id="profileLastname"
        label="Apellido"
        errorStyle="mx-1"
        onChange={handleChange}
        value={form.profileLastname}
        labelStyle="p-2.5 items-center"
        placeholder="Ingresa tu apellido"
        inputStyle="font-light text-slate-500 p-2 border-b-2 rounded-md border-sky-600"
        containerStyle="flex flex-col h-28 rounded-md p-2"
        errorMessage={handleErrorMessage("profileLastname")}
      />
      <FormInput
        type="date"
        id="profileBirthDate"
        label="Fecha nacimiento"
        errorStyle="mx-1"
        labelStyle="p-2.5 items-center"
        onChange={handleChange}
        value={form.profileBirthDate}
        placeholder=""
        inputStyle="font-light text-slate-500 p-2 border-b-2 rounded-md border-sky-600"
        containerStyle="flex flex-col h-28 rounded-md p-2"
        errorMessage={handleErrorMessage("profileBirthDate")}
      />
      <FormInput
        type="email"
        id="profileEmail"
        label="E-mail"
        errorStyle="mx-1"
        onChange={handleChange}
        value={form.profileEmail}
        labelStyle="p-2.5 items-center"
        placeholder="Ingresa tu e-mail"
        inputStyle="font-light text-slate-500 p-2 border-b-2 rounded-md border-sky-600"
        containerStyle="flex flex-col h-28 rounded-md p-2"
        errorMessage={handleErrorMessage("profileEmail")}
      />
      <FormInput
        type="dni"
        id="profileDNI"
        label="Ingresa tu DNI"
        errorStyle="mx-1"
        labelStyle="p-2.5 items-center"
        onChange={handleChange}
        value={form.profileDNI}
        placeholder="Ingresa tu DNI"
        inputStyle="font-light text-slate-500 p-2 border-b-2 rounded-md border-sky-600"
        containerStyle="flex flex-col h-28 rounded-md p-2"
        errorMessage={handleErrorMessage("profileDNI")}
      />
      <FormInput
        type="select"
        id="profileLicense"
        label="¿Tenés licencia de conducir?"
        errorStyle="mx-1"
        onChange={handleChange}
        selectOptions={selectOptions}
        value={form.profileLicense}
        labelStyle="p-2.5 items-center "
        inputStyle={customStyles}
        containerStyle="flex flex-col h-28 rounded-md p-2"
        errorMessage={handleErrorMessage("profileLicense")}
      />
      <input
        type="submit"
        value="Ingresar"
        disabled={!isVerified}
        onClick={() => {
          setLoader(true);
        }}
        className={`${isVerified ? null : "opacity-60"}
                w-24 cursor-pointer border-none text-white text-base font-semibold rounded-md bg-sky-600 p-2`}
      />
    </form>
  );
}

EditUserData.propTypes = {
  setEditData: PropTypes.func,
};

export default EditUserData;
