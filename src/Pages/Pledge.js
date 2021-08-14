import Layout from "../Components/Layout";
import { sendFeedback } from "../api";

function Pledge({ goNextPage }) {
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
          <p className="heading-text">Pledge</p>
          <form
            className="main-form"
            onSubmit={(e) => {
              e.preventDefault();
              sendFeedback({
                name: "Test",
              })
                .then(() => {
                  alert("Submitted!");
                })
                .catch(() => {
                  alert("Failed!");
                });
            }}
          >
            <label>
              Name:
              <input required type="text" name="name" />
            </label>
            <label>
              Email:
              <input required type="text" name="email" />
            </label>
            <label>
              WhatsApp:
              <input type="text" name="name" />
            </label>
            <label>
              Mobile:
              <input type="text" name="name" />
            </label>

            <label>
              State:
              <input type="text" name="name" />
            </label>
            <label>
              Country:
              <input type="text" name="name" />
            </label>
          </form>
          <button onClick={goNextPage}>Sign</button>
        </>
      }
    />
  );
}

export default Pledge;
