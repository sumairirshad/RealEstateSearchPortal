"use client";
import { useEffect, useState } from "react";
import PanelLayout from "../components/PanelLayout";
import { motion } from "framer-motion";
import { useUser } from "../context/userContext";
import { FetchDashboardData } from "../Services/BaseAPI";

export default function PanelHome() {
  const [showContent, setShowContent] = useState(false);
  const { userId } = useUser();
  const [propertyCount, setPropertyCount] = useState<number>(0); 

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!userId) return;

    const load = async () => {
      try {
        const res = await FetchDashboardData<{
          result: { propertyCount: number };
          isSuccess: boolean;
          messages: string[];
          errorMessages?: string[];
        }>({ userId });

        if (res.isSuccess) {
          setPropertyCount(res.result.propertyCount);  
        } else {
          console.error(res.errorMessages?.[0] || "Failed to fetch.");
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    };

    load();
  }, [userId]);

  return (
    <PanelLayout>
      {showContent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-4"
        >
          <h1 className="text-3xl font-bold text-gray-800">🏠 Dashboard</h1>
          <p className="text-gray-600 text-lg">
            Welcome to your admin panel. You can manage properties, users, and more here.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-blue-600">{propertyCount}</h2> 
              <p className="text-gray-500">Total Properties</p>
            </div>
          </div>
        </motion.div>
      )}
    </PanelLayout>
  );
}
