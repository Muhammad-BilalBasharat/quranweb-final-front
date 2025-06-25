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
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-extra-dark mb-2">Simple Class Requirements</h1>
          <div className="inline-block ml-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <div className="w-3 h-2 bg-blue-500 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {requirements.map((requirement, index) => {
            const IconComponent = requirement.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Icon Section */}
                <div className="h-48 bg-gradient-to-br from-cyan-400 to-teal-300 flex items-center justify-center">
                  <IconComponent className="w-16 h-16 text-white stroke-[1.5]" />
                </div>

                {/* Text Section */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-slate-800">{requirement.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
