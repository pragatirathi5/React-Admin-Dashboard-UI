import { useState } from "react";
import "./App.css";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  const [expandSidebar, setexpandSidebar] = useState(false);
  const openSidebar = () => {
    setexpandSidebar(true);
  };
  const closeSidebar = () => {
    setexpandSidebar(false);
  };
  return (
    <div className="container">
      <Navbar expandSidebar={expandSidebar} openSidebar={openSidebar} />
      <Main />
      <Sidebar expandSidebar={expandSidebar} closeSidebar={closeSidebar} />
    </div>
  );
};

export default App;