"use client";
import React from "react";

export default function JuzDetail({ juz }) {
    if (!juz) return null;

    // Get the first and last ayah for header info
    const firstAyah = juz.ayahs[0];
    const lastAyah = juz.ayahs[juz.ayahs.length - 1];

    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-dark mb-2">
                        Juz {juz.number}
                    </h1>
                    <div className="text-lg text-gray-700 mb-2">
                        From{" "}
                        <span className="font-semibold">
                            {firstAyah.surah.englishName} ({firstAyah.surah.englishNameTranslation})
                        </span>{" "}
                        Ayah {firstAyah.numberInSurah}
                        {" "}to{" "}
                        <span className="font-semibold">
                            {lastAyah.surah.englishName} ({lastAyah.surah.englishNameTranslation})
                        </span>{" "}
                        Ayah {lastAyah.numberInSurah}
                    </div>
                    <div className="text-gray-500 text-sm">
                        Total Ayahs: {juz.ayahs.length}
                    </div>
                </div>

                {/* Ayah List */}
                <div className="space-y-4">
                    {juz.ayahs.map((ayah) => (
                        <div
                            key={ayah.number}
                            className="group rounded-sm p-5 border border-gray-200 bg-white shadow-sm"
                        >
                            <div className="flex flex-wrap items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-dark text-white flex items-center justify-center font-semibold">
                                        {ayah.numberInSurah}
                                    </span>
                                    <span className="text-sm text-gray-700 font-medium">
                                        {ayah.surah.englishName} ({ayah.surah.englishNameTranslation})
                                    </span>
                                </div>
                                <span className="text-xs text-gray-400">
                                    Surah {ayah.surah.number} • Ayah {ayah.numberInSurah}
                                </span>
                            </div>
                            <div className="text-right my-2">
                                <p className="text-2xl text-extra-dark leading-loose" dir="rtl" lang="ar">
                                    {ayah.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
