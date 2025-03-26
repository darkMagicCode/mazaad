import Image from "next/image";
import * as React from "react";
import { UserInsides } from "../atoms/UserInsides";

function UserCard() {
  return (
    <>
      <div className="p-6 bg-white rounded-3xl h-[391px] w-[407px] max-md:w-full max-md:h-auto max-md:max-w-[407px]">
        <div className="flex flex-col gap-4">
          <Image
            width={100}
            height={100}
            src="https://dummyimage.com/100x100.png"
            alt="Profile"
            className="rounded-3xl h-[100px] w-[100px]"
          />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="text-2xl font-bold leading-6 capitalize text-zinc-800">
                Hala Ahmed
              </div>
              <div className="text-sm text-neutral-600 w-[359px] max-md:w-full">
                I am Hala Ahmed, I am the owner of the local brand called Beauty
                which is for Mackeup and Skin Care.
              </div>
            </div>
            <div className="flex gap-4 items-start  max-sm:gap-2.5">
              <UserInsides />
              <UserInsides />
              <UserInsides />
            </div>
            <button className="flex justify-center items-center w-full">
              <div className="h-12 text-base font-bold text-center text-white capitalize rounded-2xl bg-[linear-gradient(90deg,#D20653_0%,#FF951D_100%)] w-[359px] flex justify-center items-center">
                Follow
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCard;
