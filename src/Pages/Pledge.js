import Layout from "../Components/Layout";
import { sendFeedback } from "../api";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { animated, useSpring, config } from "react-spring";

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

  const [{ scale, opacity }, set] = useSpring(() => ({
    // https://react-spring.io/common/props#props
    from: { scale: 1, opacity: 0.3 },
    to: { scale: 2, opacity: 0 },
    loop: true,
    delay: 200,
    config: config.molasses,
  }));

  const setField = (key, value) => {
    setFormValues({ ...formValues, [key]: value });
  };

  const setWhatsappDefault = (value) => {
    // const whatsappInput = document.querySelector("input[name=whatsapp]");
    // if (whatsappInput.value === "+91") whatsappInput.value = value;
  }

  const transform = (e) => `scale(${e})`;

  return (
    <Layout
      left={
        <>
          <p className="heading-text">The Prolife Oath</p>
          <p className="content-text">
            {`As a member of the human race, the Crown of God's creation, I 
          ${
            formValues.name || `(full name)`
          } solemnly pledge my life to the service of God and humanity; I will
          obey the Word of God and live in accordance with the Magisterial
          teachings of the Catholic Church; I will lead my life according to
          God's wonderful plan about love, sexuality, celibacy, marriage, family
          & human life; I will maintain the utmost respect for human life from
          the time of conception till natural death; In my capacity I will not
          permit the evils of contraception, sterilisation, abortion, artificial
          reproductive technology & euthanasia; I make these promises solemnly,
          freely, and upon my honour.`}
          </p>
        </>
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
                  set({
                    onRest: () => {
                      goNextPage();
                    },
                    config: config.default,
                    delay: 0,
                    from: { scale: 0, opacity: 1 },
                    to: { scale: 50, opacity: 1 },
                  });
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
                  // required
                  type="text"
                  onChange={(e) => setField("name", e.target.value)}
                />
              </label>
              <label>
                Email:
                <input
                  value={formValues.email}
                  // required
                  // type="email"
                  onChange={(e) => setField("email", e.target.value)}
                />
              </label>
            </div>
            <div className="main-form-bottom">
              <label>
                Phone:
                <PhoneInput
                  inputProps={{name: "phone"}}
                  value={formValues.phone}
                  country={"in"}
                  onChange={(phone) => { setWhatsappDefault(phone); setField("phone", phone); }}
                />
              </label>
              <label>
                WhatsApp:
                <PhoneInput
                  inputProps={{name: "whatsapp"}}
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
              <button
                type="submit"
                style={{
                  position: "relative",
                  zIndex: 2,
                }}
                className="pledge-button"
              >
                <span style={{ zIndex: 5 }}>Sign </span>
                <animated.div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transform: scale.to(transform),
                    backgroundColor: "white",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50px",
                    zIndex: 1,
                    opacity,
                  }}
                />
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
