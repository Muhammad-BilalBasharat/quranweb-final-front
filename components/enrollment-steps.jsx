import { FileText, BookOpen, Users } from "lucide-react"

export default function EnrollmentSteps() {
  const steps = [
    {
      number: 1,
      title: "Join Trial",
      description:
        "Join our 3 Days Free Trial using the form above and our Representative will give you a call to share more information about our program and schedule a mutual time with you do proceed to next step.",
      icon: FileText,
    },
    {
      number: 2,
      title: "Assessment",
      description:
        "After our Representative schedules a time with you, Our Head Teacher will conduct a short student assessment with the parents through which we assess the student's ability to Read Quran and decide with parents permission wether he/she should start from where they were or start from the beginning.",
      icon: BookOpen,
    },
    {
      number: 3,
      title: "Start Classes",
      description:
        "Once the student assessment is done we begin the 3 Days Free Trial, Student and Parents can join in and check for themselves if they want are satisfied , if they are not we offer another trial for complete satisfaction. Once you are satisfied, you pay the fee and we start normal classes",
      icon: Users,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-extra-dark mb-16">Easy to Get Started</h2>

      <div className="space-y-16">
        {steps.map((step) => {
          const IconComponent = step.icon
          return (
            <div key={step.number} className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon Circle */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center shadow-lg">
                  <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-16 h-16 text-cyan-500" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-extra-dark mb-4">
                  Step {step.number}: {step.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">{step.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
