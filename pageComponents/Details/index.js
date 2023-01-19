import Heading from "../../components/Heading";
import { GoLocation } from "react-icons/go";
import { SlPlane } from "react-icons/sl";
import { data } from "../../globals/single.data";
import Divider from "../../components/Divider";
import SubHeading from "../../components/Subheading";
const Details = () => {
  console.log(data);
  return (
    <div className="bg-zinc-200 w-full flex flex-col px-20 py-5">
      <div className="mb-3">
        <p className="text-xs font-Inter text-PS_secondaryText tracking-wide">
          Home &gt; Bangalore &gt; All Properties &gt; Property Details
        </p>
      </div>
      <div className="flex flex-row w-full gap-x-10">
        <div className="bg-white w-8/12 p-8 flex flex-col">
          {/* Image Carousel */}
          <div className="flex flex-nowrap max-w-full overflow-x-scroll overflow-y-hidden gap-x-10 max-h-[400px] snap-proximity snap-x">
            {data.house.photos.map((element) => {
              return (
                <img
                  src={element.photouploader.url}
                  className={"object-cover w-[500px] snap-center"}
                />
                // </div>
              );
            })}
          </div>
          {/* Title for the property */}
          <Heading extraClass={"text-4xl mt-8"}>{data.house.title}</Heading>

          {/* Location for the property */}
          <div className="flex items-center gap-x-2 mt-2">
            <GoLocation color="#EE4036" />
            <Heading extraClass={"text-PS_accent text-lg font-medium"}>
              {data.house.title}
            </Heading>
          </div>

          {/* Property Details */}
          <div className="w-full flex mt-8 flex-wrap gap-y-9">
            <div className="w-[31%]">
              <SubHeading extraClass={"text-base"}>Total area plot</SubHeading>
              <div className="font-Inter text-xl font-medium mt-2">
                {data.house.plot.total_area_plot}
              </div>
            </div>
            <div className="w-[31%]">
              <SubHeading extraClass={"text-base"}>Total units</SubHeading>
              <div className="font-Inter text-xl font-medium">
                {data.house.plot.total_units}
              </div>
            </div>
            <div className="w-[31%]">
              <SubHeading extraClass={"text-base"}>Cost per unit</SubHeading>
              <div className="font-Inter text-xl font-medium">
                {data.house.plot.cost_per_unit}
              </div>
            </div>
            <div className="w-[31%]">
              <SubHeading extraClass={"text-base"}>
                Max units per person
              </SubHeading>
              <div className="font-Inter text-xl font-medium">
                {data.house.plot.max_units_per_person}
              </div>
            </div>

            {data.house.plot.bid_open ? (
              <div className="w-[31%]">
                <SubHeading extraClass={"text-base"}>
                  Increase in last 5yrs
                </SubHeading>
                <div className="font-Inter text-xl font-medium">
                  {data.house.plot.last_5yrs}
                </div>
              </div>
            ) : (
              <div className="w-[31%]">
                <SubHeading extraClass={"text-base"}>Listed date</SubHeading>
                <div className="font-Inter text-xl font-medium">
                  {data.house.plot.listed_date}
                </div>
              </div>
            )}

            <div className="w-[31%]">
              <SubHeading extraClass={"text-base"}>Yield</SubHeading>
              <div className="font-Inter text-xl font-medium">
                {data.house.plot.Yield}
              </div>
            </div>
            <div className="w-full flex justify-start">
              {data.house.plot.bid_open ? (
                <div className="flex gap-4 items-center">
                  <div>
                    <SubHeading extraClass={"text-base"}>
                      Bid open till
                    </SubHeading>
                    <div className="font-Inter text-xl font-medium">
                      {data.house.plot.listed_date}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex gap-4 items-end">
                  <div>
                    <SubHeading extraClass={"text-base"}>
                      IIR Listed from
                    </SubHeading>
                    <div className="font-Inter text-xl font-medium">
                      {data.house.plot.listed_date}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <Divider />
          {data.house.bids && (
            <div>
              <Heading extraClass={"text-2xl"}>Ongoing Bids</Heading>
              <div className="flex flex-col gap-y-4 mt-5">
                {data.house.bids.map((element, index) => {
                  return (
                    <div key={index} className="flex w-full justify-between">
                      <div className="w-1/4 text-base text-PS_secondaryText font-Inter font-normal">
                        {element.date}
                      </div>
                      <div className="w-1/4 text-base text-PS_primaryText font-Inter font-semibold">
                        {element.amount}
                      </div>
                      <div className="w-1/4 text-base text-PS_secondaryText font-Inter font-normal">
                        {element.units}
                      </div>
                      <div
                        className={`w-1/4 capitalize font-Inter font-semibold ${
                          element.status === "rejected"
                            ? "text-PS_rejected"
                            : "text-PS_accepted"
                        }`}
                      >
                        {element.status}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          <Divider />
          <div>
            <Heading extraClass={"text-2xl"}>About Property</Heading>
            <p className="font-Inter text-PS_secondaryText text-base font-normal mt-3 text-justify">
              {data.house.descriptions[1].description}
            </p>
          </div>
          <Divider />
          <Heading extraClass={"text-2xl mb-5"}>Latest Developments</Heading>
          <div className="w-full relative">
            <div class="absolute w-[100%] border-t-2 border-dashed top-0" />
            <div className="w-full overflow-x-scroll flex flex-nowrap gap-x-8">
              {data.house.development.map((element, index) => {
                return (
                  <div key={index} className="min-w-[250px]">
                    <p className="w-full font-medium text-PS_primaryText text-base font-Inter mt-4">
                      {"Sep 10, 2023"}
                    </p>
                    <p className="w-full font-normal text-PS_secondaryText mt-4 text-xs font-Inter">
                      {element.note}
                    </p>

                    <img
                      src={element.photo.url}
                      alt=""
                      srcset=""
                      className="mt-5"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <Divider />
          <div>
            <Heading extraClass={"text-2xl"}>Property Location</Heading>
            <p className="font-Inter text-PS_secondaryText text-base font-normal mt-3 text-justify">
              The asset is located on Old Madras Road, along the
              Hoskote-Narasapura Belt. The area is well connected to Bengaluru,
              Chennai, and Tirupati. The area is also close to the upcoming
              Bengaluru-Chennai expressway.
            </p>
            <div className="flex w-full gap-x-20 mt-5">
              {data.house.location_away.map((element) => {
                return (
                  <div className="flex mt-5 gap-x-4">
                    <div className="flex w-[36px] h-[36px] rounded-[50%] justify-center items-center text-PS_accent bg-[#FFE6E4]">
                      <SlPlane />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-sm text-PS_secondaryText font-Inter font-medium">
                        {element.place}
                      </div>
                      <div className="text-xl text-PS_primaryText font-Inter font-semibold">
                        {element.away}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.88653968484!2d77.49085341050437!3d12.953959987525426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1668954759209!5m2!1sen!2sin"
              width="100%"
              height="350"
              allowfullscreen=""
              loading="lazy"
              className="mt-4"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
          <Divider />
          <div className="flex flex-col">
            <Heading extraClass={"text-2xl"}>Other Prices</Heading>
            <div className="flex justify-between mt-5">
              <div className="text-base font-Inter font-normal text-PS_secondaryText">
                Maintainance Fee
              </div>
              <div className="text-base font-Inter font-semibold text-PS_primaryText">
                {data.house.other_prices.maintain_fee}
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <div className="text-base font-Inter font-normal text-PS_secondaryText">
                Entry Fee
              </div>
              <div className="text-base font-Inter font-semibold text-PS_primaryText">
                {data.house.other_prices.entry_fee}
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <div className="text-base font-Inter font-normal text-PS_secondaryText">
                Exit Fee
              </div>
              <div className="text-base font-Inter font-semibold text-PS_primaryText">
                {data.house.other_prices.exit_fee}
              </div>
            </div>
          </div>
          <Divider />
          <div>
            <Heading extraClass={"text-2xl"}>
              Expert Opinion: Why bet on Devanahalli?
            </Heading>
            <div title="Expert Opinion: Why bet on Devanahalli?" className="">
              <p className="font-Inter text-PS_secondaryText text-base font-normal mt-3 text-justify">
                The town is located 40 kilometres (25 mi) to the north-east of
                Bengaluru. Devanahalli is the site of Kempegowda International
                Airport. A multibillion-dollar Devanahalli Business Park with
                two IT Parks are coming up on nearly 400 acres (1.6 km2)
                adjoining the airport. An Aerospace Park, Science Park and a ₹10
                billion (US$130 million) Financial City are also coming up.A new
                satellite ring road will connect the city with Doddaballapur.
                Devanahalli is situated near the upcoming ₹1,500 billion (US$19
                billion), 12,000-acre (49 km2) BIAL IT Investment Region, to be
                the largest IT region in India. Total infrastructure development
                in the area is estimated to be well over ₹20,450 billion (US$260
                billion) over the next two years. With significant commercial
                and residential development in the area, real estate is in high
                demand in the region.
              </p>
            </div>
            <br />
            <div className="font-Inter text-PS_secondaryText text-base font-normal mt-3 text-justify">
              Developments in the last 3 years
            </div>
            <ul className="font-Inter text-PS_secondaryText text-base font-normal mt-3 text-justify pl-4 list-disc">
              <li>
                Financial SEZ - 4 kms away. Companies like shell have set up
                factories
              </li>
              <li>Embasy business tech park - 3 kms away</li>
              <li>Railway line and station at a distnace of 3 kms</li>
            </ul>
            <br />
            <div className="font-Inter text-PS_secondaryText text-base font-normal text-justify">
              Review from
            </div>
            <div className="font-Inter text-PS_primaryText text-base font-normal text-justify">
              Saideep | Real Estate guru
            </div>
          </div>
        </div>

        <div className="bg-white w-4/12 p-8 h-max"></div>
      </div>
    </div>
  );
};

export default Details;
