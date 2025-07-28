import { Laptop, Wifi, Headphones } from "lucide-react"

export default function ClassRequirements() {
  const requirements = [
    {
      icon: Laptop,
      title: "Laptop or Computer",
    },
    {
      icon: Wifi,
      title: "Internet or Wifi",
    },
    {
      icon: Headphones,
      title: "Headphones with Mic",
    },
  ]

  return (
    <div className="bg-gray-100 py-10 xs:py-16 px-2 xs:px-4">
      <div className="max-w-2xl xs:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 xs:mb-12">
          <h1 className="text-2xl xs:text-3xl font-bold text-extra-dark mb-2">Simple Class Requirements</h1>
          <div className="inline-block ml-2">
            <div className="w-10 h-10 xs:w-12 xs:h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <div className="w-5 h-5 xs:w-6 xs:h-6 bg-white rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 xs:w-3 xs:h-2 bg-primary rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements Cards */}
        <div className="grid grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 max-w-xl xs:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
          {requirements.map((requirement, index) => {
            const IconComponent = requirement.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Icon Section */}
                <div className="h-32 xs:h-48 md:h-56 lg:h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <IconComponent className="w-12 h-12 xs:w-16 xs:h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 text-white stroke-[1.5]" />
                </div>

                {/* Text Section */}
                <div className="p-4 xs:p-6 text-center">
                  <h3 className="text-lg xs:text-xl md:text-2xl lg:text-xl font-semibold text-slate-800">{requirement.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
