
import Image from 'next/image';
import Nav from "../../../components/Nav";
import SEOContent from "../../../components/SEOContent";
import Samsung1 from "../../../public/image/Brand_Collection/Samsung/Samsung_1.jpg"
import Samsung2 from "../../../public/image/Brand_Collection/Samsung/Samsung_2.jpg"
import Samsung3 from "../../../public/image/Brand_Collection/Samsung/Samsung_3.jpg"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Comein |香港專業高價回收電子產品 | 旺角二手回收Samsung專家",
    description: "Comein 專業高價回收 Galaxy Book、Galaxy Tab和Galaxy S手機、電腦等各類二手電子產品，高價回收！香港門市或上門回收，安全快速交易。",
  };

export default function SamsungCollection() {
      
  return (
  <>
  <Nav/>
     <div className='pt-5 flex justify-center'>
        <Image src={Samsung1} alt={""} style={{ objectFit: 'scale-down', width:'30%' }}></Image>
        <Image src={Samsung2} alt={""} style={{ objectFit: 'scale-down', width:'30%' }}></Image>
        <Image src={Samsung3} alt={""} style={{ objectFit: 'scale-down', width:'30%' }}></Image>
    </div>
        <div className="pb-10 pt-5 px-10 sm:px-20 lg:px-30">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold  text-center pt-10">Samsung系列二手回收專家：香港旺角的電子產品回收服務</h1>
            <div className="text-sm text-center">
                <p className="">
                在科技快速發展的今天，電子產品如手機、平板電腦和筆記本電腦的更新換代速度驚人。特別是Samsung的Galaxy系列產品，包括Galaxy Book、Galaxy Tab和Galaxy S手機，不僅性能強勁，而且設計優雅。不過，隨著新產品的推出，舊款設備的回收和再利用也變得越來越重要。如果您擁有Samsung系列的產品，為何不把它們交給我們進行回收？我們都能為您提供市場上最具競爭力的回收價格。
                </p>
                <h2 className="pt-10 text-lg md:text-xl lg:text-2xl font-bold  text-center">為什麼選擇我們的二手回收服務？</h2>
                <p className="">
                專業可靠：我們的團隊擁有多年的電子產品回收經驗，對市場動態及價格變化十分敏感，能確保您獲得最公平的回收價格。全系列產品回收，我們接受各類Samsung產品的回收，包括：
                </p>
                <div className="">
                    <p  className="pt-5 font-bold">Galaxy Book系列：</p>
                    <br />Galaxy Book
                    <br />Galaxy Book Pro
                    <br />Galaxy Book Pro 360
                    <br />Galaxy Book AI
                    <br />Galaxy Book Ultra
                    <br />Galaxy Book ION
                    <p  className="pt-5 font-bold">Galaxy Tab系列：</p>
                    <br />Galaxy Tab S7 / S7+ / S7 FE
                    <br />Galaxy Tab S8 / S8+ / S8 FE
                    <br />Galaxy Tab S9 / S9+ / S9 FE / S9 Ultra
                    <br />Galaxy Tab S10 / S10+ / S10 FE / S10 Ultra
                    <br />Galaxy Tab S11 / S11+ / S11 FE / S11 Ultra
                    <p  className="pt-5 font-bold">Galaxy S手機系列：</p>
                    <br />Galaxy S20 / S20+ / S20 Ultra
                    <br />Galaxy S21 / S21+ / S21 Ultra
                    <br />Galaxy S22 / S22+ / S22 Ultra
                    <br />Galaxy S23 / S23+ / S23 Ultra
                    <br />Galaxy S24 / S24+ / S24 Ultra
                    <br />Galaxy S25 / S25+ / S25 Ultra
                    <br />Galaxy Z Fold 5 / Fold 6 / Fold 7
                    <br />Galaxy Z Flip 5 / Flip 6 / Flip 7
                    <p  className="pt-5">產品名稱未能錄盡，其他請Whatapp查詢。想了解更多關於我們的服務或想要進行二手回收，歡迎隨時聯繫我們！</p>
                </div>
            </div>
            <SEOContent/>
        </div>
  </>
  );
};