import Link from 'next/link';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { SiXiaohongshu } from "react-icons/si";


function Icon() {
  return (
    <>

<div className="flex space-x-4 justify-center">
      <Link href="" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-4xl hover:text-pink-600" />
      </Link>
      <Link href="" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-4xl hover:text-blue-600" />
      </Link>
      <Link href="" target="_blank" rel="noopener noreferrer">
        <FaXTwitter className="text-4xl hover:text-gray-400" />
      </Link>
    </div>

    <div className="flex space-x-4 justify-center">
      {/* <Link href="https://carousell.com" target="_blank" rel="noopener noreferrer">
        <SiCarousell className="text-4xl hover:text-purple-600" />
      </Link> */}
      <Link href="https://xiaohongshu.com" target="_blank" rel="noopener noreferrer">
        <SiXiaohongshu className="text-6xl hover:text-red-600" />
      </Link>
      
    </div>
    </>
  );
}

export default Icon;