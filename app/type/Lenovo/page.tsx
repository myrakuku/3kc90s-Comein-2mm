
import Image from 'next/image';
import Nav from "../../../components/Nav";
import SEOContent from "../../../components/SEOContent";
import Lenovo1 from "../../../public/image/Brand_Collection/Lenovo/Lenovo_1.jpg"
import Lenovo2 from "../../../public/image/Brand_Collection/Lenovo/Lenovo_2.jpg"
import Lenovo3 from "../../../public/image/Brand_Collection/Lenovo/Lenovo_3.jpg"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Comein |香港專業高價回收電子產品 | 旺角二手回收Lenovo專家",
    description: "Comein 專業高價回收Thinkpad、Thinkpad X1 Carbon、Thinkpad X1 Yoga、Thinkbook、ideapad Slim、ideapad Flex、Yoga、Legion等各類二手電子產品，高價回收！香港門市或上門回收，安全快速交易。",
  };

export default function LenovoCollection() {
      
  return (
  <>
  <Nav/>
    <div className='pt-5 flex justify-center'>
        <Image src={Lenovo1} alt={""} style={{ objectFit: 'scale-down', width:'30%' }}></Image>
        <Image src={Lenovo2} alt={""} style={{ objectFit: 'scale-down', width:'30%' }}></Image>
        <Image src={Lenovo3} alt={""} style={{ objectFit: 'scale-down', width:'30%' }}></Image>
    </div>
        <div className="pb-10 pt-5 px-10 sm:px-20 lg:px-30">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold  text-center pt-10">Lenovo系列二手回收專家：香港旺角的電子產品回收服務</h1>
            <div className="text-sm text-center pt-5">
                <p className="">
                隨著科技的迅速演變，閒置的電子產品往往會貶值。如果您擁有Lenovo系列的產品，為何不把它們交給我們進行回收，讓它們煥發新的生命？無論是 Thinkpad、Thinkpad X1 Carbon、Thinkpad X1 Yoga、Thinkbook、ideapad Slim、ideapad Flex、Yoga、Legion，還是Lenovo Gaming系列，我們都能為您提供市場上最具競爭力的回收價格。
                </p>
                <h2 className="pt-10 text-lg md:text-xl lg:text-2xl font-bold  text-center">為什麼選擇我們的二手回收服務？</h2>
                <p className="">
                專業可靠：我們的團隊擁有多年的電子產品回收經驗，對市場動態及價格變化十分敏感，能確保您獲得最公平的回收價格。全系列產品回收，我們接受各類Lenovo產品的回收，包括：
                </p>
                <div className="">
                    <p  className="pt-5 font-bold">Thinkpad系列</p>
                    <br />Thinkpad X1 Carbon
                    <br />Thinkpad X1 Yoga
                    <p  className="pt-5 font-bold">Thinkbook系列</p>
                    <p  className="pt-5 font-bold">ideapad系列</p>
                    <br />ideapad Standard
                    <br />ideapad Slim
                    <br />ideapad Flex
                    <p  className="pt-5 font-bold">Yoga系列</p>
                    <p  className="pt-5 font-bold">Legion系列</p>
                    <p  className="pt-5 font-bold">Lenovo Gaming系列</p>
                    <p  className="pt-5">產品名稱未能錄盡，其他請Whatapp查詢。想了解更多關於我們的服務或想要進行二手回收，歡迎隨時聯繫我們！</p>
                </div>
            </div>
            <SEOContent/>
        </div>
  </>
  );
};