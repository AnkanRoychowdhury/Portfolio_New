// import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/content';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          Latest Articles
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {format(new Date(post.date), 'MMM dd, yyyy')}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    {post.readTime}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm text-blue-400 bg-blue-500/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={`/blog/${post.id}`} className="text-blue-400 hover:underline mt-4 block">
                  Read More <ArrowRight size={16} className="inline-block" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}