import { GraduationCap, User, Star, Heart, Book, Phone } from "lucide-react"

export default function AcademyFeatures() {
  const features = [
    {
      icon: GraduationCap,
      title: "Qualified Teachers",
      description:
        "Over 10+ Highly Qualified Quran Teachers, who go through special training for to Maintain Quality Education",
    },
    {
      icon: User,
      title: "One on One Classes",
      description: "With One on One Quran Teaching Method every student is taught with great attention and importance.",
    },
    {
      icon: Star,
      title: "Weekly Reports",
      description:
        "With weekly report cards so you can track your kids progress and learn more ways to provide islamic education",
    },
    {
      icon: Heart,
      title: "Ikhlaq and Tarbiyah",
      description: "We give special importance to Ikhlaq and Tarbiyah of Kids while Teaching Quran and its importance.",
    },
    {
      icon: Book,
      title: "Meaningful Curriculum",
      description:
        "Along with teaching the Holy Quran, we focus on the teaching students about Basic Islamic Duas and Virtue.",
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description:
        "We have 24/7 Chat & Call Support for students and parents to help with any technical or other issues.",
    },
  ]

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-extra-dark mb-12">Why opt Learn Quran Online?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-secondary p-8 text-center">
                  <IconComponent className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-700 text-center leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
