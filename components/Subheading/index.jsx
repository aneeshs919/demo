import { twMerge } from "tailwind-merge";

const SubHeading = ({ extraClass, children }) => {
  const classes = twMerge(
    `relative font-medium text-xs w-full text-PS_secondaryText font-Inter ${extraClass}`
  );
  return <h3 className={classes}>{children}</h3>;
};

export default SubHeading;
