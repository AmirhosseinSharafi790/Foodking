"use client";

import MoreAbout_chef from "@/components/related_chefPage/moreAbout_chef";
import { TbTruckDelivery } from "react-icons/tb";
import { FaChevronLeft } from "react-icons/fa";
import MoreAbout_testimonial from "@/components/related_testimonial/moreAbout_testimonial";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
export default function Testimonial() {

import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";
export default function Testimonial() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });


  const motorCycleRef = useRef(null);
  const motorCycle = useScroll({
    target: motorCycleRef,
    offset: ["start end", "end start"],
  });

  const strokeDashoffset = useTransform(scaleX, (v) => 164 - 164 * v);

  const forMotorCycle = useTransform(
    motorCycle.scrollYProgress,
    [0, 0.5, 0.7, 1],
    [230, 55, 15, 0]
  );
  return (
    <div ref={ref} className="w-full ">
      <motion.svg
        className="fixed bottom-4 left-4"
        width="60"
        height="60"
        viewBox="0 0 60 60"
      >
        <circle
          cx="30"
          cy="30"
          r="26"
          stroke="#fff"
          strokeWidth="4"
          fill="none"
        />
        <motion.circle
          cx="30"
          cy="30"
          r="26"
          stroke="#cd0808"
          strokeWidth="4"
          fill="none"
          strokeDasharray="164"
          strokeDashoffset="164"
          style={{ strokeDashoffset }}
        />
      </motion.svg>
      <div
        className="
     bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/07/breadcrumb-1.jpg)]
      bg-cover bg-center  w-full flex justify-center items-center h-95"
      >
        <div className=" space-y-5">
          <h1
            className="w-full font-semibold  text-center text-3xl text-white
            sm:text-3xl 
            md:text-4xl 
            lg:text-6xl lg:text-white "
          >
            {" "}
            گواهینامه
          </h1>
          <div className="flex space-x-1 items-center h-8 flex-row-reverse">
            <h1 className="font-semibold  text-xl text-green-500">
              {" "}
              صفحه اصلی
            </h1>
            <FaChevronLeft className=" mt-2 text-base text-green-500" />

            <h1 className="font-semibold  text-xl text-slate-100">
              {" "}
              گواهینامه
            </h1>
          </div>
        </div>
      </div>
      {/* //! دیدار با کارشناس ها و سرآشپزها */}
      <div className="w-full flex-wrap space-y-4 flex  justify-center items-end">
        <div
          className=" flex flex-wrap gap-6 justify-center space-y-3 w-2/3
         min-h-96 mt-12"
        >
          <MoreAbout_testimonial
            role="بلاگر مواد غذایی"
            testimonialName="فرانک اچ. هیوستون"
            imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/09.jpg"
            content="برای اطمینان از تسلط فعالانه، استراتژی های برد-برد 
            را
             به روی میز بیاورید. در پایان روز رو به جلو عادی است که از X عملیاتی تکامل یافته 
             است"
          />
          <MoreAbout_testimonial
            role="توسعه دهنده"
            testimonialName="جین کوپر"
            imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/08.jpg"
            content="برای اطمینان از تسلط فعالانه، استراتژی های برد-برد 
            را
             به روی میز بیاورید. در پایان روز رو به جلو عادی است که از X عملیاتی تکامل یافته 
             است"
          />
          <MoreAbout_testimonial
            role="عاشق غذا"
            testimonialName="کنت میکس"
            imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/11.jpg"
            content="برای اطمینان از تسلط فعالانه، استراتژی های برد-برد 
            را
             به روی میز بیاورید. در پایان روز رو به جلو عادی است که از X عملیاتی تکامل یافته 
             است"
          />
          <MoreAbout_testimonial
            role="نورین احمد"
            testimonialName="عاشق وردپرس"
            imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/10.jpg"
            content="برای اطمینان از تسلط فعالانه، استراتژی های برد-برد 
            را
             به روی میز بیاورید. در پایان روز رو به جلو عادی است که از X عملیاتی تکامل یافته 
             است"
          />
          <MoreAbout_testimonial
            role="نورین احمد"
            testimonialName="عاشق وردپرس"
            imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/13.jpg"
            content="برای اطمینان از تسلط فعالانه، استراتژی های برد-برد 
            را
             به روی میز بیاورید. در پایان روز رو به جلو عادی است که از X عملیاتی تکامل یافته 
             است"
          />
          <MoreAbout_testimonial
            role="نگاه کن پسر"
            testimonialName="فرانت کار"
            imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/12.jpg"
            content="برای اطمینان از تسلط فعالانه، استراتژی های برد-برد 
            را
             به روی میز بیاورید. در پایان روز رو به جلو عادی است که از X عملیاتی تکامل یافته 
             است"
          />
        </div>
      </div>
      {/* //! دیدار با کارشناس ها و سرآشپزها */}
      <div

        className="
        justify-center


