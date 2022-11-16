import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";

export const Input = () => {
  return (
    <div>
      <label htmlFor="inputDescription">Descrição</label>
      <input
        className="inputDescription"
        id="inputDescription"
        type="text"
        placeholder="Digite aqui sua descrição"
      />
    </div>
  );
};
