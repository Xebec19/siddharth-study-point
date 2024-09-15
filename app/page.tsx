"use client";

import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-sky-100 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-sky-800">
            Siddharth Study Point
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#home" className="text-sky-800 hover:text-sky-600">
              Home
            </Link>
            <Link href="#courses" className="text-sky-800 hover:text-sky-600">
              Courses
            </Link>
            <Link
              href="#testimonials"
              className="text-sky-800 hover:text-sky-600"
            >
              Testimonials
            </Link>
            <Link href="#results" className="text-sky-800 hover:text-sky-600">
              Results
            </Link>
            <Link href="#contact" className="text-sky-800 hover:text-sky-600">
              Contact
            </Link>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-sky-50 py-2">
            <nav className="flex flex-col items-center space-y-2">
              <Link href="#home" className="text-sky-800 hover:text-sky-600">
                Home
              </Link>
              <Link href="#courses" className="text-sky-800 hover:text-sky-600">
                Courses
              </Link>
              <Link
                href="#testimonials"
                className="text-sky-800 hover:text-sky-600"
              >
                Testimonials
              </Link>
              <Link href="#results" className="text-sky-800 hover:text-sky-600">
                Results
              </Link>
              <Link href="#contact" className="text-sky-800 hover:text-sky-600">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-sky-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-800 mb-4">
            Welcome to Siddharth Study Point
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Empowering students for academic excellence since 2005
          </p>
          <Link
            href="#contact"
            className="bg-sky-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-sky-700 transition duration-300"
          >
            Enroll Now
          </Link>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-800 mb-8 text-center">
            Our Courses
          </h2>
          <div className="space-y-4">
            <div className="border border-sky-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-4 py-3 bg-sky-100 text-left text-lg font-semibold text-sky-800 flex justify-between items-center"
                onClick={() => toggleAccordion("grades6-10")}
              >
                Grades 6-10: All Subjects
                {openAccordion === "grades6-10" ? (
                  <ChevronUp />
                ) : (
                  <ChevronDown />
                )}
              </button>
              {openAccordion === "grades6-10" && (
                <div className="px-4 py-3 bg-white">
                  <ul className="list-disc list-inside">
                    <li>Mathematics</li>
                    <li>Science</li>
                    <li>English</li>
                    <li>Social Studies</li>
                    <li>Languages</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="border border-sky-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-4 py-3 bg-sky-100 text-left text-lg font-semibold text-sky-800 flex justify-between items-center"
                onClick={() => toggleAccordion("grades11-12")}
              >
                Grades 11-12: Commerce and Arts
                {openAccordion === "grades11-12" ? (
                  <ChevronUp />
                ) : (
                  <ChevronDown />
                )}
              </button>
              {openAccordion === "grades11-12" && (
                <div className="px-4 py-3 bg-white">
                  <ul className="list-disc list-inside">
                    <li>Accountancy</li>
                    <li>Business Studies</li>
                    <li>Economics</li>
                    <li>English</li>
                    <li>History</li>
                    <li>Political Science</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-sky-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-800 mb-8 text-center">
            Student Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                &quot;Siddharth Study Point helped me achieve my dream score in
                the board exams. The teachers are incredibly supportive and
                knowledgeable.&quot;
              </p>
              <p className="font-semibold text-sky-800">
                - Priya S., Grade 12 Commerce
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                &quot;I&apos;ve been studying here since 8th grade, and it has
                been an amazing journey. The study materials and practice tests
                are top-notch.&quot;
              </p>
              <p className="font-semibold text-sky-800">- Rahul M., Grade 10</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-800 mb-8 text-center">
            Our Results
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-sky-100 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-sky-800 mb-2">2023</h3>
              <p className="text-xl text-gray-600">
                95% students scored above 90%
              </p>
            </div>
            <div className="bg-sky-100 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-sky-800 mb-2">2022</h3>
              <p className="text-xl text-gray-600">
                92% students scored above 90%
              </p>
            </div>
            <div className="bg-sky-100 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-sky-800 mb-2">2021</h3>
              <p className="text-xl text-gray-600">
                90% students scored above 90%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="bg-sky-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-800 mb-8 text-center">
            Contact Us
          </h2>
          <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-sky-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-sky-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sky-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Siddharth Study Point. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
