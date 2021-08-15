import Layout from "../Components/Layout";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

function Done({ signCount }) {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div className="done-page">
      <Layout
        left={<div className="circle done"></div>}
        right={
          <>
            <p className="heading-text">Thank you for standing up for life!</p>
            <p className="content-text">
              You are joined by {signCount - 1} others in raising their voices
              on actions against the dignity of human life.
            </p>
            <p className="content-text">
              Please spread the message among your friends and family and
              encourage them to take the oath!
            </p>
            <CopyToClipboard
              text={window.location.href}
              onCopy={() => {
                setIsCopied(true);
              }}
            >
              <button
                type="submit"
                style={{
                  position: "relative",
                  zIndex: 2,
                }}
                className="done-button"
              >
                {isCopied ? "Link copied" : "Copy link"}
              </button>
            </CopyToClipboard>
          </>
        }
      />
    </div>
  );
}

export default Done;
