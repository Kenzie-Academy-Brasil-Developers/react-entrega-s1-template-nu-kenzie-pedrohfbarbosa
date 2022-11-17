import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";
import imgLogo from "../../assets/img/NuKenzie.svg";
import imgIllustration from "../../assets/img/illustration.svg";
import { Button } from "../Button";

export const Home = ({ login }) => {
  return (
    <div className="home-content bg-color-grey-400">
      <div className="container home-content-wrapper">
        <div className="aside-content">
          <figure>
            <img src={imgLogo} alt="Logo" />
          </figure>
          <h2 className="title-1 color-grey-100">
            Centralize o controle das suas finanças
          </h2>
          <span className="color-grey-100">de forma rápida e segura</span>
          <Button handleClick={login} text="Iniciar" />
        </div>
        <figure className="img-Illus">
          <img src={imgIllustration} alt="Illustration" />
        </figure>
      </div>
    </div>
  );
};
