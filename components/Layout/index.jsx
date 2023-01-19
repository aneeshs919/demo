import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <div className="max-w-7xl mx-auto"> */}
      {/* This is layout component */}
      {children}
      {/* </div> */}
    </>
  );
};

export default Layout;
