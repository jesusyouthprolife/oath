function Layout({ left, right }) {
  return (
    <div className="container">
      <div className="content">
        <div className="left">{left}</div>
        <div className="right">{right}</div>
      </div>
    </div>
  );
}

export default Layout;
