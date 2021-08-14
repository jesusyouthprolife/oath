import Layout from "../Components/Layout";
import { animated, useSpring, config } from "react-spring";

function Home({ goNextPage }) {
  const [{ scale, opacity }] = useSpring(() => ({
    // https://react-spring.io/common/props#props
    from: { scale: 0.6, opacity: 0.3 },
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
          <p className="heading-text">15.6 MILLION</p>
          <p className="content-text">
            That's the number of unborns aborted every year, in India alone,
            since the introduction of the MTP act in 1971. They deserve a chance
            to live and the change starts with you. Your prayers and actions go
            a long way in bringing in a change and promoting a culture of life.
            Take the prolife oath today to get started.
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
            <span style={{ zIndex: 5 }}>Take the pledge</span>
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

export default Home;
