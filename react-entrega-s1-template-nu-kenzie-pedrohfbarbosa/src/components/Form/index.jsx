import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";
import { Input } from "../Input";
import { InputPrice } from "../InputPrice";
import { Select } from "../Select";
import { Button } from "../Button";

export const Form = () => {
  return (
    <div>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <Input/>
        <div className="inputs-wrapper">
          <InputPrice>
          <small className="tagPrice">R$</small>
          </InputPrice>
          <Select/>
        </div>
        <Button text="Inserir valor" type="submit"/>
      </form>
      
    </div>
  )
}