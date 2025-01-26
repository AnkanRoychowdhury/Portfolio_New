import React, { useState } from "react";

type Article = {
  id: number;
  title: string;
  category: string;
  timeAgo: string;
  author: {
    name: string;
    role: string;
  };
  readingTime: string;
  content: string;
  image: string;
};

const articles: Article[] = [
  {
    id: 1,
    title: "Building Scalable Node.js Applications",
    category: "New",
    timeAgo: "3 days ago",
    author: { name: "Alex Thompson", role: "Senior Backend Dev" },
    readingTime: "12 min read",
    content: "Learn advanced techniques for building highly scalable applications using Node.js and microservices architecture.",
    image: "", 
  },
  {
    id: 2,
    title: "Redis Caching Strategies",
    category: "Tutorial",
    timeAgo: "5 days ago",
    author: { name: "Sarah Chen", role: "Database Specialist" },
    readingTime: "8 min read",
    content: "Implementing effective caching strategies using Redis to improve application performance.",
    image: "https://via.placeholder.com/50", 
  },
  {
    id: 3,
    title: "OAuth 2.0 Implementation Guide",
    category: "Security",
    timeAgo: "1 week ago",
    author: { name: "Mark Wilson", role: "Security Engineer" },
    readingTime: "15 min read",
    content: "A comprehensive guide to implementing OAuth 2.0 authentication in your applications.",
    image: "https://via.placeholder.com/50", 
  },
];

const LatestArticles: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevArticle = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? articles.length - 1 : prevIndex - 1));
  };

  const nextArticle = () => {
    setCurrentIndex((prevIndex) => (prevIndex === articles.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="latestArticles" className="py-20 bg-white dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white animate__animated animate__fadeInUp">
            Latest Articles
          </h2>
          <div className="flex space-x-2">
            <button
              id="prevArticle"
              className="p-2 rounded-lg bg-white dark:bg-neutral-900 shadow-md hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-200"
              onClick={prevArticle}
            >
              <svg className="w-6 h-6 text-neutral-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              id="nextArticle"
              className="p-2 rounded-lg bg-white dark:bg-neutral-900 shadow-md hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-200"
              onClick={nextArticle}
            >
              <svg className="w-6 h-6 text-neutral-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="articles-slider overflow-hidden">
          <div
            className="articles-track flex transition-transform duration-500 space-x-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`, // Calculate for 3 items per row
            }}
          >
            {articles.map((article) => (
              <article
                key={article.id}
                className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeIn"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <span
                      className={`px-3 py-1 text-sm rounded-full ${article.category === "New" ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-300" : article.category === "Tutorial" ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300" : "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300"}`}
                    >
                      {article.category}
                    </span>
                    <span className="text-sm text-neutral-500">{article.timeAgo}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                    <a href="#" className="hover:text-emerald-500 transition-colors duration-200">
                      {article.title}
                    </a>
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">{article.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700">
                        <img src={article.image} alt="Author" className="w-full h-full object-cover rounded-full" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-900 dark:text-white">{article.author.name}</p>
                        <p className="text-xs text-neutral-500">{article.author.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-neutral-500">
                      <span>{article.readingTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
