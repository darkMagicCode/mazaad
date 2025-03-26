"use client";
import { SelectComp } from "@/components/atoms/SelectComp";
import { UserInsides } from "@/components/atoms/UserInsides";
import QRCodeComponent from "@/components/organisms/QRCodeComponent";
import UserCard from "@/components/organisms/UserCard";
import Image from "next/image";
import QrCodeImg from "@/public/icons/qrCode.svg";
import AuctionList from "@/components/organisms/AuctionList";
import Header from "@/components/organisms/Header";
import { ProductForm } from "../organisms/ProductForm";

export default function MainHomePageScreen() {
  return (
    <div className="bg-[#F5F5F5] ">
      <Header />

      <div
        className="flex flex-col md:flex-row  mx-auto gap-10 mt-10"
        style={{ width: "85%" }}
      >
        <div className="flex flex-col gap-5 ">
          <UserCard />
          <QRCodeComponent
            title="QR Code"
            infoText="Download the QR code or share it with your friends."
            qrCodeSrc={QrCodeImg}
          />
        </div>
        <div className="bg-white w-full flex justify-center rounded-3xl">
          <AuctionList />
        </div>
      </div>
    </div>
  );
}
