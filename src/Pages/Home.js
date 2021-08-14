import Layout from "../Components/Layout";

function Home() {
  return (
    <Layout
      left={<div className="circle"></div>}
      right={<p className="heading-text">#neverforgotten</p>}
    />
  );
}

export default Home;
