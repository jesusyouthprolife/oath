import Layout from "../Components/Layout";

function Pledge({ goNextPage }) {
  return (
    <Layout
      left={<div className="circle"></div>}
      right={
        <>
          <p className="heading-text">Pledge</p>
          <button onClick={goNextPage}>next</button>
        </>
      }
    />
  );
}

export default Pledge;
