import Layout from "../Components/Layout";

function Done() {
  return (
    <Layout
      left={<div className="circle"></div>}
      right={<p className="heading-text">Done</p>}
    />
  );
}

export default Done;
