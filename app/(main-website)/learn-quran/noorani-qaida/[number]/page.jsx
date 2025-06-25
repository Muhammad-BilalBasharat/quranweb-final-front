import qaidaData from "@/data/noorani-qaida.json";

export default async function NooraniQaidaLessonPage({ params }) {
	const { number } = await params;
	const lessonNumber = parseInt(number, 10);
	const lesson = qaidaData.find((l) => l.number === lessonNumber);

	if (!lesson) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-center">
					<h1 className="mb-2 text-2xl font-bold">Lesson Not Found</h1>
					<p className="text-gray-500">The requested Noorani Qaida lesson does not exist.</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="container max-w-3xl px-4 py-8 mx-auto">
				<div className="mb-8 text-center">
					<div className="flex justify-center mb-2">
						<div className="flex items-center justify-center text-2xl font-bold text-white rotate-45 bg-blue-700 rounded-md shadow w-14 h-14">
							<span className="block -rotate-45">{lesson.number}</span>
						</div>
					</div>
					<h1 className="mb-2 text-3xl font-bold text-dark">{lesson.name}</h1>
					<div className="mb-1 text-lg text-gray-700">{lesson.subtitle}</div>
					<div className="mb-2 text-2xl text-gray-800 font-arabic">{lesson.arabic}</div>
					<div className="flex justify-center gap-3 mb-2">
						<span className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">
							Difficulty: {lesson.difficulty}
						</span>
						<span className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">
							{lesson.info}
						</span>
					</div>
				</div>
				<div className="mb-4 text-base text-gray-700">{lesson.description}</div>
				{lesson.examples && lesson.examples.length > 0 && (
					<div className="mb-4">
						<span className="font-semibold text-gray-800">Examples: </span>
						<span className="text-lg font-arabic">{lesson.examples.join(' , ')}</span>
					</div>
				)}
				{lesson.notes && (
					<div className="mb-4 text-sm text-gray-600">{lesson.notes}</div>
				)}
			</div>
		</div>
	);
}
