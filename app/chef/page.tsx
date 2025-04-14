"use client";
import HeaderComponent from "@/components/Header";
import Image from "next/image";
import MoreAbout_chef from "@/components/related_chefPage/moreAbout_chef";
// import { usePathname } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";
export default function Chef() {
  //   const path = usePathname();
  //   console.log("path : ", path);
  return (
    <div className="w-full bg-amber-50">
      <div className="bg-[url(/pages/chef/breadcrumb-1.jpg)] w-full flex justify-center items-center h-80">
        <div className=" space-y-5">
          <h1 className="font-semibold  text-6xl text-white"> سایر اعضا</h1>
          <div className="flex space-x-1 items-center h-8 flex-row-reverse">
            <h1 className="font-semibold  text-xl text-green-500">
              {" "}
              صفحه اصلی
            </h1>
            <FaChevronLeft className=" mt-2 text-base text-green-500" />
            <h1 className="font-semibold  text-xl text-green-500"> فروشگاه</h1>
            <FaChevronLeft className="mt-2 font-semibold  text-base text-green-500" />

            <h1 className="font-semibold  text-xl text-slate-100"> آشپز</h1>
          </div>
        </div>
      </div>
      {/* //! دیدار با کارشناس ها و سرآشپزها */}
      <div className="w-full flex-wrap space-y-4 flex justify-center items-end">
        <h1 className="font-semibold w-full text-center text-xl text-green-700">
          درباره ما مواد غذایی
        </h1>
        <h1 className="font-semibold  w-full text-center text-5xl text-slate-800">
          دیدار با کارشناس و سرآشپزها
        </h1>
        <div className=" flex flex-wrap justify-center space-x-12 space-y-3 w-2/3 min-h-96 mt-12">
          <MoreAbout_chef
            role="اجاق گاز ارشد"
            chefLink="#"
            imageUrl="/pages/chef/chefs/01-2.jpg"
            chefName="اوون آشر"
            faceBookLink="#"
            linkedinLink="#"
            twitterLink="#"
            youtubeLink="#"
          />
          <MoreAbout_chef
            role="اجاق گاز ارشد"
            chefLink="#"
            imageUrl="/pages/chef/chefs/02-2.jpg"
            chefName="لزلی مایکل"
            faceBookLink="#"
            linkedinLink="#"
            twitterLink="#"
            youtubeLink="#"
          />
          <MoreAbout_chef
            role="سرآشپز ارشد"
            chefLink="#"
            imageUrl="/pages/chef/chefs/03-2.jpg"
            chefName="لزلی الکساندر"
            faceBookLink="#"
            linkedinLink="#"
            twitterLink="#"
            youtubeLink="#"
          />
          <MoreAbout_chef
            role="مدیر جدول"
            chefLink="#"
            imageUrl="/pages/chef/chefs/04-2.jpg"
            chefName="هنری لوکاس"
            faceBookLink="#"
            linkedinLink="#"
            twitterLink="#"
            youtubeLink="#"
          />
          <MoreAbout_chef
            role="اجاق گاز ارشد"
            chefLink="#"
            imageUrl="/pages/chef/chefs/05-2.jpg"
            chefName="متئو لوی"
            faceBookLink="#"
            linkedinLink="#"
            twitterLink="#"
            youtubeLink="#"
          />
          <MoreAbout_chef
            role="اجاق گاز ارشد"
            chefLink="#"
            imageUrl="/pages/chef/chefs/06-2.jpg"
            chefName="دنیل جک"
            faceBookLink="#"
            linkedinLink="#"
            twitterLink="#"
            youtubeLink="#"
          />
        </div>
      </div>
      {/* //! دیدار با کارشناس ها و سرآشپزها */}
    </div>
  );
}
