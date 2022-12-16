import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./pages/globalComponents/Header";
import ProfileScreen from "./pages/profile/ProfileScreen";
import Footer from "./pages/globalComponents/Footer";
import LateralMenu from "./pages/globalComponents/LateralMenu";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const changeWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className={`flex h-screen flex-col ${openMenu ? 'overflow-y-hidden' : null}`}>
      {width >= 1024 && <Header />}
      {width < 1024 && <LateralMenu openMenu={openMenu} setOpenMenu={setOpenMenu}/>}
      <ProfileScreen />
      {width >= 1024 && <Footer />}
    </div>
  );
}

export default App;
