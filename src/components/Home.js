import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-10 text-gray-800">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-bold mb-4">LearnYourWay</h1>
        <p className="text-lg max-w-xl mx-auto">
          A global platform for AI-guided and human-powered education. Pick your path and start learning in your own way.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center">
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">AI Tutor</h2>
            <p className="mb-4">Explore our AI-powered tutor and choose your teaching style: Socratic, Empathic, or Exploratory.</p>
            <Link to="/ai-tutor" className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">Go to AI Tutor</Link>
          </div>
          <img src="/hero 1.png" alt="Welcome Image" className="w-24 h-24 ml-4" />
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center">
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">Human Tutor</h2>
            <p className="mb-4">Request personalized help from real teachers volunteering their time for global learners.</p>
            <Link to="/human-tutors" className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700">Find a Tutor</Link>
          </div>
          <img src="/hero 2.png" alt="Welcome Image" className="w-24 h-24 ml-4" />
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center">
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">Teach & Contribute</h2>
            <p className="mb-4">Are you an educator? Dedicate 10% of your time to mentor young minds worldwide.</p>
            <Link to="/contribute" className="px-4 py-2 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600">Join as Teacher</Link>
          </div>
          <img src="/hero 3.png" alt="Welcome Image" className="w-24 h-24 ml-4" />
        </div>
      </main>
    </div>
  );
}
