import Layout from "../Components/Layout";
import { sendFeedback } from "../api";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { animated, useSpring, config } from "react-spring";

const override = css`
  width: 10px;
  height: 10px;
  margin-left: 10px;
`;

function Sign({ goNextPage }) {
  const [loading, setLoading] = useState(false);
  const [painted, setPainted] = useState(false);
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

  useEffect(() => {
    if (!painted) {
      document.getElementById("name").focus();
      setPainted(true);
    }
  }, [painted])

  return (
    <Layout
      left={<div className="circle"></div>}
      right={
        <>
          {/* <p className="heading-text">Sign the oath</p> */}
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
              <label>Signed by
                <input
                  id="name"
                  value={formValues.name}
                  type="text"
                  placeholder="Type your name"
                  required
                  class="heading-text"
                  onChange={(e) => setField("name", e.target.value)}
                />
              </label>
            </div>
            <div class="prompt">Would you like to share some additional details with us so that we can reach out to you for future initiatives? 
            We don't share your information with third parties and filling this section is completely optional.</div>
            <div className="main-form-bottom">
              <label>
                <span>Email</span>
                <input
                  value={formValues.email}
                  type="email"
                  onChange={(e) => setField("email", e.target.value)}
                />
              </label>
              <label>
                Phone
                <PhoneInput
                  inputProps={{name: "phone"}}
                  value={formValues.phone}
                  country={"in"}
                  onChange={(phone) => { setWhatsappDefault(phone); setField("phone", phone); }}
                />
              </label>
              <label>
                WhatsApp
                <PhoneInput
                  inputProps={{name: "whatsapp"}}
                  country={"in"}
                  onChange={(phone) => setField("whatsapp", phone)}
                />
              </label>
              <label>
                Country
                <input
                  value={formValues.country}
                  type="text"
                  onChange={(e) => setField("country", e.target.value)}
                />
              </label>
              <label>
                State/Region
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
                }}
                className="sign-button"
              >
                <span style={{  }}>Sign </span>
                
                {loading && (
                  <ClipLoader
                    color={"#000"}
                    loading={true}
                    size={150}
                    css={override}
                  />
                )}
                
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
                    opacity,
                  }}
                />
              </button>
            </div>
          </form>
        </>
      }
    />
  );
}

export default Sign;
