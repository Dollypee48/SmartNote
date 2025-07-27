import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="text-center py-12 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6">Text Summarizer</h1>
      <p className="text-xl text-gray-600 mb-8">
        Quickly summarize any text with our AI-powered tool. Perfect for students, 
        researchers, and professionals who need to process large amounts of text.
      </p>
      <Link 
        to="/summarize" 
        className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors"
      >
        Try Summarizer Now
      </Link>
      
      <div className="mt-16 grid md:grid-cols-3 gap-8">
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
          description="Simple interface that anyone can master quickly"
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, icon, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}