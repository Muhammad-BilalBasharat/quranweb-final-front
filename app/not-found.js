import { FileSearch, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6 p-8">
        <div className="flex justify-center">
          <FileSearch className="w-16 h-16 text-gray-400" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-gray-900">404</h1>
          <h2 className="text-xl text-gray-600">Page not found</h2>
        </div>
        
        <p className="text-gray-500 max-w-md">
          The page you are looking for does not exist.
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          <Home className="w-4 h-4" />
          Go back home
        </Link>
      </div>
    </div>
  );
}