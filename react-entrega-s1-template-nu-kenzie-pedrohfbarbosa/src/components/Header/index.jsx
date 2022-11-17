import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";
import { ButtonDash } from "../ButtonDash";

export const Header = ({ logout }) => {
  return (
    <header className="header">
      <nav className="container nav">
        <div className="logo-img"></div>
        <ButtonDash text="Início" handleClick={logout}/>
      </nav>
    </header>
  );
};
