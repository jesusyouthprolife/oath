function Layout({ left, right }) {
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="left">{left}</div>
          <div className="right">{right}</div>
        </div>
        <div className="footer">
          <b>Contact us</b>
          <span>&bull;</span>
          <br />
          <b>Email:</b>{" "}
          <a href="mailto:jyindiaprolife@gmail.com">jyindiaprolife@gmail.com</a>
          <span>&bull;</span>
          <br />
          <b>Phone / Whatsapp:</b>{" "}
          <a href="tel:+91 988-604-2540">+91 988-604-2540</a>
        </div>
      </div>
    </>
  );
}

export default Layout;
