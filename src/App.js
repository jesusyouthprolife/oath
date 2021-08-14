import { useState } from "react";
import { getSignCount } from "./api";
import "./App.css";
import Home from "./Pages/Home";
import Pledge from "./Pages/Pledge";
import Done from "./Pages/Done";

const pages = [Home, Pledge, Done];
function App() {
  const [signCount, setSignCount] = useState(0);
  getSignCount((count) => setSignCount(count));

  const [pageNo, setPageNo] = useState(0);
  const ActivePage = pages[pageNo];

  const goNextPage = () => setPageNo(pageNo + 1);

  return <ActivePage goNextPage={goNextPage} signCount={signCount} />;
}

export default App;
