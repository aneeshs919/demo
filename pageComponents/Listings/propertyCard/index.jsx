import { useRouter } from "next/router";
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import SubHeading from "../../../components/Subheading";

const Property = ({ property }) => {
  const router = useRouter();
  return (
    <div className="relative p-5 flex bg-white gap-4 rounded-[4px]">
      <div className="w-2/5">
        <img
          src={property.image_url}
          alt="Couldn't load image"
          srcset=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex gap-4 flex-wrap w-3/5">
        <div className="w-full">
          <Heading>{property.title}</Heading>
          <Heading
            extraClass={"text-PS_accent text-base font-medium capitalize"}
          >
            {property.locality}
          </Heading>
        </div>
        <div className="w-[31%]">
          <SubHeading>Total area plot</SubHeading>
          <div className="font-Inter text-base font-medium">
            {property.plot.total_area_plot}
          </div>
        </div>
        <div className="w-[31%]">
          <SubHeading>Total units</SubHeading>
          <div className="font-Inter text-base font-medium">
            {property.plot.total_units}
          </div>
        </div>
        <div className="w-[31%]">
          <SubHeading>Cost per unit</SubHeading>
          <div className="font-Inter text-base font-medium">
            {property.plot.cost_per_unit}
          </div>
        </div>
        <div className="w-[31%]">
          <SubHeading>Max units per person</SubHeading>
          <div className="font-Inter text-base font-medium">
            {property.plot.max_units_per_person}
          </div>
        </div>
        {property.plot.bid_open ? (
          <div className="w-[31%]">
            <SubHeading>Increase in last 5yrs</SubHeading>
            <div className="font-Inter text-base font-medium">
              {property.plot.last_5yrs}
            </div>
          </div>
        ) : (
          <div className="w-[31%]">
            <SubHeading>Listed date</SubHeading>
            <div className="font-Inter text-base font-medium">
              {property.plot.listed_date}
            </div>
          </div>
        )}

        <div className="w-[31%]">
          <SubHeading>Yield</SubHeading>
          <div>{property.plot.Yield}</div>
        </div>
        <div className="w-full flex justify-end">
          {property.plot.bid_open ? (
            <div className="flex gap-4 items-center">
              <div>
                <SubHeading>Bid open till</SubHeading>
                <div className="font-Inter text-base font-medium">
                  {property.plot.listed_date}
                </div>
              </div>
              <div>
                <Button
                  label={"Buy Now"}
                  extraClass={"w-[154px]"}
                  callback={() => {
                    router.push("/details");
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="flex gap-4 items-end">
              <div>
                <SubHeading>IIR Listed from</SubHeading>
                <div className="font-Inter text-base font-medium">
                  {property.plot.listed_date}
                </div>
              </div>
              <div>
                <Button
                  label={"View Bid Details"}
                  extraClass={"w-[154px]"}
                  callback={() => {
                    router.push("/details");
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Property;
