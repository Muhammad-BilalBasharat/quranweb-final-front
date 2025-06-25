"use client"
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import qaidaData from "@/data/noorani-qaida.json";

function sortQaida(data, sortBy) {
	if (sortBy === "lesson-order") {
		return [...data].sort((a, b) => a.number - b.number);
	}
	if (sortBy === "difficulty") {
		return [...data].sort((a, b) => a.difficulty - b.difficulty);
	}
	return data;
}

export default function NooraniQaidaList() {
	const [sortBy, setSortBy] = useState("lesson-order");
	const sortedQaida = sortQaida(qaidaData, sortBy);

	return (
		<>
			{/* Sort Section */}
			<div className="flex items-center justify-end mb-6">
				<span className="mr-3 font-medium text-gray-600">SORT BY:</span>
				<div className="relative">
					<select
						value={sortBy}
						onChange={(e) => setSortBy(e.target.value)}
						className="px-4 py-2 pr-8 font-medium text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					>
						<option value="lesson-order">LESSON ORDER</option>
						<option value="difficulty">DIFFICULTY</option>
					</select>
					<ChevronDown className="absolute w-4 h-4 text-gray-500 transform -translate-y-1/2 pointer-events-none right-2 top-1/2" />
				</div>
			</div>
			{/* Content Grid */}
			<div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
				{sortedQaida.map((item) => (
					<Link
						key={item.number}
						href={`/learn-quran/noorani-qaida/${item.number}`}
						className="block border border-gray-200 rounded-xl p-4 shadow-sm bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-blue-500 cursor-pointer group"
					>
						<div className="flex items-center mb-3">
							<div className="flex items-center justify-center w-12 h-12 mr-4 text-lg font-bold text-white transition-colors duration-300 rotate-45 bg-blue-700 rounded-md shadow group-hover:bg-blue-900">
								<span className="block -rotate-45">{item.number}</span>
							</div>
							<div className="flex-1">
								<h3 className="mb-1 text-xl font-semibold text-gray-900">{item.name}</h3>
								<div className="text-sm text-gray-600">{item.subtitle}</div>
							</div>
							<div className="ml-2 text-2xl font-medium text-gray-700 font-arabic">
								{item.arabic}
							</div>
						</div>
						<div className="flex items-center justify-between mt-2">
							<div className="px-3 py-1 text-sm font-medium text-gray-600 rounded-full bg-gray-50">
								{item.info}
							</div>
							<div className="ml-2 text-xs font-semibold text-blue-600">
								Difficulty: {item.difficulty}
							</div>
						</div>
					</Link>
				))}
			</div>
		</>
	);
}

