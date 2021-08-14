import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Pledge from "./Pages/Pledge";
import Done from "./Pages/Done";

const pages = [Home, Pledge, Done];
function App() {
  const [pageNo, setPageNo] = useState(0);
  const ActivePage = pages[pageNo];

  const goNextPage = () => setPageNo(pageNo + 1);

  return <ActivePage goNextPage={goNextPage} />;
}

export default App;
