import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";
import { ButtonDash } from "../ButtonDash";

export const Header = ({ setHomePage, isDarkmode, setDarkmode }) => {
  const handleClick = () => {
    return isDarkmode ? setDarkmode(false) : setDarkmode(true);
  };

  const handleLogout = () => {
    setHomePage(true);
  };

  return (
    <header className="header">
      <nav className="container nav">
        <div className="logo-img"></div>
        <div>
          <ButtonDash text="Início" handleClick={handleLogout} />
          <button className="dark-mode-btn" onClick={handleClick}></button>
        </div>
      </nav>
    </header>
  );
};
