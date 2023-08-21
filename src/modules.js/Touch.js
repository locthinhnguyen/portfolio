import React from 'react';
import Button from '../components/Button';

export const Touch = () => {
  return (
    <section className="flex justify-center ">
      <div className="wrapper flex flex-col items-center justify-center pb-[95px]">
        <h2 className=" text-primaryColor text-[48px] font-bold mb-[80px]">
          Get in touch
        </h2>
        <div className="form-box mb-[160px]">
          <form className=" flex flex-col items-center ">
            <div className="flex item-center gap-[37px]">
              <div className="input-box w-[350px] h-[30px] relative border-b border-thirdColor my-5 ">
                <label className=" text-thirdColor absolute transform -translate-y-1/2 pointer-events-none transition">
                  Name
                </label>
                <input
                  type="name"
                  className="w-full h-full bg-transparent text-[white] border-none outline-none "
                />
              </div>
              <div className="input-box w-[350px] h-[30px] relative border-b border-thirdColor my-5 ">
                <label className=" text-thirdColor absolute transform -translate-y-1/2 pointer-events-none transition">
                  Last Name
                </label>
                <input
                  type="lastname"
                  className="w-full h-full bg-transparent text-[white] border-none outline-none "
                />
              </div>
            </div>
            <div className="flex item-center gap-[37px]">
              <div className="input-box w-[350px] h-[30px] relative border-b border-thirdColor my-5 ">
                <label className=" text-thirdColor absolute transform -translate-y-1/2 pointer-events-none transition">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full h-full bg-transparent text-[white] border-none outline-none "
                />
              </div>
              <div className="input-box w-[350px] h-[30px] relative border-b border-thirdColor my-5 ">
                <label className=" text-thirdColor absolute transform -translate-y-1/2 pointer-events-none transition">
                  Phone Number
                </label>
                <input
                  type="phone"
                  className="w-full h-full bg-transparent text-[white] border-none outline-none "
                />
              </div>
            </div>
            <div className="input-box w-[750px] h-[109px] relative border border-thirdColor my-5 ">
              <label className=" text-thirdColor absolute pointer-events-none transition">
                Message
              </label>
              <input
                type="text"
                className="w-full h-full bg-transparent text-[white] border-none outline-none 
                "
              />
            </div>
            <Button>Submit now</Button>
          </form>
        </div>
        <p className=" text-thirdColor text-[14px] font-medium">
          © Oyindamola 2020
        </p>
      </div>
    </section>
  );
};
