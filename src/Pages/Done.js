import Layout from "../Components/Layout";

function Done({signCount}) {
  return (
    <div className="done-page">
      <Layout
        left={<div className="circle"></div>}
        right={
          <>
            <p className="heading-text">Thank you for standing up for life!</p>
            <p className="content-text">
              You are joined by {signCount} others in raising their voices on all actions against the dignity of human life. 
            </p>
            <p className="content-text">
              Please spread the message among and your friends and family and encourage them to take the oath!
            </p>
          </>
        }
      />
    </div>
  );
}

export default Done;
