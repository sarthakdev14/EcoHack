import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Share2 } from 'lucide-react';

export const Home = () => {
  return (
    <div className="space-y-16">
      <section className="text-center py-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl">
        <h1 className="text-5xl font-bold text-white mb-6">
          Innovating for Sustainable Agriculture
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Join us in revolutionizing food systems and creating eco-friendly solutions for a better tomorrow
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/food-rescue"
            className="btn-primary"
          >
            Join Food Rescue
          </Link>
          <Link
            to="/calculator"
            className="btn-secondary"
          >
            Calculate Impact
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Food Rescue Initiative
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Connect restaurants with excess food to nearby shelters, reducing waste and helping those in need.
          </p>
          <Link to="/food-rescue" className="inline-flex items-center text-green-600 hover:text-green-700">
            Learn more <Leaf className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800"
          alt="Sustainable Agriculture"
          className="rounded-lg shadow-lg"
        />
      </section>

      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Share the Movement
        </h2>
        <div className="flex justify-center space-x-4">
          <button className="social-btn">
            <Share2 className="w-5 h-5 mr-2" />
            Twitter
          </button>
          <button className="social-btn">
            <Share2 className="w-5 h-5 mr-2" />
            Facebook
          </button>
          <button className="social-btn">
            <Share2 className="w-5 h-5 mr-2" />
            LinkedIn
          </button>
        </div>
      </section>
    </div>
  );
};