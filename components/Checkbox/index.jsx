import { useState } from "react";

const Checkbox = ({ fields }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="pl-[60px] w-full filter-shadow py-6 flex flex-col">
        <label className="text-base font-Inter text-PS_secondaryText font-medium">
          {fields.label}
        </label>
        <div className="flex flex-col gap-3 mt-4">
          {fields.inputs.map((element) => {
            return (
              <>
                <div className="flex gap-4 font-Inter text-PS_secondaryText text-[14px]">
                  <input
                    type="checkbox"
                    value={element.value.split(" ").join("-")}
                    name={fields.name}
                  />
                  <label>{element.value}</label>
                </div>
              </>
            );
          })}
        </div>
        {fields.viewMore && (
          <a
            className="decoration-transparent text-PS_accent font-Inter text-sm mt-4 cursor-pointer"
            onClick={(e) => {
              fields.callback();
              setOpen(!open);
            }}
          >
            {!open ? "View More" : "View Less"}
          </a>
        )}
      </div>
    </>
  );
};

export default Checkbox;
