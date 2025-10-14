import React from 'react';
import Head from 'next/head';
import Nav from "../components/Nav";

export default function ProductService() {
    return(
        <>
        <Head>
            <title>香港電子產品回收服務 高價收購/維修/資料處理 | Comein 專業二手買賣</title>
            <meta name="description" content="Comein 提供一站式香港電子產品服務：手機/電腦高價回收、Trade-In換新、專業檢測、資料移轉與清除。旺角門市或全港上門服務，企業辦公室設備回收，現金交易即日付款！" />
        </Head>
        <Nav/>
        <main className="my-10 py-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold px-10">產品及服務</h1>
            <div className="text-sm">
                <div className="p-10 sm:px-20 lg:px-30">
                <p>1. 二手回收</p>
                <p className="pb-5 pl-3">我們提供專業的二手電子產品回收服務，包含手機、平板、電腦等裝置。根據產品狀況進行評估後，將以合理價格現金回收。  </p>
                <p>2. Trade In / SWAP 以舊換新</p>
                <p className="pb-5 pl-3">顧客可將舊機折抵換購新設備，享受差價優惠。舊機經專業檢測估價後，直接抵扣新機費用，輕鬆升級裝置。  </p>
                <p>3. Check 舊機 </p>
                <p className="pb-5 pl-3">提供免費設備檢測服務，包含硬體功能測試、外觀檢查及性能評估，並出具透明報告，讓您清楚掌握設備狀況。  </p>
                <p>4. 過資料  </p>
                <p className="pb-5 pl-3">協助將舊裝置中的資料（如聯絡人、照片、檔案等）安全轉移至新設備，確保資料無損遷移。 </p>
                <p>5. 洗機</p>
                <p className="pb-5 pl-3">徹底清除設備中的所有個人資料與設定，符合隱私保護標準，並恢復原廠系統狀態，保障您的資訊安全。  </p>
                <p>6. 維修智能產品</p>
                <p className="pb-5 pl-3">提供各類智能設備（手機、平板、筆電等）的專業維修服務，包含螢幕更換、電池維修、主機板檢測等，使用原廠或高品質零件。  </p>
                <p>7. 賣機/保養</p>
                <p className="pl-3">- 賣機：協助顧客出售二手設備，提供市場價格評估。  </p>
                <p className="pb-5 pl-3">- 保養：針對已售出的二手設備，可加購延長保固服務，享受後續技術支援與維修保障。  </p>
                <p>8. 辦公室設備回收</p>
                <p className="pb-5 pl-3">專業回收企業汰換的辦公設備（如電腦、印表機、伺服器等），提供到府評估、資料銷毀及環保處理服務，符合企業資安與環保規範。  </p>
                </div>
                <div>
                    <p className="text-lg font-bold px-10">如有其他需求或疑問，歡迎隨時聯繫我們諮詢詳情。 </p>
                </div>

            </div>
        </main>
        </>
    );
};