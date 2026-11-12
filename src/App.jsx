import { lazy, Suspense } from "react";
import { MotionConfig } from "framer-motion";
import { BrowserRouter } from "react-router-dom";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import DeferredSection from "./components/DeferredSection";
import ScrollProgress from "./components/ScrollProgress";

const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Models = lazy(() => import("./components/Models"));
const Contact = lazy(() => import("./components/Contact"));

const LazySection = ({ children, minHeight }) => (
  <DeferredSection minHeight={minHeight}>
    <Suspense fallback={<div style={{ minHeight }} aria-hidden="true" />}>
      {children}
    </Suspense>
  </DeferredSection>
);

const App = () => {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <div className='relative z-0 bg-primary-gradient'>
          <ScrollProgress />
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center relative'>
            <Navbar />
            <Hero />
            <div className="star-field" aria-hidden="true" />
          </div>
          <LazySection minHeight={650}><About /></LazySection>
          <LazySection minHeight={950}><Experience /></LazySection>
          <LazySection minHeight={3800}><Projects /></LazySection>
          <LazySection minHeight={300}><Tech /></LazySection>
          <LazySection minHeight={800}><Works /></LazySection>
          <LazySection minHeight={750}><Models /></LazySection>
          <LazySection minHeight={850}>
            <div className='relative z-0'>
              <Contact />
              <div className="star-field" aria-hidden="true" />
            </div>
          </LazySection>
        </div>
      </MotionConfig>
    </BrowserRouter>
  );
}

export default App;
