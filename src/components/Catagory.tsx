import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface Category {
  name: string;
  icon: JSX.Element;
  bgColor: string;
  articles: number;
  description: string;
}

const categories: Category[] = [
  {
    name: "Backend Architecture",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    bgColor: "bg-emerald-500",
    articles: 24,
    description: "System design, scalability, and architectural patterns",
  },
  {
    name: "Database Management",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2 1.5 3 3.5 3s3.5-1 3.5-3V7c0-2-1.5-3-3.5-3S4 5 4 7zm12 0v10c0 2 1.5 3 3.5 3s3.5-1 3.5-3V7c0-2-1.5-3-3.5-3S16 5 16 7z" />
      </svg>
    ),
    bgColor: "bg-blue-500",
    articles: 18,
    description: "SQL, NoSQL, optimization, and best practices",
  },
  {
    name: "API Development",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    bgColor: "bg-purple-500",
    articles: 15,
    description: "RESTful APIs, GraphQL, and authentication",
  },
  {
    name: "Security",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    bgColor: "bg-red-500",
    articles: 12,
    description: "Authentication, authorization, and best practices",
  },
  {
    name: "Performance",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    bgColor: "bg-yellow-500",
    articles: 9,
    description: "Optimization, caching, and monitoring",
  },
  {
    name: "DevOps",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    bgColor: "bg-indigo-500",
    articles: 11,
    description: "CI/CD, containerization, and deployment",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-neutral-900 dark:text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore Categories
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card
                className="group bg-neutral-100 dark:bg-neutral-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer"
                sx={{
                  backgroundColor: "#1a1a1a", // Set background color of the card
                  color: "white", // White text color
                  display: "flex",
                  flexDirection: "column", // Ensuring content is vertically stacked
                  justifyContent: "space-between", // Spacing between elements
                  minHeight: "250px", // Fixed height for consistent box size
                  padding: "24px", // Padding to ensure all content fits nicely
                  borderRadius: "8px", // Rounded corners
                }}
                elevation={3}
              >
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${category.bgColor}`}>
                      {category.icon}
                    </div>
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      {category.articles} articles
                    </span>
                  </div>
                  <Typography
                    variant="h5"
                    className="font-semibold mb-2 text-neutral-900 dark:text-white"
                  >
                    {category.name}
                  </Typography>
                  <Typography className="text-neutral-600 dark:text-neutral-400">
                    {category.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
