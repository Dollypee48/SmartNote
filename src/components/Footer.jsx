export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} TextTools. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="hover:text-indigo-300">Terms</a>
          <a href="#" className="hover:text-indigo-300">Privacy</a>
          <a href="#" className="hover:text-indigo-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}