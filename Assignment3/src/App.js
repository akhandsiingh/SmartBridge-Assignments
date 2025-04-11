import React from "react";
import TextUpdater from "./components/TextUpdater";
import Form from "./components/Form";
import UserCard from "./components/UserCard";
import Button from "./components/Button";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-900 mb-4">
            React Components Demo
          </h1>
          <p className="text-indigo-600">
            A collection of beautiful and functional React components
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* TextUpdater Component */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-indigo-100 transform transition-all hover:scale-[1.02]">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-3">
                1
              </span>
              Text Updater
            </h2>
            <TextUpdater />
          </div>

          {/* Form Component */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-indigo-100 transform transition-all hover:scale-[1.02]">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-3">
                2
              </span>
              Form
            </h2>
            <Form />
          </div>

          {/* UserCard Component */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-indigo-100 transform transition-all hover:scale-[1.02]">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-3">
                3
              </span>
              User Card
            </h2>
            <UserCard name="John Doe" email="john@example.com" />
          </div>

          {/* Button Component */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-indigo-100 transform transition-all hover:scale-[1.02]">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-3">
                4
              </span>
              Button
            </h2>
            <div className="flex justify-center">
              <Button>Click Me</Button>
            </div>
          </div>

          {/* LoginForm Component */}
          <div className="md:col-span-2 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-indigo-100 transform transition-all hover:scale-[1.02]">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-3">
                5
              </span>
              Login Form
            </h2>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
