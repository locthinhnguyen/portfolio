import React from 'react';

export const About = () => {
  const itemAbout = [
    { title: 'Full Name', content: 'Your name goes here' },
    { title: 'Email Address', content: 'Your email  goes here' },
    { title: 'Twitter', content: 'Your twitter goes here' },
    { title: 'Phone', content: 'Your phone goes here' },
  ];
  return (
    <section className="flex justify-center pb-[120px]">
      <div className="wrapper flex items-center justify-center flex-col gap-[38px]">
        <h2 className=" text-primaryColor text-[48px] font-bold">About</h2>
        <span className=" text-primaryColor text-[18px] font-normal text-center w-[745px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident
        </span>
        <div className="flex item-center justify-center gap-[108px] w-full">
          {itemAbout.map((item) => {
            return (
              <div
                key={item.title}
                className="flex justify-center
               flex-col items-center"
              >
                <img
                  src="./itemAbout.png"
                  alt="Icon About"
                  className="w-[62px] h-[62px] mb-[18px]"
                ></img>
                <span className=" text-primaryColor text-[18px] font-bold">
                  {item.title}
                </span>
                <p className=" text-primaryColor text-[18px] font-normal">
                  {item.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
