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

export const calculateTotal = (list) => {
  const sumEntry = list
    .filter((e) => e.type === "entry")
    .reduce((x, y) => x + y.value, 0);
  const sumExit = list
    .filter((e) => e.type === "exit")
    .reduce((x, y) => x + y.value, 0);
  return sumEntry - sumExit;
};

export const Dashboard = ({ setHomePage }) => {
  const [isDarkmode, setDarkmode] = useState(false);
  const [list, setList] = useState([]);
  const [listToRender, setListToRender] = useState([...list]);
  const [typeToRender, setTypeToRender] = useState("all");
  const [total, setTotal] = useState(calculateTotal(list));

  return (
    <div className={isDarkmode ? "dash-content dark-mode" : "dash-content"}>
      <Header
        setHomePage={setHomePage}
        isDarkmode={isDarkmode}
        setDarkmode={setDarkmode}
      />
      <div className="container dashboard">
        <Aside
          total={total}
          list={list}
          setList={setList}
          listToRender={listToRender}
          setListToRender={setListToRender}
          typeToRender={typeToRender}
          setTotal={setTotal}
        />
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
