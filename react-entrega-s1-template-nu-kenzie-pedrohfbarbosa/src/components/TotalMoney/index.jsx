import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";

export const TotalMoney = ({ totalSum }) => {
  return (
    <div className="total-money">
      <div className="total-wrapper">
        <h3 className="title-3 color-grey-400">Valor total:</h3>
        <span
          className={
            totalSum >= 0
              ? "text-headline color-brand-300"
              : "text-headline color-brand-200"
          }
        >
          {totalSum >= 0 ? `R$ ${totalSum}` : `- R$ ${Math.abs(totalSum)}`}
        </span>
      </div>
      <span className="text-body color-grey-400">
        O valor se refere ao saldo
      </span>
    </div>
  );
};
