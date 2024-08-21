import React from "react";

function Header() {
  return <div>헤더</div>;
}

function Footer() {
  return <div>푸터</div>;
}

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children} {/*<== children 은 Home  */}
      <Footer></Footer>
    </>
  );
};

export default Layout;
