import logo from "../../public/logo.png";
const Header = () => {
  //   console.log(logo);
  return (
    <div className="flex relative bg-PS_primary py-4 px-16">
      <div className="relative w-2/12">
        <img src={logo.src} alt="Couldnot load image" className="max-w-full" />
      </div>
    </div>
  );
};

export default Header;
