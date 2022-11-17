import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";

export const TotalMoney = ({ totalSum }) => {
  return (
    <div className="total-money">
      <div className="total-wrapper">
        <h3>Valor total:</h3>
        <span>R$ {totalSum}</span>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
};
