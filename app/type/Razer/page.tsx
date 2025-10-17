
import Image from 'next/image';
import Nav from "../../../components/Nav";
import SEOContent from "../../../components/SEOContent";
import Razer1 from "../../../public/image/Brand_Collection/Razer/Razer_1.jpg"
import Razer2 from "../../../public/image/Brand_Collection/Razer/Razer_2.jpg"
import Razer3 from "../../../public/image/Brand_Collection/Razer/Razer_3.jpg"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Comein |香港專業高價回收電子產品 | Razer二手回收專家",
    description: "Comein 專業高價回收 Razer Blade 14、Blade 16和Blade 18等筆記型電腦等各類二手電子產品，高價回收！香港門市或上門回收，安全快速交易。",
  };

export default function RazerCollection() {
      
  return (
  <>
  <Nav/>
    <div className='pt-5 flex justify-center'>
        <Image src={Razer1} alt={""} style={{ objectFit: 'scale-down', width:'30%' }}></Image>
        <Image src={Razer2} alt={""} style={{ objectFit: 'scale-down', width:'30%' }}></Image>
        <Image src={Razer3} alt={""} style={{ objectFit: 'scale-down', width:'30%' }}></Image>
    </div>
        <div className="pb-10 pt-5 px-10 sm:px-20 lg:px-30">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold  text-center pt-10">Razer二手回收專家：香港旺角的電子產品回收服務</h1>
            <div className="text-sm text-center pt-5">
                <p className="">
                在現今的數位時代，電子產品的更新換代速度驚人，無論是筆記型電腦、手機還是遊戲設備，都在不斷進化。然而，當舊設備不再使用時，您有想過如何處理它們嗎？我們公司專注於二手回收，特別是在香港旺角，擁有超過15年的經驗，為您提供專業的電子產品回收服務，助您安全、環保地處理舊設備。
                </p>
                <h2 className="pt-10 text-lg md:text-xl lg:text-2xl font-bold  text-center">為什麼選擇我們的二手回收服務？</h2>
                <p className="">
                專業可靠：我們的團隊擁有多年的電子產品回收經驗，對市場動態及價格變化十分敏感，能確保您獲得最公平的回收價格。我們接受Razer產品的回收，包括：
                </p>
                <div className="">
                    
                    <p  className="pt-5 font-bold">Razer Blade 14</p>
                    <p  className="">Razer Blade 14是一款便攜式且強大的遊戲筆電，適合需要高效能和流動性的用戶。若您已經升級到更新的機型，可以考慮將您的舊Blade 14交給我們，讓我們進行合法和環保的回收處理。</p>
                    <p  className="pt-5 font-bold">Razer Blade 16</p>
                    <p  className="">如果您擁有Razer Blade 18，這款大屏幕高效能筆電非常適合遊戲或圖形設計工作。隨著您的需求而產生更換，我們的二手回收服務可以確保您不會浪費這個高價值的設備。</p>
                    <p  className="pt-5 font-bold">Razer Blade 18</p>
                    <p  className="">Razer Blade 16則是一款專為遊戲玩家和創意專業人士設計的設備，它擁有出色的顯示效果和強大的性能。這款筆電在二手市場也有一定的需求，無論是出售還是回收，我們都能提供專業的評估和處理服務。</p>
                    <p  className="pt-5">Razer作為一家知名的遊戲設備品牌，其產品如Razer Blade 14、Blade 16和Blade 18等筆記型電腦，在市場上受到玩家和專業人士的青睞。不過，隨著科技的快速發展，許多用戶可能會希望更換新型號，而舊款的Razer產品便會成為二手產品回收的好選擇。</p>
                    <p  className="pt-5">產品名稱未能錄盡，其他請Whatapp查詢。想了解更多關於我們的服務或想要進行二手回收，歡迎隨時聯繫我們！</p>
                </div>
            </div>
            <SEOContent/>
        </div>
  </>
  );
};