import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";
import { Form } from "../Form";
import { TotalMoney } from "../TotalMoney";

export const Aside = ({total}) => {
  return (
    <aside className="aside">
      <Form />
      <TotalMoney totalSum={total} />
    </aside>
  );
};
