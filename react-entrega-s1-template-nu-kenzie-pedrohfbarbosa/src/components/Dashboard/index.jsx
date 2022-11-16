import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";
import { Header } from "../Header";
import { Aside } from "../Aside";

export const Dashboard = ({ logout }) => {
  return (
    <div>
      <Header logout={logout} />
      <div className="container">
        <Aside />
      </div>
    </div>
  );
};
