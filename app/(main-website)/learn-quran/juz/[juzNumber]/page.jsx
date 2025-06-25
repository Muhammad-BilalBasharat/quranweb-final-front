"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { axiosRequest } from "@/lib/axiosReq";
import JuzDetail from "@/components/JuzDetail";

export default function JuzPage() {
    const params = useParams();
    const juzNumber = params?.juzNumber;
    const [loading, setLoading] = useState(true);
    const [juzData, setJuzData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!juzNumber) return;
        setLoading(true);
        axiosRequest({
            method: "get",
            url: `http://api.alquran.cloud/v1/juz/${juzNumber}/quran-uthmani`,
            withCredentials: false,
        }).then((res) => {
            if (res.success) {
                setJuzData(res.data.data);
                setError(null);
            } else {
                setError(res.error || "Failed to fetch data");
            }
            setLoading(false);
        });
    }, [juzNumber]);

    if (loading) return <div className="p-8 text-center">Loading...</div>;
    if (error) return <div className="p-8 text-center text-red-500">{error}</div>;
    if (!juzData) return null;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <JuzDetail juz={juzData} />
        </div>
    );
}
