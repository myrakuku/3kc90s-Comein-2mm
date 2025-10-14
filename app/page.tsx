import Head from 'next/head';
import Image from 'next/image';
import Nav from "./components/Nav";
import banner from './image/banner.png';

export default function Mainpage() {
  return (
  <>
  <Head>
      <title>Comein |香港專業高價回收電子產品 | 回收Apple、Lenovo、Samsung 等大量品牌</title>
      <meta name="description" content="Comein 專業高價回收 MacBook、iPhone、手機、電腦等各類二手電子產品，高價回收！香港門市或上門回收，安全快速交易。" />
  </Head>
  <Nav/>
  <main>
    <Image src={banner}  style={{ objectFit: 'scale-down' }} alt="Comein banner Apple product collection iphone Macbook" />
  </main>
        <div className="pb-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  text-center pt-10">高價回收各類電子產品</h1>
            <div className="text-sm text-center">
                <p className="p-10 sm:px-20 lg:px-30">
                我們專業回收各大品牌電子產品，包括 Apple、Asus、DELL、Google、Lenovo、MSI、Microsoft、RAZER、Samsung、SONY、acer、Panasonic 等等，無論是手機、平板、筆電、電腦主機，還是其他智能裝置，我們都以 <span className="text-2xl font-bold text-blue-700">市場最高價</span> 現金收購！
                </p>
                <p>
                    <br />✅ 即時估價 ── 提供型號及規格，立即報價
                    <br />✅ 專業檢測 ── 快速驗機，價格透明
                    <br />✅ 多元交收 ── 門市（旺區便利）或上門回收
                    <br />✅ 安全服務 ── 協助清除資料，保障隱私
                </p>
                <p>
                    <br />閒置電子產品別浪費，交給我們 高價回收，輕鬆換現金！
                    <br />📞 立即 WhatsApp 聯絡，獲取最優報價！
                </p>

            </div>
        </div>
  </>
  );
};