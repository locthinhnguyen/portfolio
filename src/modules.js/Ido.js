import React from 'react';

export const Ido = () => {
  const lisIdo = [
    { img: './IdoSoft.svg', job: 'Software Development' },
    { img: './IdoWeb.svg', job: 'Web Development' },
    { img: './IdoDes.svg', job: 'Web Design' },
  ];
  return (
    <section>
      <div className="flex flex-col justify-center items-center gap-[100px] pb-[133px]">
        <h2 className=" text-primaryColor text-[48px] font-bold">What i do</h2>
        <div className="flex items-center gap-[60px]">
          {lisIdo.map((item) => {
            return (
              <div className=" bg-bgColor2 py-[35px] px-[50px] w-[349px] h-[241px] flex flex-col gap-[30px]">
                <img
                  src={item.img}
                  alt="img"
                  className="w-[57px] h-[47px]"
                ></img>
                <p className=" text-secondaryColor text-[36px] font-medium">
                  {item.job}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
