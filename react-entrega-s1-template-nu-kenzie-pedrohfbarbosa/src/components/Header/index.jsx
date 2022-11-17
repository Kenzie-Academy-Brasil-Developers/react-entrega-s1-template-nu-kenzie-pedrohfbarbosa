import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";
import { ButtonDash } from "../ButtonDash";

export const Header = ({ logout, isDarkmode, setDarkmode }) => {
  const handleClick = () => {
    return isDarkmode ? setDarkmode(false) : setDarkmode(true);
  };
  return (
    <header className="header">
      <nav className="container nav">
        <div className="logo-img"></div>
        <div>
          <ButtonDash text="Início" handleClick={logout} />
          <button className="dark-mode-btn" onClick={handleClick}></button>
        </div>
      </nav>
    </header>
  );
};
