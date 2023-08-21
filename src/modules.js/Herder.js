import React from 'react';

export const Herder = () => {
  const listHome = [
    { name: 'About me', link: '' },
    { name: 'Services', link: '' },
    { name: 'Contact me', link: '' },
  ];
  return (
    <herder className=" flex justify-center">
      <div className="wrapper flex justify-between pt-10 px-20 pb-[120px] items-center">
        <div>
          <h2 className=" text-primaryColor text-[36px] font-bold">
            Oyindamola
          </h2>
        </div>
        <div>
          <ul className="flex items-center gap-10">
            {listHome.map((item) => {
              return (
                <li key={item.name}>
                  <a
                    className=" text-primaryColor text-[18px] font-normal"
                    href={item.link}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </herder>
  );
};
