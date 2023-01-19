import Button from "../../components/Button";
import Heading from "../../components/Heading";
import SubHeading from "../../components/Subheading";
import { data } from "../../globals/listings.data";
import LeftFilter from "./leftFilter";
import Property from "./propertyCard";
import TopFilter from "./topFilter";

const Listings = () => {
  const propertiesData = data.houses;
  return (
    <>
      <TopFilter />
      <div className="flex relative">
        <div className="bg-white flex w-4/12 whitespace-nowrap relative">
          <LeftFilter />
        </div>
        <div className="flex flex-col w-auto bg-zinc-200 p-8">
          <p className="text-xs font-Inter text-PS_primaryText tracking-wide">
            Home &gt; Bangalore &gt; All Properties
          </p>
          <Heading extraClass={"my-4"}>
            32 Properties found in HSR Layout
          </Heading>
          <div className="flex gap-4 flex-col">
            {propertiesData.map((element) => {
              return <Property property={element} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Listings;
