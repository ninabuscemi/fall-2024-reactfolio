import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Projects } from './components';
import ZnoozCaseStudy from './components/projects/ZnoozCaseStudy'; // Adjust path as needed
import AbileCaseStudy from './components/projects/AbileCaseStudy'; // Adjust path as needed
import ZoulifulCaseStudy from './components/projects/ZoulifulCaseStudy'; // Adjust path as needed
import WarrenCaseStudy from './components/projects/WarrenCaseStudy'; // Adjust path as needed
import ScrollToTop from './components/ScrollToTop'; // Add the ScrollToTop component

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <div className="bg-about bg-cover bg-center bg-no-repeat">
                  <About />
                </div>
                <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
                  <Tech />
                </div>
                <Projects />
                <div className="bg-experience bg-cover bg-center bg-no-repeat rounded-tl-[150px] rounded-br-[150px]">
                  <div className="bg-experienceLight bg-cover bg-center bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
                    <Experience />
                  </div>
                </div>
                <Contact />
              </>
            } 
          />
          <Route path="/projects/ZnoozCaseStudy" element={<ZnoozCaseStudy />} />
          <Route path="/projects/AbileCaseStudy" element={<AbileCaseStudy />} />
          <Route path="/projects/ZoulifulCaseStudy" element={<ZoulifulCaseStudy />} />
          <Route path="/projects/WarrenCaseStudy" element={<WarrenCaseStudy />} />
        </Routes>
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
};

export default App;