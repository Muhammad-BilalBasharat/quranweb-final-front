import { Clock, UsersRound, ShieldCheck, BookOpen, BadgeCheck, UserRound } from "lucide-react";


const About = () => {
  const aboutData = {
    header: {
      title: "About Us",
    },
    leader: {
      name: "Qari Muhammad Abdullah",
      qualification: "MA in Islamic Studies",
      icon: (
        <UserRound />
      ),
    },
    sections: [
      {
        id: 1,
        title: "Our Mission",
        icon: (
          <BadgeCheck className="w-6 h-6 mr-2 text-primary" />
        ),
        content:
          "We understand that it can be very challenging to find a reliable source to educate your children about Islamic studies when you live in Western countries. We provide you with a service that you can trust.",
      },
      {
        id: 2,
        title: "Our Experience",
        icon: (
          <Clock className="w-6 h-6 mr-2 text-primary" />
        ),
        content:
          "We are a team of administrators and male and female tutors who have been dedicated to offering first-class tutoring services to our fellow Muslim brothers and sisters for the past 20 years.",
      },
    ],
    introduction:
      "We are an organization dedicated to providing online Quran education to Muslims living in Western countries. We welcome every Muslim who seeks to gain knowledge of the Holy Quran.",
    features: [
      {
        id: 1,
        title: "Quran Education",
        description: "Comprehensive online Quran learning programs",
        icon: (
          <BookOpen className="w-6 h-6 text-white" />
        ),
      },
      {
        id: 2,
        title: "Expert Tutors",
        description: "Qualified male and female Islamic educators",
        icon: (
          <UsersRound className="w-6 h-6 text-white" />
        ),
      },
      {
        id: 3,
        title: "Trusted Service",
        description: "20 years of reliable Islamic education",
        icon: (
          <ShieldCheck className="w-6 h-6 text-white" />
        ),
      }
    ],
  };

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-5/6 mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="my-10 text-3xl font-semibold text-extra-dark text-center">
            {aboutData.header.title}
          </h2>
        </div>

        {/* Main Content */}
        <div className="p-8 bg-white shadow-2xl rounded-2xl md:p-12">
          {/* Introduction */}
          <div className="mb-10">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-16 h-16 mr-4 rounded-full bg-primary">
                {aboutData.leader.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-extra-dark">
                  {aboutData.leader.name}
                </h3>
                <p className="font-medium text-gray-900">
                  {aboutData.leader.qualification}
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-700">
              {aboutData.introduction}
            </p>
          </div>

          {/* Mission and Experience Sections */}
          {aboutData.sections.map((section) => (
            <div key={section.id} className="mb-10">
              <h4 className="flex items-center mb-4 text-xl font-semibold text-extra-dark">
                {section.icon}
                {section.title}
              </h4>
              <p className="leading-relaxed text-gray-700">{section.content}</p>
            </div>
          ))}

          {/* Key Features */}
          <div className="grid gap-6 md:grid-cols-3">
            {aboutData.features.map((feature) => (
              <div className="group" key={feature.id}>
              <div
                className="p-6 text-center transition-all duration-300 bg-primary group-hover:bg-dark rounded-xl"
              >
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 transition-all duration-300 delay-100 rounded-full bg-dark group-hover:bg-extra-dark">
                  {feature.icon}
                </div>
                <h5 className="mb-2 font-semibold text-gray-900">
                  {feature.title}
                </h5>
                <p className="text-sm text-gray-50">{feature.description}</p>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
