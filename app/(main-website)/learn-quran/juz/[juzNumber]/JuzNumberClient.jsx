"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { axiosRequest } from "@/lib/axiosReq";
import JuzDetail from "@/components/JuzDetail";
import { Skeleton } from "@/components/ui/skeleton";

export default function JuzNumberClient() {
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

    if (loading)
        return (
            <div className="max-w-4xl mx-auto p-4">
                <div className="text-center mb-10">
                    <Skeleton className="h-10 w-1/2 mx-auto mb-4" />
                    <Skeleton className="h-6 w-1/3 mx-auto mb-2" />
                    <Skeleton className="h-4 w-1/4 mx-auto" />
                </div>
                <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                        <Skeleton key={i} className="h-20 w-full rounded" />
                    ))}
                </div>
            </div>
        );
    if (error) return <div className="p-8 text-center text-red-500">{error}</div>;
    if (!juzData) return null;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <JuzDetail juz={juzData} />
        </div>
    );
}
