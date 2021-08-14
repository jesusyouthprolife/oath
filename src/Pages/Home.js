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
          <p className="heading-text">#neverforgotten</p>
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
