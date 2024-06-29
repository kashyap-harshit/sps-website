import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works} from "./components";
import Gallery from "./components/event_gallery";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About/>
        <Experience />
        <Feedbacks />
        <Gallery/>
        
        <Works />
        
        
        
        
        
        
        
        <Contact/>
      </div>
    </BrowserRouter>
  );
}

export default App;
