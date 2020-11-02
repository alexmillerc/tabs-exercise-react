import React, { useState } from "react"
import ReactDOM from "react-dom";
import { Tab } from "./components/Tab";

import "./App.css";
import "./components/Tab.css"


export const App = () => {

  const [activeTab, setActiveTab] = useState("casas");
  const TabItem = (tab, label) => {
    return (
      <li
        onClick={() => setActiveTab(tab)}
        className={activeTab === tab ? "active" : ""}
      >
        {label}
      </li>
    );

  }

  return (
    <>
      <div className="Tabs">
        <ul>
          {TabItem("casas", "Casas")}
          {TabItem("carros", "Carros")}
          {TabItem("games", "Games")}
        </ul>
      </div>
      <div>
          < Tab activeTab={activeTab} />
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
