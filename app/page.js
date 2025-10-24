import Header from '../components/Header';
import CourseOverview from '../components/CourseOverview';
import HeroSection from '../components/HeroSection';
import HeroSection2 from '../components/HeroSection2';
import AboutSection from '../components/AboutSection';
import AboutSection2 from '../components/AboutSection2';
import MLEngineeringDashboard from '../components/MLEngineeringDashboard';
import ScrollingLogos from '../components/ScrollingLogos';

export default function Home() {
  return (
    <>
      <Header/>
      <HeroSection/>
     <CourseOverview />
     <HeroSection2/>
     <AboutSection/>
     <AboutSection2/>
     <MLEngineeringDashboard/>
     <ScrollingLogos/>
    </>
  );
}
