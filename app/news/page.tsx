import Image from 'next/image';
import Head from 'next/head';
import iphone17pro from '../image/iphone17pro.jpg';
import iphone17 from '../image/iphone17.jpg';
import Nav from "../components/Nav";

export default function News() {
    return(
        <>
          <Head>
            <title>iPhone 17 Pro 高價回收中！最新預估價公開 | Comein 專業二手手機收購</title>
            <meta name="description" content="Comein 即日起高價回收 iPhone 17 Pro，高價回收，最高收購價！門市可快速面交，舊機換現金最安心。" />
        </Head>
        <Nav/>
        <div className="pb-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  text-center pt-10">最新消息</h1>
            {/* news */}
            <div className="text-sm text-center pt-10">
                <div style={{ maxWidth: '300px', margin: '0 auto' }} >
                    <Image src={iphone17pro} style={{ width: '100%', height: 'auto' }} alt="Comein banner Apple product collection iphone Macbook" />
                </div>
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-center py-5">高價回收iPhone 17 pro</h1>
                <p className="text-md py-2">現已接受申請！</p>
                <p className="text-sm text-gray-300 py-2">2025/09/30</p>


            </div>
            <div className="text-sm text-center p-10">
                <div style={{ maxWidth: '300px', margin: '0 auto' }} >
                    <Image src={iphone17} style={{ width: '100%', height: 'auto' }} alt="Comein banner Apple product collection iphone Macbook" />
                </div>
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-center py-5">高價回收iPhone 17</h1>
                <p className="text-md py-2">現已接受申請！</p>
                <p className="text-sm text-gray-300 py-2">2025/09/30</p>


            </div>
        </div>
        </>
    );
};