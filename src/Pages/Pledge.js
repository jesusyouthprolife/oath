import Layout from "../Components/Layout";
import "react-phone-input-2/lib/style.css";
import { animated, useSpring, config } from "react-spring";

function Pledge({ goNextPage }) {
  const [{ scale, opacity }] = useSpring(() => ({
    // https://react-spring.io/common/props#props
    from: { scale: 1, opacity: 0.3 },
    to: { scale: 2, opacity: 0 },
    loop: true,
    delay: 200,
    config: config.molasses,
  }));

  const transform = (e) => `scale(${e})`;

  return (
    <Layout
      left={<div className="circle"></div>}
      right={
        <>
          <p className="heading-text">The ProLife Oath</p>
          <p className="content-text">
          {`As a member of the human race, the Crown of God's creation, I 
          solemnly pledge my life to the service of God and humanity; I will
          obey the Word of God and live in accordance with the Magisterial
          teachings of the Catholic Church; I will lead my life according to
          God's wonderful plan about love, sexuality, celibacy, marriage, family
          & human life; I will maintain the utmost respect for human life from
          the time of conception till natural death; In my capacity I will not
          permit the evils of contraception, sterilisation, abortion, artificial
          reproductive technology & euthanasia; I make these promises solemnly,
          freely, and upon my honour.`}
          </p>
          
          <button
            type="submit"
            style={{
              position: "relative",
              zIndex: 2,
            }}
            onClick={goNextPage}
            className="home-button"
          >
            <span style={{ zIndex: 5 }}>Sign my name</span>
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
        </>
      }
    />
  );
}

export default Pledge;
