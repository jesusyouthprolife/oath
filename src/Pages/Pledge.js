import Layout from "../Components/Layout";
import { sendFeedback } from "../api";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { useState } from "react";

const override = css`
  width: 10px;
  height: 10px;
  margin-left: 10px;
`;

function Pledge({ goNextPage }) {
  const [loading, setLoading] = useState(false);
  return (
    <Layout
      left={
        <div>
          <p className="content-text">
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      }
      right={
        <>
          <form
            className="main-form"
            onSubmit={(e) => {
              setLoading(true);
              e.preventDefault();
              sendFeedback({
                name: "Test",
              })
                .then(() => {
                  setLoading(false);
                  goNextPage();
                })
                .catch(() => {
                  alert("Failed!");
                  setLoading(false);
                });
            }}
          >
            <div className="main-form-top">
              <label>
                Name:
                <input required type="text" name="name" />
              </label>
              <label>
                Email:
                <input required type="text" name="email" />
              </label>
            </div>
            <div className="main-form-bottom">
              <label>
                Mobile:
                <input type="text" name="name" />
              </label>
              <label>
                WhatsApp:
                <input type="text" name="name" />
              </label>
              <label>
                Country:
                <input type="text" name="name" />
              </label>
              <label>
                State:
                <input type="text" name="name" />
              </label>
            </div>
            <div>
              <button type="submit" className="pledge-button">
                Sign
              </button>
              {loading && (
                <ClipLoader
                  color={"#fff"}
                  loading={true}
                  size={150}
                  css={override}
                />
              )}
            </div>
          </form>
        </>
      }
    />
  );
}

export default Pledge;
