"use client";
import { SelectComp } from "@/components/atoms/SelectComp";
import { UserInsides } from "@/components/atoms/UserInsides";
import QRCodeComponent from "@/components/organisms/QRCodeComponent";
import UserCard from "@/components/organisms/UserCard";
import Image from "next/image";
import QrCodeImg from "@/public/icons/qrCode.svg";
import AuctionList from "@/components/organisms/AuctionList";
import Header from "@/components/organisms/Header";
import MainHomePageScreen from "@/components/templates/MainHomePageScreen";

export default function Home() {
  return (
    <div className="bg-[#F5F5F5] ">
      <MainHomePageScreen/>
    </div>
  );
}
