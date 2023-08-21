import './App.css';

function App() {
  const listMenu = [
    { name: 'Home', link: '' },
    { name: 'About', link: '' },
    { name: 'Education', link: '' },
    { name: 'Skills', link: '' },
    { name: 'Contact me', link: '' },
  ];
  return (
    <div className="App">
      <header className="fixed w-full px-9 py-8 bg-transparent flex justify-between items-center z-100">
        <a className=" text-[17px] text-[--text-color] font-bold cursor-pointer">
          Thinh
        </a>
        <div className="bx bx-menu" id="menu-icon"></div>

        <nav className="navbar transition-[0.3s] flex gap-14 ">
          {listMenu.map((item, index) => {
            return (
              <a
                className=" font-semibold text[--text-color] text-[17px] hover:text-[--main-color] cursor-pointer"
                href={item.link}
                key={index}
              >
                {item.name}
              </a>
            );
          })}
        </nav>
      </header>

      <script src="https://unpkg.com/scrollreveal"></script>

      <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>

      <section className="home flex items-center py-[9%] ">
        <div className="home-content max-w-[60rem]">
          <h1 className="text-[5.6rem] font-bold p">
            Hi, I' m<span> Thinh Nguyen</span>
          </h1>
          <div className="text-animate relative w-[32.8rem]">
            <h3 className="text-[3.2rem] font-bold text-[--main-color] text-stroke-0.7px ">
              Frontend Developer
            </h3>
          </div>
          <p className="text-[1.6rem] mt-[2rem] mb-[4rem] ">Helo every body</p>
          <div className="btn-box relative flex justify-between w-[34.5rem] h-[5rem]">
            <a
              href="#"
              className="btn relative inline-flex justify-center items-center w-[15rem] h-full bg-(--main-color) border[-0.2rem] border-(--main-color) rounded-[0.8rem] text-[1.8xl] font-semibold tracking-wider text-(--bg-color) overflow-hidden z-1 transition duration-500"
            >
              Hire me
            </a>
            <a
              href="#"
              className="btn relative inline-flex justify-center items-center w-15rem h-full bg-transparent text-var(--main-color) font-semibold tracking-wider transition duration-500"
            >
              Let's Talk
            </a>
          </div>
        </div>
        <div className="home-sci absolute bottom-[4rem] w-[170px] flex justify-between text-[10rem]">
          <a
            className="relative inline-flex justify-center items-center w-40 h-40 bg-transparent border-2 border-main-color rounded-full text-xs text-main-color z-10 overflow-hidden transition duration-500"
            href="#"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
