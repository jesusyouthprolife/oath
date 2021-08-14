import Layout from "../Components/Layout";

function Home({ goNextPage }) {
  return (
    <Layout
      left={<div className="circle"></div>}
      right={
        <>
          <p className="heading-text">#neverforgotten</p>
          <button onClick={goNextPage}>next</button>
        </>
      }
    />
  );
}

export default Home;
