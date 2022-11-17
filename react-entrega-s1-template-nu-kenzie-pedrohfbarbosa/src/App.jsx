import "./app.css";
import "./styles/globalStyles.css";
import "./styles/text.css";
import "./styles/color.css";
import { Home } from "./components/Home";
import { Dashboard } from "./components/Dashboard";
import { useState } from "react";

export const App = () => {
  const [homePage, setHomePage] = useState(true);

  return (
    <div className="app">
      <div className="app-content">
        {homePage ? (
          <Home setHomePage={setHomePage} />
        ) : (
          <Dashboard setHomePage={setHomePage} />
        )}
      </div>
    </div>
  );
};
