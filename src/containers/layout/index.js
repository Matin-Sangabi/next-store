import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="max-w-screen-xl mx-auto pt-5">{children}</div>
    </>
  );
};

export default Layout;
