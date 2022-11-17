import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";

export const Input = ({ setDescription }) => {
  const handleOnChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div>
      <label className="text-body color-grey-400" htmlFor="inputDescription">
        Descrição
      </label>
      <input
        className="inputDescription text-headline color-grey-300"
        id="inputDescription"
        type="text"
        name="description"
        placeholder="Digite aqui sua descrição"
        onChange={handleOnChange}
        required
      />
      <span className="text-body color-grey-300">Ex: Compra de roupas</span>
    </div>
  );
};
