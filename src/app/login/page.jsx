"use client"; // client component because of useState, cookies
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"; // npm install js-cookie

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    const hardcodedEmail = "demo@example.com";
    const hardcodedPassword = "123456";

    if (email === hardcodedEmail && password === hardcodedPassword) {
      // Save login state in cookies
      Cookies.set("auth", "true", { expires: 1 }); // expires in 1 day
      router.push("/"); // redirect to items page
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-50 via-white to-pink-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-sm
               border border-gray-200 flex flex-col gap-5"
      >
        <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
          Welcome Back
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Login to access your account
        </p>

        {error && (
          <p className="text-red-500 text-center font-medium bg-red-100 p-2 rounded">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-4 rounded-lg font-semibold 
                 hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Login
        </button>

        {/* Demo credentials info */}
        <p className="text-sm text-gray-500 text-center mt-3 bg-gray-100 p-2 rounded">
          Demo Email:{" "}
          <span className="font-medium text-indigo-600">demo@example.com</span>{" "}
          | Password:{" "}
          <span className="font-medium text-indigo-600">123456</span>
        </p>

        <p className="text-sm text-gray-500 text-center mt-4">
          Don't have an account?{" "}
          <a className="text-indigo-600 font-medium hover:underline">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
