"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Protected = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = Cookies.get("auth");

    if (!auth) {
      router.push("/login"); 
    } else {
      setLoading(false); 
    }
  }, [router]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="loader mb-4"></div>
          <p className="text-gray-600 font-medium">
            Checking authentication...
          </p>
        </div>
        {/* Simple CSS loader */}
        <style jsx>{`
          .loader {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #6366f1; /* indigo-500 */
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 0 auto;
          }
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Items List</h1>
      <p className="text-gray-600 text-lg">
        Welcome! This is a protected page. Only authenticated users can see this
        content.
      </p>
    </div>
  );
};

export default Protected;