md:justify-center

        lg:justify-center
        
        xl:justify-center
        2xl:justify-center
      



        w-full flex 

          bg-[#e7ed70] mt-24 


        className="w-full flex flex-wrap justify-center bg-[#e7ed70] mt-24 bg-no-repeat bg-cover bg-center h-96
       bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/image.jpg)]"
      >
        <section className="w-1/5 flex justify-center items-center  ">

        className="w-full flex flex-wrap justify-end bg-[#e7ed70] mt-24 bg-no-repeat 

        bg-cover bg-center h-96
       bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/image.jpg)]"
      >
        <section
          className="
         
          w-24
       
        relative  h-full"
        >
          <motion.div
            // initial={{ y: 1 }}

            animate={{ y: [-33, 3, -33] }}
            transition={{
              duration: 3,
              ease: "easeInOut",

              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-24  
            absolute right-0 top-40 h-20 transition-all 
           bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/chilli.png)]"
          ></motion.div>
        </section>

        <section
          className="
         
          justify-start
          w-3/5
         

        md:justify-center 
        md:w-3/5 

        lg:justify-center
        lg:w-1/5 

        xl:justify-center
        xl:w-1/4 

        2xl:justify-center 
        2xl:w-1/4


        flex 
        items-center "
        >

        <section className="w-1/5 flex justify-center items-center ">


          <button
            className="
            w-48
             md:w-64 

             lg:w-64 

             xl:w-64 

             2xl:w-64 
             
            h-16 group relative
           font-semibold rounded-xl bg-slate-100"
          >
            <div
              className="w-full h-full z-10 group-hover:text-white absolute inset-0 flex 
              items-center 
              justify-center space-x-1
              font-semibold"
            >
              <h1
                className="
                font-semibold
                text-xs
               md:text-base

             lg:text-base

             xl:text-base

             2xl:text-base
              "
              >
                اکنون سفارش دهید
              </h1>
              <TbTruckDelivery
                className="text-green-700
               transition-all duration-500 group-hover:text-white text-2xl"
              />
            </div>
            <span
              className="absolute inset-0 w-full h-full  rounded-xl 
               scale-0 group-hover:scale-100
             transition-all duration-500 ease-out origin-center"
            ></span>
          </button>
        </section>


        <section
          className="
       sm:w-0

       md:w-0
          
       lg:w-[552px]

       xl:w-[552px]

       2xl:w-[622px]
        relative"
        >
          <motion.div
            ref={motorCycleRef}
            transition={{ duration: 14 }}
            style={{ translateX: forMotorCycle as any }}
            className="
            absolute 
            inset-0

          hidden
         
bg-none

md:hidden
md:scale-80


             lg:block
             xl:block
             2xl:block
lg:scale-95

xl:scale-100

2xl:scale-100

          md:bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/delivery-man-2.png)]
md:-translate-x-36
          lg:bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/delivery-man-2.png)]
lg:-translate-x-36

          xl:bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/delivery-man-2.png)]
xl:-translate-x-36

          2xl:bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/delivery-man-2.png)]
2xl:-translate-x-36


          w-[400px] h-[350px]
          transition-all duration-700 -translate-y-5 
         "
          ></motion.div>
        </section>
        <section
          className="
    w-[220px]
        
         sm:w-[350px]
    
            md:w-[370px]

             
             lg:w-[450px]


             
             xl:w-[550px]
            

             2xl:w-[500px]
       
          
         
         h-full relative"
        >
          <div
            className="w-[400px] z-10 
            -left-64
          md:-left-36

          lg:-left-20
            
          xl:-left-20
          
          2xl:-left-20
           top-36 absolute  h-1/2"
          >
            <h1
              className="text-amber-300
            text-xl text-right w-full font-semibold "
            >

        <motion.div
          ref={motorCycleRef}
          transition={{ duration: 14 }}
          style={{ translateX: forMotorCycle as any }}
          className=" transition-all duration-700 -translate-y-5 w-1/4 h-[350px]
         bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/delivery-man-2.png)]"
        ></motion.div>

        <section className="w-1/3 h-full flex justify-center items-center">

        <section className="w-1/3 h-full  flex justify-center items-center">

          <div className="w-full h-1/2">
            <h1 className="text-amber-300 text-xl text-right w-full font-semibold ">

              ترد، هر لقمه طعم
            </h1>
            <h1
              className="
              text-3xl
              md:text-4xl 

             lg:text-5xl 

             xl:text-6xl 

             2xl:text-6xl 
             
            text-white text-right
              w-full font-semibold "
            >
              دقیقه سریع 45
            </h1>
            <div className="flex  justify-end">
              <h1
                className="text-white text-right 
                 text-2xl
              md:text-4xl 

             lg:text-6xl 

             xl:text-6xl 

             2xl:text-6xl 
              font-semibold "
              >
                قول ما
              </h1>
              <h1
                className="
   text-2xl
              md:text-4xl 

             lg:text-6xl 

             xl:text-6xl 

             2xl:text-6xl 
              text-amber-300 text-right   font-semibold "
              >
                تحویل
              </h1>
            </div>
          </div>

        </section>


        <section className="w-56 flex justify-end items-center  h-full">

          <motion.div
            // initial={{ y: 1 }}
            animate={{ y: [-33, 3, -33] }}
            transition={{
              duration: 3,
              ease: "easeInOut",

              repeat: Infinity,
              repeatType: "loop",
            }}
            className="  
            top-36
            absolute
            z-0
            right-0
            xl:right-0
            2xl:-right-[104px]
w-24
            md:w-24
             lg:w-24
             xl:w-24
             2xl:w-24
            h-1/2 transition-all 
         
           bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/image-11.png)]"
          ></motion.div>
        </section>

      </div>
    </div>
  );
}
