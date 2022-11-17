import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";
import { useState } from "react";
import { Input } from "../Input";
import { InputPrice } from "../InputPrice";
import { Select } from "../Select";
import { Button } from "../Button";
import { calculateTotal } from "../Dashboard";

export const Form = ({
  list,
  setList,
  setListToRender,
  typeToRender,
  setTotal,
}) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      description: description,
      value: Number(value),
      type: type,
      id: list.length > 0 ? list[list.length - 1].id + 1 : 0,
    };

    const newList = [...list, obj];
    setList(newList);
    setTotal(calculateTotal(newList));
    const newListToRender =
      typeToRender === "entry" || typeToRender === "exit"
        ? newList.filter((e) => e.type === typeToRender)
        : [...newList];
    setListToRender(newListToRender);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <Input description={description} setDescription={setDescription} />
        <div className="inputs-wrapper">
          <InputPrice value={value} setValue={setValue}>
            <small className="tagPrice text-headline color-grey-400">R$</small>
          </InputPrice>
          <Select type={type} setType={setType} />
        </div>
        <Button text="Inserir valor" type="submit" />
      </form>
    </div>
  );
};
