'use client';

import { useState, useRef } from 'react';
import { Play, Pause, Info, Copy, BookOpen } from 'lucide-react';
import Link from "next/link";

const SurahDetail = ({ surahData }) => {

  const copyVerse = (idx) => {
    const arabic = surahData.arabic1[idx];
    const translation = surahData.english[idx];
    navigator.clipboard.writeText(`${arabic}\n${translation}`);
  };

  if (!surahData) return null;

  const surahNo = surahData.surahNo || 1;
  const prevSurah = surahNo > 1 ? surahNo - 1 : null;
  const nextSurah = surahNo < 114 ? surahNo + 1 : null;

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-dark mb-5">
            {surahData.surahNameArabicLong || surahData.surahNameArabic}
          </h1>
          <h2 className="text-xl font-bold text-dark mb-5">
            {surahData.surahName}{" "}"{surahData.surahNameTranslation}"
          </h2>
          <h2 className="font-bold text-dark mb-5">
            ({surahData.revelationPlace})
          </h2>
          {/* <p className="text-extra-dark mb-2">
            Translation by{': '}
            <span className="text-primary hover:text-dark transition-colors">
              Dr. Mustafa Khattab
            </span>
          </p> */}
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mb-5 gap-5">
          <div className="flex items-center gap-5">
            <span className="bg-dark/20 border text-dark border-extra-dark px-4 py-2 rounded-full text-xs font-medium">
              Surah No: {surahData.surahNo || 1}
            </span>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <BookOpen className="w-4 h-4" />
              <span>{surahData.totalAyah || (surahData.arabic1 ? surahData.arabic1.length : 0)} verses</span>
            </div>
          </div>
        </div>

        {/* Bismillah */}
        <div className="text-center mb-5 p-5 rounded-sm border border-gray-500">
          <div className="text-3xl text-extra-dark mb-5">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>
          <div className="text-dark">
            In the Name of Allah—the Most Compassionate, Most Merciful.
          </div>
        </div>

        {/* Verses */}
        <div className="space-y-2">
          {surahData.arabic1 && surahData.arabic1.map((arabic, idx) => (
            <div
              key={idx}
              className="group rounded-sm p-5 border border-gray-500"
            >
              {/* Verse Number */}
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-full bg-dark group-hover:bg-extra-dark transition flex items-center justify-center text-white font-semibold">
                  {idx + 1}
                </div>
                <button
                  onClick={() => copyVerse(idx)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-muted group rounded-full"
                >
                  <Copy className="w-4 h-4 text-extra-dark" />
                </button>
              </div>

              {/* Arabic Text */}
              <div className="text-right my-2">
                <p className="text-3xl text-extra-dark">
                  {arabic}
                </p>
              </div>

              {/* Translation */}
              <div>
                <p className="text-dark">
                  {surahData.english ? surahData.english[idx] : ""}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-5 pt-5 border-t">
          {prevSurah ? (
            <Link
              href={`/learn-quran/surah/${prevSurah}`}
              className="flex items-center gap-1 text-dark hover:text-extra-dark transition-colors"
            >
              <span>← Previous Surah</span>
            </Link>
          ) : (
            <span className="flex items-center gap-1 text-dark cursor-not-allowed opacity-50">
              ← Previous Surah
            </span>
          )}
          <div className="text-primary text-xs">
            Surah {surahNo} of 114
          </div>
          {nextSurah ? (
            <Link
              href={`/learn-quran/surah/${nextSurah}`}
              className="flex items-center gap-1 text-dark hover:text-extra-dark transition-colors"
            >
              <span>Next Surah →</span>
            </Link>
          ) : (
            <span className="flex items-center gap-1 text-dark cursor-not-allowed opacity-50">
              Next Surah →
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurahDetail;