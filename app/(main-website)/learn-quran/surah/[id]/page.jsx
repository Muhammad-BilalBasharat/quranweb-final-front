"use client"
import SurahDetail from "@/components/SurahDetail";
import { useEffect, useState, use } from "react";
import { axiosRequest } from "@/lib/axiosReq";

export default function SurahPage({ params }) {
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

  if (loading) return <div>Loading...</div>;
  if (!surahData) return <div>Not found</div>;

  return (
    <>
      <SurahDetail surahData={surahData} />
    </>
  );
}
