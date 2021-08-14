import "./App.css";
import Layout from "./Components/Layout";

function App() {
  return (
    <Layout
      left={<div className="circle"></div>}
      right={<p className="heading-text">#neverforgotten</p>}
    />
  );
}

export default App;
