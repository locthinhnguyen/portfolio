import React from 'react';

export const Skills = () => {
  const listKills = [
    { percent: '50%', language: 'HTML' },
    { percent: '20%', language: 'CSS' },
    { percent: '10%', language: 'JAVASCRIPT' },
    { percent: '2%', language: 'PHP' },
  ];
  return (
    <section>
      <div className="wrapper flex justify-center items-center flex-col gap-[73px] pb-[100px]">
        <h2 className=" text-primaryColor text-[48px] font-bold">My Skills</h2>
        <div className="flex justify-between gap-[120px] border py-[55px] px-[125px]">
          {listKills.map((item) => {
            return (
              <div className="flex flex-col items-center">
                <span className=" text-thirdColor text-[72px] font-bold">
                  {item.percent}
                </span>
                <p className=" text-greenColor text-[24px] font-bold">
                  {item.language}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
