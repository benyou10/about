import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          {/* Add navigation links here if needed */}
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-gray-700">
          This is a simple portfolio webpage created with React and Tailwind CSS.
        </p>

        {/* Add your portfolio content here */}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} My Portfolio</p>
        </div>
      </footer>
    </div>
  );
}

export default About;
