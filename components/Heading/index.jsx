import { twMerge } from "tailwind-merge";

const Heading = ({ extraClass, children }) => {
  const classes = twMerge(
    `text-black font-Inter font-semibold text-xl ${extraClass}`
  );
  return <h2 className={classes}>{children}</h2>;
};

export default Heading;
