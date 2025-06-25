import React from "react";

export default function NooraniQaidaDetail({ lesson }) {
	if (!lesson) return (
		<div className="text-center py-20 text-gray-500 text-xl">Lesson not found.</div>
	);

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="container mx-auto px-4 py-8 max-w-3xl">
				<div className="mb-8 text-center">
					<div className="flex justify-center mb-2">
						<div className="flex items-center justify-center w-14 h-14 text-2xl font-bold text-white rotate-45 bg-blue-700 rounded-md shadow">
							<span className="block -rotate-45">{lesson.number}</span>
						</div>
					</div>
					<h1 className="text-3xl font-bold text-dark mb-2">{lesson.name}</h1>
					<div className="text-lg text-gray-700 mb-1">{lesson.subtitle}</div>
					<div className="text-2xl font-arabic text-gray-800 mb-2">{lesson.arabic}</div>
					<div className="flex justify-center gap-3 mb-2">
						<span className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">
							Difficulty: {lesson.difficulty}
						</span>
						<span className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">
							{lesson.info}
						</span>
					</div>
				</div>
				<div className="mb-4 text-gray-700 text-base">{lesson.description}</div>
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
