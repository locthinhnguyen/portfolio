import "./App.css";

function App() {
  return (
    <div className="App">
      <header class="header">
        <a href="#" class="logo">
          Thinh
        </a>
        <div class="bx bx-menu" id="menu-icon"></div>

        <nav class="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact me</a>
        </nav>
      </header>

      <script src="https://unpkg.com/scrollreveal"></script>

      <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>

      <section class="home" id="home">
        <div class="home-content">
          <h1>
            Hi, I' m<span> Thinh Nguyen</span>
          </h1>
          <div class="text-animate">
            <h3>Frontend Developer</h3>
          </div>
          <p>Helo every body</p>
          <div class="btn-box">
            <a href="#" class="btn">
              Hire me
            </a>
            <a href="#" class="btn">
              Let's Talk
            </a>
          </div>
        </div>
        <div class="home-sci">
          <a href="#">
            <i class="bx bxl-facebook"></i>
          </a>
          <a href="#">
            <i class="bx bxl-twitter"></i>
          </a>
          <a href="#">
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
