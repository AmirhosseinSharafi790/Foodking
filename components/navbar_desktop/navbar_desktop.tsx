"use client";
import Link from "next/link";
import { useState } from "react";
import LinkNavbar from "../LinkNavbar/LinkNavbar";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar_desktop() {
  const [showBox2, setShowBox2] = useState(false);
  const [showBox10, setShowBox10] = useState(false);
  const [showBox20, setShowBox20] = useState(false);

  return (
    <div className=" hidden   xl:flex  gap-[2rem] relative ">
      <Link className="hover:text-[#00813D]  cursor-pointer    transition ease-in delay-150 font-medium " href="/contact">
        تماس باما{" "}
      </Link>

      <LinkNavbar
        onMouseEnter={() => {
          setShowBox10(true);
          setShowBox2(false);
          setShowBox20(false);
        }}
        onMouseLeave={() => setShowBox10(false)}
      >
        <span className="flex items-center cursor-pointer gap-[.2rem] hover:text-[#00813D] transition ease-in-out duration-200 font-medium ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={`${showBox10 ? "rotate-180" : ""} transition-transform duration-500 mt-[.4rem] size-[12.5px]`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
          صفحات
        </span>

        <AnimatePresence>
          {showBox10 && (
            <motion.div className="absolute right-[0] top-[2.5rem] bg-white shadow-lg rounded-md w-[14rem] overflow-hidden" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
              <ul className="flex flex-col text-right text-[#212121]">
                <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/shop/chef"}>
                  <span className="  font-semibold    px-[1rem]  ">آشپز</span>
                </Link>
                <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/food-menu"}>
                  <span className="  font-semibold    px-[1rem]  "> منوی غذا</span>
                </Link>
                <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/gallery"}>
                  <span className="  font-semibold    px-[1rem]  ">گالری</span>
                </Link>
                <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/testimonial"}>
                  <span className="  font-semibold    px-[1rem]  ">گواهینامه</span>
                </Link>
                <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/reservation"}>
                  <span className="  font-semibold    px-[1rem]  ">رزرواسیون</span>
                </Link>
                <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]     " href={"/faqs"}>
                  <span className="  font-semibold    px-[1rem]  ">سوالات متداول</span>
                </Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </LinkNavbar>

      <LinkNavbar
        onMouseEnter={() => {
          setShowBox2(true);
          setShowBox20(false);
          setShowBox10(false);
        }}
        onMouseLeave={() => setShowBox2(false)}
      >
        <span className="flex items-center cursor-pointer gap-[.2rem] hover:text-[#00813D] transition ease-in-out duration-200 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={`${showBox2 ? "rotate-180" : ""} transition-transform duration-500 mt-[.4rem] size-[12.5px]`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
          بلاگ
        </span>

        <AnimatePresence>
          {showBox2 && (
            <motion.div className="absolute right-[0rem] top-[2.5rem] bg-white shadow-lg rounded-md w-[14rem] overflow-hidden" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
              <ul className="flex flex-col text-right text-[#212121]">
                <Link onClick={() => setShowBox2(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]     " href={"/blog"}>
                  <span className="  font-semibold    px-[1rem]  "> وبلاگ </span>
                </Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </LinkNavbar>

      <LinkNavbar
        onMouseEnter={() => {
          setShowBox20(true);
          setShowBox2(false);
          setShowBox10(false);
        }}
        onMouseLeave={() => setShowBox20(false)}
      >
        <span className="flex items-center cursor-pointer gap-[.2rem] hover:text-[#00813D] transition ease-in-out duration-200 font-medium ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={`${showBox20 ? "rotate-180" : ""} transition-transform duration-500 mt-[.4rem] size-[12.5px]`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
          فروشگاه
        </span>

        <AnimatePresence>
          {showBox20 && (
            <motion.div className="absolute right-[0rem] top-[2.5rem] bg-white shadow-lg rounded-md w-[14rem] overflow-hidden" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
              <ul className="flex flex-col text-right text-[#212121]">
                <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/foodking-shop"}>
                  <span className="  font-semibold    px-[1rem]  "> لیست فروشگاه </span>
                </Link>

                <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/cart"}>
                  <span className="  font-semibold    px-[1rem]  ">سبد خرید</span>
                </Link>
                <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/dashboard/favarit"}>
                  <span className="  font-semibold    px-[1rem]  ">لیست علاقه مندی</span>
                </Link>
                <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/cart"}>
                  <span className="  font-semibold    px-[1rem]  ">پرداخت</span>
                </Link>
                <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]     " href={"/my-account"}>
                  <span className="  font-semibold    px-[1rem]  "> حساب کاربری من </span>
                </Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </LinkNavbar>

      <Link className="hover:text-[#00813D]  cursor-pointer    transition ease-in delay-150 font-medium" href={"/about-us"}>
        درباره ما{" "}
      </Link>

      <Link className="   cursor-pointer   gap-[.2rem] font-semibold  flex  items-center flex-row-reverse " href={"/"}>
        <span className=" hover:text-[#00813D] transition ease-in delay-150 font-medium"> صفحه اصلی</span>
      </Link>
    </div>
  );
}
