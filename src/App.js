import { useState } from "react";
import { getSignCount } from "./api";
import "./App.css";
import Home from "./Pages/Home";
import Pledge from "./Pages/Pledge";
import Sign from "./Pages/Sign";
import Done from "./Pages/Done";

const pages = [Home, Pledge, Sign, Done];
function App() {
  const [pageNo, setPageNo] = useState(0);
  const ActivePage = pages[pageNo];

  const goNextPage = () => setPageNo(pageNo + 1);

  const [signCount, setSignCount] = useState(0);
  getSignCount((count) => setSignCount(count));

  return <ActivePage goNextPage={goNextPage} signCount={signCount} />;
}

export default App;
