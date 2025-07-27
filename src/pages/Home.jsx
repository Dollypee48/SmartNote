import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="text-center bg-black py-16 px-6 max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
      >
        AI-Powered Text Summarizer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10"
      >
        Instantly generate clear, concise summaries. Designed for students, researchers, and professionals dealing with lengthy documents.
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Link
          to="/summarize"
          className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-colors"
        >
          🚀 Try Summarizer Now
        </Link>
      </motion.div>

      <motion.div
        className="mt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <FeatureCard
          title="Fast Processing"
          icon="⚡"
          description="Get summaries in seconds with our optimized algorithms"
        />
        <FeatureCard
          title="Accurate Results"
          icon="🎯"
          description="Key points extracted without losing meaning"
        />
        <FeatureCard
          title="Easy to Use"
          icon="✨"
          description="Simple interface anyone can master quickly"
        />
      </motion.div>
    </div>
  );
}

function FeatureCard({ title, icon, description }) {
  return (
    <motion.div
      className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
      whileHover={{ y: -5 }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-zinc-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
}
