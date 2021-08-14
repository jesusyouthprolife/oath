import Layout from "../Components/Layout";
import { sendFeedback } from "../api";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const override = css`
  width: 10px;
  height: 10px;
  margin-left: 10px;
`;

function Pledge({ goNextPage }) {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    country: "",
    region: "",
  });

  const setField = (key, value) => {
    setFormValues({ ...formValues, [key]: value });
  };

  return (
    <Layout
      left={
        <p className="content-text">
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      }
      right={
        <>
          <form
            className="main-form"
            onSubmit={(e) => {
              setLoading(true);
              e.preventDefault();
              sendFeedback(formValues)
                .then(() => {
                  setLoading(false);
                  goNextPage();
                })
                .catch(() => {
                  alert("Something went wrong, please try again!");
                  setLoading(false);
                });
            }}
          >
            <div className="main-form-top">
              <label>
                Name:
                <input
                  value={formValues.name}
                  required
                  type="text"
                  onChange={(e) => setField("name", e.target.value)}
                />
              </label>
              <label>
                Email:
                <input
                  value={formValues.email}
                  required
                  type="text"
                  onChange={(e) => setField("email", e.target.value)}
                />
              </label>
            </div>
            <div className="main-form-bottom">
              <label>
                Phone:
                <PhoneInput
                  value={formValues.phone}
                  country={"in"}
                  onChange={(phone) => setField("phone", phone)}
                />
              </label>
              <label>
                WhatsApp:
                <PhoneInput
                  country={"in"}
                  onChange={(phone) => setField("whatsapp", phone)}
                />
              </label>
              <label>
                Country:
                <input
                  value={formValues.country}
                  type="text"
                  onChange={(e) => setField("country", e.target.value)}
                />
              </label>
              <label>
                Region:
                <input
                  value={formValues.region}
                  type="text"
                  onChange={(e) => setField("region", e.target.value)}
                />
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
