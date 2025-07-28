import AcademyFeatures from "@/components/academy-features";
import Banner from "@/components/Banner";
import ClassRequirements from "@/components/class-requirements";
import EnrollmentSteps from "@/components/enrollment-steps";
import WhatsAppButton from "@/components/floatingWhatsapp";
import GoToTopButton from "@/components/goToTop";
import LearningQuran from "@/components/LearningQuran";
import MissionSection from "@/components/mission-section";
import QuranCourses from "@/components/quran-courses";
import QuranLearningSection from "@/components/quran-learning-section";

export function generateMetadata() {
  return {
    title: "Home | Smart Quran Learning",
    description: "Welcome to Smart Quran Learning",
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
      <WhatsAppButton />
      <GoToTopButton />
    </>
  );
}
