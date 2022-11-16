import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";

export const InputPrice = ({ children }) => {
  return (
    <div>
      <label htmlFor="inputPrice">Valor</label>
      <div className="input-wrapper">
        <input id="inputPrice" type="number" placeholder="0" />
        {children}
      </div>
    </div>
  );
};
