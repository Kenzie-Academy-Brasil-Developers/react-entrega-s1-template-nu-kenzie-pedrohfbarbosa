import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";

export const ButtonDash = ({text, handleClick}) => {
  return (
    <button className="btn-dash bg-color-grey-200 color-grey-400 text-headline" onClick={handleClick}>
      {text}
    </button>
  )
}