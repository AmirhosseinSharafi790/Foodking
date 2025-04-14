"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";

export default function Header() {
  const [showBox, setShowBox] = useState(false);
  const [showBox2, setShowBox2] = useState(false);
  const [showBox3, setShowBox3] = useState(false);

  return (
    <header>
      <section className=" bg-[url('https://t-theme.com/foodking/wp-content/uploads/2024/02/hero-bg-3.jpg')]  bg-cover bg-center ">
        <div className="border-b-[1px] border-[#f4f1ea42] ">
          <div className="  text-[#fcfbfe] mx-auto max-w-[82rem] py-[2rem] items-center flex justify-between px-[1.5rem] ">
            <div className=" flex items-center gap-[5rem] ">
              <button className=" outline-none transition ease-in-out delay-200 cursor-pointer hover:bg-[#00813D] bg-[#D12525] flex items-center justify-center gap-[.5rem] border-[1px] border-[#ffff] text-center px-[1rem] w-[15rem] py-[1rem] pb-[1.3rem] font-bold ">
                اکنون سفارش دهید
                <span>
                  <FaTruckFast size={22} />{" "}
                </span>{" "}
              </button>
              <div className=" flex items-center gap-[1.5rem] relative  ">
                <div className=" bg-[#200707cc] top-[-.4rem] left-[-.5rem] absolute  w-[1rem] text-[.6rem] pb-[.1rem] pr-[.1rem] rounded-[.5rem] h-[1rem] flex justify-center items-center text-[#fcfbfe] ">0</div>
                <FaShoppingBasket className=" cursor-pointer " size={20} />
                <FaSearch className=" cursor-pointer " size={18} />
              </div>
            </div>
            <div className=" flex gap-[2rem] relative ">
              <Link className="hover:text-[#00813D]  cursor-pointer    transition ease-in delay-150 font-semibold" href="/contact">
                تماس باما{" "}
              </Link>

              <div>
                <div
                  onClick={() => {
                    setShowBox((res) => !res);
                    setShowBox2(false);
                    setShowBox3(false);
                  }}
                  className="  cursor-pointer     gap-[.2rem]  font-semibold flex  items-center flex-row-reverse "
                >
                  <span className=" hover:text-[#00813D] transition ease-in delay-150 font-semibold"> صفحات</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={` ${showBox ? " rotate-180 " : " rotate-none  cursor-pointer    "} transition-transform duration-500 hover:rotate-180  mt-[.4rem]  size-[12.5px]  `}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>{" "}
                </div>
                <ul className={` absolute   transition-opacity ease-in delay-100  shadwoCss top-[3.6rem] left-[-3.8rem] flex flex-col gap-[2 clrem] text-right bg-[#fff] w-[14rem] text-[#212121] ${showBox ? " opacity-100 z-[10000]" : " opacity-0 "}`}>
                  <Link onClick={() => setShowBox(false)} className="  hidden text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]" href={"/shop/chef"}>
                    <span className="  font-semibold    px-[1rem]  "> اشپز </span>
                  </Link>
                  <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/food-menu"}>
                    <span className="  font-semibold    px-[1rem]  "> اشپز </span>
                  </Link>
                  <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                    <span className="  font-semibold    px-[1rem]  "> منوی غذا</span>
                  </Link>
                  <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                    <span className="  font-semibold    px-[1rem]  ">گالری</span>
                  </Link>
                  <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/testimonial"}>
                    <span className="  font-semibold    px-[1rem]  ">گواهینامه</span>
                  </Link>
                  <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/reservation"}>
                    <span className="  font-semibold    px-[1rem]  ">رزرواسیون</span>
                  </Link>
                  <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]     " href={"/faqs"}>
                    <span className="  font-semibold    px-[1rem]  ">سوالات متداول</span>
                  </Link>
                </ul>
              </div>

              <div>
                <div
                  onClick={() => {
                    setShowBox2((res) => !res);
                    setShowBox3(false);
                    setShowBox(false);
                  }}
                  className="  cursor-pointer     gap-[.2rem]  font-semibold flex  items-center flex-row-reverse "
                >
                  <span className=" hover:text-[#00813D] transition ease-in delay-150 font-semibold"> وبلاگ</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={` ${showBox2 ? " rotate-180 " : " rotate-none  cursor-pointer    "} transition-transform duration-500 hover:rotate-180  mt-[.4rem]  size-[12.5px]  `}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>{" "}
                </div>
                <ul className={` absolute transition-opacity ease-in delay-100  shadwoCss top-[3.6rem] left-[1.5rem] flex flex-col gap-[2 clrem] text-right bg-[#fff] w-[14rem] text-[#212121] ${showBox2 ? " opacity-100 z-[10000] " : " opacity-0 "}`}>
                  <Link onClick={() => setShowBox2(false)} className="  text-[#515151] bg-[#ffff] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]     " href={"/blog"}>
                    <span className="  font-semibold    px-[1rem]  "> بلاگ </span>
                  </Link>
                </ul>
              </div>

              <div>
                <div
                  onClick={() => {
                    setShowBox3((res) => !res);
                    setShowBox(false);
                    setShowBox2(false);
                  }}
                  className="  cursor-pointer     gap-[.2rem]  font-semibold flex  items-center flex-row-reverse "
                >
                  <span className=" hover:text-[#00813D] transition ease-in delay-150 font-semibold"> فروشگاه</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={` ${showBox3 ? " rotate-180 " : " rotate-none  cursor-pointer    "} transition-transform duration-500 hover:rotate-180  mt-[.4rem]  size-[12.5px]  `}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>{" "}
                </div>
                <ul className={` absolute   transition-opacity ease-in delay-100  shadwoCss top-[3.6rem] left-[8rem] flex flex-col gap-[2 clrem] text-right bg-[#fff] w-[14rem] text-[#212121] ${showBox3 ? " opacity-100 z-[10000] " : " opacity-0 "}`}>
                  <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/shop/chef"}>
                    <span className="  font-semibold    px-[1rem]  ">آشپز</span>
                  </Link>
                  <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                    <span className="  font-semibold    px-[1rem]  "> منوی غذا</span>
                  </Link>
                  <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                    <span className="  font-semibold    px-[1rem]  ">گالری</span>
                  </Link>
                  <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                    <span className="  font-semibold    px-[1rem]  ">گواهینامه</span>
                  </Link>
                  <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                    <span className="  font-semibold    px-[1rem]  ">رزرواسیون</span>
                  </Link>
                  <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]     " href={""}>
                    <span className="  font-semibold    px-[1rem]  ">سوالات متداول</span>
                  </Link>
                </ul>
              </div>

              <Link className="hover:text-[#00813D]  cursor-pointer    transition ease-in delay-150 font-semibold" href={"/about-us"}>
                درباره ما{" "}
              </Link>
              <Link className="   cursor-pointer   gap-[.2rem] font-semibold  flex  items-center flex-row-reverse " href={""}>
                <span className=" hover:text-[#00813D] transition ease-in delay-150 font-semibold"> صفحه اصلی</span>
              </Link>
            </div>
            <img src="https://t-theme.com/foodking/wp-content/uploads/2024/08/U_U_O¯U©U_U_U¯_18-transformed.png" alt="" />
          </div>
        </div>

        <div className=" pt-[4rem] mx-auto max-w-[82rem] text-end  py-[.8rem] items-center flex justify-between px-[1.5rem]  ">
          <div>
            <motion.img
              src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/pizza-4.png" // یا هر آدرس تصویر دیگه
              alt="Pizza"
              className=" w-[80%] " // اندازه دلخواه
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 20, // مدت زمان برای هر دور چرخش
                ease: "linear"
              }}
            />
          </div>
          <div className="w-[36%] ">
            <h1 className=" text-[#ffff] font-semibold leading-[9.3rem]  text-[8.6rem] ml-auto ">پیتزای فوق العاده خوشمزه </h1>
            <h4 className=" text-[#ffff] text-[1.4rem] font-semibold mt-[3rem] mb-[2rem] ml-auto  ">فقط با 25 هزارتومان سفارش خود را ستاره دار کنید</h4>
          </div>
        </div>
      </section>
    </header>
  );
}
