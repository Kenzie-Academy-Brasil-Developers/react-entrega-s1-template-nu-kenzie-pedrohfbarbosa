import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";
import { Form } from "../Form";
import { TotalMoney } from "../TotalMoney";

export const Aside = ({
  total,
  list,
  setList,
  listToRender,
  setListToRender,
  typeToRender,
  setTotal,
}) => {
  return (
    <aside className="aside">
      <Form
        list={list}
        setList={setList}
        listToRender={listToRender}
        setListToRender={setListToRender}
        typeToRender={typeToRender}
        setTotal={setTotal}
      />
      <TotalMoney totalSum={total} />
    </aside>
  );
};
