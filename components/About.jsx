const About = () => {
  // About data object
  const aboutData = {
    header: {
      title: "About Us",
    },
    leader: {
      name: "Qari Muhammad Abdullah",
      qualification: "MA in Islamic Studies",
      icon: (
        <svg
          className="w-8 h-8 text-extra-dark"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    sections: [
      {
        id: 1,
        title: "Our Mission",
        icon: (
          <svg
            className="w-6 h-6 text-primary mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
        content:
          "We understand that it can be very challenging to find a reliable source to educate your children about Islamic studies when you live in Western countries. We provide you with a service that you can trust.",
      },
      {
        id: 2,
        title: "Our Experience",
        icon: (
          <svg
            className="w-6 h-6 text-primary mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
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
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        ),
      },
      {
        id: 2,
        title: "Expert Tutors",
        description: "Qualified male and female Islamic educators",
        icon: (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        ),
      },
      {
        id: 3,
        title: "Trusted Service",
        description: "20 years of reliable Islamic education",
        icon: (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        ),
      },
    ],
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            {aboutData.header.title}
          </h2>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Introduction */}
          <div className="mb-10">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                {aboutData.leader.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-extra-dark">
                  {aboutData.leader.name}
                </h3>
                <p className="text-gray-900 font-medium">
                  {aboutData.leader.qualification}
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutData.introduction}
            </p>
          </div>

          {/* Mission and Experience Sections */}
          {aboutData.sections.map((section) => (
            <div key={section.id} className="mb-10">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                {section.icon}
                {section.title}
              </h4>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          ))}

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6">
            {aboutData.features.map((feature) => (
              <div
                key={feature.id}
                className="text-center p-6 bg-primary rounded-xl"
              >
                <div className="w-12 h-12 bg-extra-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h5 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h5>
                <p className="text-sm text-gray-50">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
