import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";
import { Card } from "../Card";
import { EmptyList } from "../EmptyList";

export const CardsWrapper = ({
  list,
  setList,
  setTotal,
  listToRender,
  setListToRender,
  typeToRender,
  setTypeToRender,
}) => {
  return (
    <ul className="cards-wrapper">
      {listToRender.length > 0 ? (
        listToRender.map((e, index) => {
          return (
            <Card
              key={index}
              description={e.description}
              type={e.type}
              value={e.value}
              id={e.id}
              setList={setList}
              setTotal={setTotal}
              list={list}
              setListToRender={setListToRender}
              typeToRender={typeToRender}
              setTypeToRender={setTypeToRender}
            />
          );
        })
      ) : (
        <EmptyList />
      )}
    </ul>
  );
};
