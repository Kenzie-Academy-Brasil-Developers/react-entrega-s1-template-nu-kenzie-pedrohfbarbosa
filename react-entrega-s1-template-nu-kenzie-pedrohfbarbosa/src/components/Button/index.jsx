import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";

export const Button = ({ text, handleClick, type }) => {
  return (
    <button
      type={type}
      className="btn-standard bg-color-brand-100 text-headline"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
