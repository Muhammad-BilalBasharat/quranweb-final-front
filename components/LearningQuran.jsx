import Image from 'next/image';
import learnQuran from '@/public/learn-quran.png';
import quranClasses from '@/public/quran-classes.png';
import weeklyReports from '@/public/weekly-reports.png';

export default function LearningQuran() {
  // Benefits data array for easy customization
  const benefits = [
    {
      id: 1,
      image: learnQuran,
      alt: "Learn Quran at your own time",
      title: "Learn Quran at your own Time",
      description: "No Need to Drive Kids to Mosque at a set time everyday, Learn Quran at your own time at Home. Under your supervision high quality Quran Education for Kids and Adults"
    },
    {
      id: 2,
      image: quranClasses,
      alt: "One on One Quran Classes",
      title: "One on One Quran Classes",
      description: "With our One on One Interactive Quran Classes every students gets their own dedicated Qualified Teachers with complete attention and and students is not left behind or disturbed."
    },
    {
      id: 3,
      image: weeklyReports,
      alt: "Weekly Reports",
      title: "Weekly Reports",
      description: "Get weekly reports about the students progress, check in on your childs progress anytime and meet with dedicated student consellers to help and discuss your childs education."
    }
  ];

  return (
    <>
      <div className="py-16 xl:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Main Title */}
          <h1 className="text-3xl font-bold text-center text-extra-dark mb-16">
            Why Learning Quran Online is Better?
          </h1>

          {/* Three Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="text-center">
                <div className="mb-8 flex justify-center">
                  <div className="w-64 h-64 relative">
                    <Image
                      src={benefit.image}
                      alt={benefit.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h2 className="text-xl font-bold text-extra-dark mb-4">
                  {benefit.title}
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}