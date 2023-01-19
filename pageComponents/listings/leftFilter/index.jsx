import { useState } from "react";
import Checkbox from "../../../components/Checkbox";
import Heading from "../../../components/Heading";

const LeftFilter = () => {
  const handleViewMore = () => {
    setPropertyLocation({
      ...propertyLocation,
      inputs: [
        { value: "Tumkur Road" },
        { value: "Sarjapur" },
        { value: "Chikbalapur" },
        { value: "Tumkur Road" },
        { value: "Tumkur Road" },
        { value: "Sarjapur" },
        { value: "Chikbalapur" },
        { value: "Tumkur Road" },
        { value: "Tumkur Road" },
      ],
    });
  };
  const propertyType = {
    label: "Property Type",
    name: "propertyType",
    inputs: [{ value: "Farm Land" }, { value: "Plot" }, { value: "Building" }],
  };
  const propertyStatus = {
    label: "Property Status",
    name: "propertyStatus",
    inputs: [
      { value: "Sold Out" },
      { value: "Resale" },
      { value: "Available" },
    ],
  };
  const [propertyLocation, setPropertyLocation] = useState({
    label: "Property Location",
    name: "propertyLocation",
    inputs: [
      { value: "Tumkur Road" },
      { value: "Sarjapur" },
      { value: "Chikbalapur" },
      { value: "Tumkur Road" },
    ],
    viewMore: true,
    callback: handleViewMore,
  });

  const costPerUnit = {
    label: "Cost per unit",
    name: "costPerUnit",
    inputs: [
      {
        value: "₹0 - ₹1,00,000",
      },
      {
        value: "₹1,00,000 - ₹5,00,000",
      },
      {
        value: "₹5,00,000 - ₹10,00,000",
      },
      {
        value: "₹10,00,000 - ₹25,00,000",
      },
      {
        value: ">₹25,00,000",
      },
    ],
  };
  const photos = {
    label: "Photos",
    name: "Photos",
    inputs: [
      {
        value: "Show with only photos",
      },
    ],
  };
  return (
    <div className="flex py-6 w-full flex-col sticky top-0 left-0">
      <div className="pl-[60px] w-full h-max pb-5 filter-shadow">
        <Heading extraClass={"font-normal"}>Filters</Heading>
      </div>
      <div>
        <Checkbox fields={propertyType} />
        <Checkbox fields={propertyStatus} />
        <Checkbox fields={propertyLocation} />
        <Checkbox fields={costPerUnit} />
        <Checkbox fields={photos} />
      </div>
    </div>
  );
};

export default LeftFilter;
