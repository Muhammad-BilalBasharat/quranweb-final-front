import AcademyFeatures from "@/components/academy-features";
import Banner from "@/components/Banner";
import ClassRequirements from "@/components/class-requirements";
import EnrollmentSteps from "@/components/enrollment-steps";
import LearningQuran from "@/components/LearningQuran";
import MissionSection from "@/components/mission-section";
import QuranCourses from "@/components/quran-courses";
import QuranLearningSection from "@/components/quran-learning-section";

export function generateMetadata() {
  return {
    title: "Home | QuranWeb",
    description: "Welcome to QuranWeb - your online Quran learning platform.",
  };
}

export default function Home() {
  return (
    <>
 
      
      <Banner />
      <LearningQuran />
      <QuranCourses />
      <ClassRequirements />
      <EnrollmentSteps />
      <AcademyFeatures />
      <QuranLearningSection />
      <MissionSection />
    </>
  );
}
