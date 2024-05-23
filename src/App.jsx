import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Models, Hero, Navbar, Tech, Works, StarsCanvas, PumpkinCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary-gradient'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center relative'>
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Models />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
