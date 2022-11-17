import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";
import { useState } from "react";
import { Header } from "../Header";
import { Aside } from "../Aside";
import { MainHeader } from "../MainHeader";
import { CardsWrapper } from "../CardsWrapper";
import { EmptyList } from "../EmptyList";

const listTest = [
  {
    id: 0,
    description: "Salário",
    value: 10000,
    type: "entry",
  },
  {
    id: 1,
    description: "Gastos",
    value: 1000,
    type: "exit",
  },
  {
    id: 2,
    description: "Vendas",
    value: 1000,
    type: "entry",
  },
  {
    id: 3,
    description: "Contas a pagar",
    value: 500,
    type: "exit",
  },
];

const calculateTotal = (list) => {
  const sumEntry = list
    .filter((e) => e.type === "entry")
    .reduce((x, y) => x + y.value, 0);
  const sumExit = list
    .filter((e) => e.type === "exit")
    .reduce((x, y) => x + y.value, 0);
  return sumEntry - sumExit;
};

export const Dashboard = ({ logout }) => {
  const [list, setList] = useState([...listTest]);
  const [listToRender, setListToRender] = useState([...list]);
  const [typeToRender, setTypeToRender] = useState("all");
  const [total, setTotal] = useState(calculateTotal(list));

  return (
    <div>
      <Header logout={logout} />
      <div className="container dashboard">
        <Aside total={total} />
        <main className="main-content">
          <MainHeader
            typeToRender={typeToRender}
            setTypeToRender={setTypeToRender}
            listToRender={listToRender}
            setListToRender={setListToRender}
            list={list}
          />
          {list.length > 0 ? (
            <CardsWrapper
              list={list}
              setList={setList}
              setTotal={setTotal}
              listToRender={listToRender}
              setListToRender={setListToRender}
              typeToRender={typeToRender}
              setTypeToRender={setTypeToRender}
            />
          ) : (
            <EmptyList />
          )}
        </main>
      </div>
    </div>
  );
};
