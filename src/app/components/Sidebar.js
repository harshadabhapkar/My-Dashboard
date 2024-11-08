
import Image from 'next/image';
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { IoPeople } from "react-icons/io5";
import { MdFactCheck } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { HiLightBulb } from "react-icons/hi2";
import Link from 'next/link';

export default function Sidebar() {
  const mainNavItems = [
    { icon: FaArrowTrendUp, label: "Reports", href: "/" },
    { icon: BsFillLightningChargeFill, label: "Library", href: "/library" },
    { icon: IoPeople, label: "People", href: "/people" },
    { icon: MdFactCheck, label: "Activities", href: "/activities" },
  ];

  const supportNavItems = [
    { icon: HiLightBulb, label: "Get Started", href: "/get-started" },
    { icon: IoMdSettings, label: "Settings", href: "/settings" },
  ];

  return (
    <aside className="w-[230px] flex flex-col justify-between border shadow-lg rounded-lg bg-white text-black p-7 h-full">
      <div> 
        <ul>
          <li className="mb-10 mt-3">
            <Image src="/TESLA.png" alt="Logo" width={120} height={20} />
          </li>

          {mainNavItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <li className="my-2 text-[#4D4D4D] font-semibold flex flex-row gap-4 py-3 rounded-lg px-2 hover:text-blue-600 hover:bg-[#1B59F814] cursor-pointer">
                <item.icon className="text-[20px]" />
                <p className="text-[14px] font-lg">{item.label}</p>
              </li>
            </Link>
          ))}
        </ul>

        <ul className="mt-10">
          <li className="text-[16px] text-gray-400 font-lg">Support</li>
          {supportNavItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <li className="my-2 text-[#4D4D4D] font-semibold flex flex-row gap-4 py-3 rounded-lg px-2 hover:text-blue-600 hover:bg-[#1B59F814]">
                <item.icon className="text-[20px]" />
                <p className="text-[14px] font-lg">{item.label}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="flex flex-col pt-4 gap-3 border-t-2 border-gray-400">
        <Image src="/Photo.png" alt="Photo" width={34} height={34} />
        <h2 className="text-[14px] font-semibold flex flex-col">
          Sam Wheeler
          <span className="text-gray-400 text-[12px]">samwheeler@example.com</span>
        </h2>
      </div>
    </aside>
  );
}
