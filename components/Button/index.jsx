const Button = ({
  type = "button",
  variant = "filled",
  extraClass,
  iconLeft,
  iconRight,
  disabled = false,
  label,
  callback,
}) => {
  let colors = "";
  if (variant === "filled")
    colors =
      "bg-PS_accent text-white border-PS_accent hover:bg-transparent hover:text-PS_accent";
  if (variant === "outlined")
    colors =
      "bg-white text-PS_accent border-PS_accent hover:bg-PS_accent hover:text-white";
  let classes = `relative py-3 w-full border-2 rounded flex justify-center transition-all items-center outline-none p-0 m-0 box-border text-base font-Inter font-[600] tracking-wide ${colors} ${extraClass}`;
  return (
    <button
      type={type}
      className={classes}
      onClick={callback}
      disabled={disabled}
      value={label}
    >
      {iconLeft && <div>{iconLeft}</div>}
      {label}
      {iconRight && <div>{iconRight}</div>}
    </button>
  );
};

export default Button;
