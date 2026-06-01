import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thanks for Subscribing! | Founders for Kids',
  description: 'You are now subscribed to the Founders for Kids newsletter.',
  robots: { index: false, follow: false },
}

export default function ThankYouNewsletter() {
  return (
    <div className="bg-white font-sans">
      <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-indigo-50 to-white py-20 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-10 md:p-14 border border-purple-100 text-center">

            <div className="mb-8 flex justify-center">
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              You&apos;re Subscribed!
            </h1>

            <p className="text-xl text-gray-700 mb-4 font-medium">
              Welcome to the Founders for Kids community.
            </p>

            <p className="text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
              You&apos;ll be the first to hear about new books, founder stories, and exclusive content. Check your inbox to confirm your subscription.
            </p>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 mb-10 border border-purple-100">
              <p className="text-sm font-semibold text-purple-700 uppercase tracking-wide mb-2">While you&apos;re here</p>
              <p className="text-gray-600">
                Discover the stories behind the world&apos;s most iconic brands — written for kids ages 8–12.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/books"
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Our Books
              </Link>
              <Link
                href="/founders"
                className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-full text-base font-bold transition-all"
              >
                Meet the Founders
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
