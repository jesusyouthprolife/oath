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
          {`As a member of the human race, the Crown of God's creation, I 
          ${
            formValues.name || `(full name)`
          } solemnly pledge my life to the service of God and humanity; I will
          obey the Word ofGod and live in accordance with the Magisterial
          teachings of the Catholic Church; I will lead my life according to
          God's wonderful plan about love, sexuality, celibacy, marriage, family
          & human life; I will maintain the utmost respect for human life from
          the time of conception till natural death; In my capacity I will not
          permit the evils of contraception, sterilisation, abortion, artificial
          reproductive technology & euthanasia; I make these promises solemnly,
          freely, and upon my honour.`}
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
                  type="email"
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
