"use client";
import { useGetCart } from "@/hooks/useCart";
import { useDeleteToCart } from "@/hooks/useDeleteToCart";
import { useState } from "react";
import { FaStar, FaTrash } from "react-icons/fa";

export default function CartProducs() {
  const [id, setid] = useState("");
  const { cartproducts, error } = useGetCart();
  const { DeleteToCartProdcuts } = useDeleteToCart(id);

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-red-500">خطا در دریافت اطلاعات سبد خرید</p>
      </div>
    );
  }

  if (!cartproducts || cartproducts.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">سبد خرید شما خالی است</p>
      </div>
    );
  }

  return (
    <section dir="rtl" className="overflow-x-auto h-[93%] flex flex-col mt-[1.3rem] gap-[2rem]">
      {cartproducts.map((res) => {
        const count = cartproducts.find((item) => item.product.id === res.product.id);
        return (
          <div key={res.product.id} className="flex-row-reverse border-[2px] border-gray-300 rounded-[.8rem] pl-[2rem] bg-[#ffff] flex flex-wrap w-full justify-center items-center">
            <div className="w-[60%] flex flex-wrap h-1/2 content-center">
              <div className="flex justify-between w-full items-center">
                <h1 className="w-full font-semibold my-[.8rem] text-right text-3xl text-black sm:text-3xl md:text-4xl lg:text-[1.8rem]">{res.product.name}</h1>
                <div className="flex">
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                </div>
              </div>
              <h2 className="w-[90%] font-semibold text-right text-base text-slate-500 py-[.5rem] md:text-[1.4rem] lg:text-[.9rem]">{res.product.description}</h2>
              <div className="flex justify-between my-6 w-full items-center">
                <div className="flex items-center gap-[.5rem]">
                  <FaTrash
                    onClick={() => {
                      DeleteToCartProdcuts();
                      setid(res.product.id);
                    }}
                    size={20}
                    color="gray"
                    className="cursor-pointer"
                  />
                  <div className="h-8 w-32 flex justify-center items-center">
                    <button className="border-1 cursor-pointer group border-slate-200 px-3 py-3">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-black duration-700 group-hover:text-green-800 text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                      </svg>
                    </button>
                    <div className="text-lg border-1 py-[7px] border-r-0 border-l-0 border-slate-200 px-3">{count?.count}</div>
                    <button className="border-1 cursor-pointer border-slate-200 group px-3 py-3">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-black duration-700 group-hover:text-green-800 text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex font-semibold text-2xl">
                  <div className="flex space-x-2">
                    <p className="text-[#D12525]">تومان</p>
                    <div className="text-[#D12525]">{res.product.price}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[40%] flex items-center">
              <img src={res.product.image} className="" alt="" />
            </div>
          </div>
        );
      })}
    </section>
  );
}
