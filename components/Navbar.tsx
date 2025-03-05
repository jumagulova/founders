import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="bg-white py-4 px-6 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Founders for Kids
          </span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-purple-600 text-sm font-medium transition-colors">
            HOME
          </Link>
          <Link href="/books" className="text-gray-700 hover:text-purple-600 text-sm font-medium transition-colors">
            BOOKS
          </Link>
          <Link href="/founders" className="text-gray-700 hover:text-purple-600 text-sm font-medium transition-colors">
            FOUNDERS
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-purple-600 text-sm font-medium transition-colors">
            ABOUT
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <a 
            href="/#starter-pack"
            className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            GET STARTER PACK
          </a>
        </div>
      </div>
    </header>
  )
} 