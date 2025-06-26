"use client"
import SurahDetail from "@/components/SurahDetail";
import { useEffect, useState, use } from "react";
import { axiosRequest } from "@/lib/axiosReq";
import { Skeleton } from "@/components/ui/skeleton";

export default function SurahByIdClient({ params }) {
  const { id } = typeof params.then === "function" ? use(params) : params;
  const [surahData, setSurahData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    axiosRequest({
      method: "GET",
      url: `https://quranapi.pages.dev/api/${id}.json`,
      withCredentials: false,
    }).then((res) => {
      if (res.success) setSurahData(res.data);
      setLoading(false);
    });
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-8 max-w-4xl w-full">
          <div className="text-center mb-10">
            <Skeleton className="h-10 w-1/2 mx-auto mb-4" />
            <Skeleton className="h-6 w-1/3 mx-auto mb-2" />
            <Skeleton className="h-4 w-1/4 mx-auto" />
          </div>
          <div className="mb-5">
            <Skeleton className="h-8 w-1/3 mb-2" />
            <Skeleton className="h-6 w-1/4" />
          </div>
          <div className="mb-5">
            <Skeleton className="h-16 w-full rounded" />
          </div>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-24 w-full rounded" />
            ))}
          </div>
        </div>
      </div>
    );
  if (!surahData) return <div>Not found</div>;

  return (
    <>
      <SurahDetail surahData={surahData} />
    </>
  );
}
