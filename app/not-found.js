import { FileSearch, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="p-8 space-y-6 text-center">
        <div className="flex justify-center">
          <FileSearch className="w-16 h-16 text-gray-400" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-gray-900">404</h1>
          <h2 className="text-xl text-gray-600">Page not found</h2>
        </div>
        
        <p className="max-w-md text-gray-500">
          The page you are looking for does not exist.
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-4 py-2 font-medium text-white transition-colors rounded-md bg-dark hover:bg-extra-dark"
        >
          <Home className="w-4 h-4" />
          Go back home
        </Link>
      </div>
    </div>
  );
}