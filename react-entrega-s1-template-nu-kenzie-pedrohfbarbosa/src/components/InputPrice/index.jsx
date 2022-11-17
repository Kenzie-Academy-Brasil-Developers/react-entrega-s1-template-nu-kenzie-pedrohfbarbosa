import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";

export const InputPrice = ({ children, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <label className="text-body color-grey-400" htmlFor="inputPrice">
        Valor
      </label>
      <div className="input-wrapper">
        <input
          className="text-headline color-grey-300"
          onChange={handleChange}
          id="inputPrice"
          type="number"
          name="type"
          placeholder="0"
          required
        />
        {children}
      </div>
    </div>
  );
};
