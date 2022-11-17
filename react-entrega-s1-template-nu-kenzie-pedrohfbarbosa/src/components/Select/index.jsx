import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";

export const Select = ({ setType }) => {
  const handleChange = (e) => {
    setType(e.target.value);
  };
  return (
    <div>
      <label className="text-body color-grey-400" htmlFor="inputSelect">
        Tipo de valor
      </label>
      <select
        onChange={handleChange}
        className="select color-grey-300"
        name="valueType"
        id="inputSelect"
        required
      >
        <option value="">Tipo de valor</option>
        <option value="entry">Entrada</option>
        <option value="exit">Saída</option>
      </select>
    </div>
  );
};
