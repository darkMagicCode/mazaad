import React, { useState } from "react";
import AuctionItem from "../molecules/AuctionItem";
import cardImg from "@/public/images/cardImg.png";
import TabContainer from "../molecules/TabContainer";
import { ProductForm } from "./ProductForm";

const AuctionList: React.FC = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <ProductForm isOpen={isOpen} onClose={() => setisOpen(false)} />

      <div className="flex  flex-col ">
        <div className="flex max-h-[50px] justify-between mt-5 ">
          <div className="hidden md:block">
            <TabContainer />
          </div>
          <div className="flex flex-col self-stretch my-auto w-[172px]">
            <button
              onClick={() => setisOpen(true)}
              className="flex flex-col h-[40px] justify-center px-4 py-3 w-full rounded-xl bg-[linear-gradient(90deg,#D20653_0%,#FF951D_100%)] "
            >
              <div className="flex gap-1 justify-center items-center">
                <div className="flex shrink-0 self-stretch my-auto h-[18px] w-[18px]" />
                <span>Add Review</span>
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 items-center w-[792px] max-md:w-full max-sm:w-full">
          {Array.from({ length: 6 }).map((_, index) => (
            <AuctionItem
              key={index}
              imageUrl={cardImg}
              title="Six-piece clothing set (blouse - pants - hat and ...)"
              startingPrice={1000}
              daysLeft={2}
              hoursLeft={10}
              minutesLeft={50}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AuctionList;
