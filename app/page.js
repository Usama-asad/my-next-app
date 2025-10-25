"use client";
import Header from '../components/Header';
import CourseOverview from '../components/CourseOverview';
import HeroSection from '../components/HeroSection';
import HeroSection2 from '../components/HeroSection2';
import AboutSection from '../components/AboutSection';
import AboutSection2 from '../components/AboutSection2';
import MLEngineeringDashboard from '../components/MLEngineeringDashboard';
import ScrollingLogos from '../components/ScrollingLogos';
import PhasesSection from '../components/PhasesSection';
import BenefitsAndCareer from '../components/BenefitsAndCareer';
import InvestmentGuarantee from '../components/InvestmentGuarantee';
import OurTeachers from '../components/OurTeachers';
import QualityCommitment from '../components/QualityCommitment';
import AffordableFinancing from '../components/AffordableFinancing';

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
      <PhasesSection/>
      <BenefitsAndCareer/>
      <InvestmentGuarantee/>
      <OurTeachers/>
      <QualityCommitment/>
      <AffordableFinancing/>
    </>
  );
}
