import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
import React from "react";


const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 flex-grow">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white"> Welcome to our Application!</h1>
          <p className="text-xl mt-4 text-white">We're glad you're here. Enjoy and explore your experience.</p>
          <Button title="Get Started" styles="mt-6 px-6 bg-white text-blue-500 rounded-full font-semibold hover-gray-200 transition" />
        </div>
      </main>
    </div>
  )
}

export default Home;