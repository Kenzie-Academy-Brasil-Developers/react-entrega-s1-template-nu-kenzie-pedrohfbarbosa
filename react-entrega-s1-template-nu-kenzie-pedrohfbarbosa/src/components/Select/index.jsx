import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";

export const Select = () => {
  return (
    <div>
      <label htmlFor="inputSelect">Tipo de valor</label>
      <select className="select" name="valueType" id="inputSelect">
        <option value="entry">Entrada</option>
        <option value="exit">Saída</option>
      </select>
    </div>
  );
};
