import React from 'react';
import Button from '../components/Button';

export const Hero = () => {
  return (
    <section className="">
      <div className="wrapper pl-[128px] pr-[98px] pb-[47px] flex items-center justify-between">
        <div>
          <h2 className=" text-primaryColor text-[48px] font-bold">
            Hi, I am <br /> Oyindamola Bakare
          </h2>
          <p className="text-[#828282] text-[18px] font-medium mb-[35px]">
            Frontend Developer
          </p>
          <div className="flex gap-[10px] items-center">
            <Button className=" hover:bg-[#171717] border">Download CV</Button>
            <Button className="!bg-[#171717] !border hover:bg-[red] ">
              Learn More
            </Button>
          </div>
        </div>
        <div>
          <img src="/Group1.png" alt="Avatar"></img>
        </div>
      </div>
    </section>
  );
};
