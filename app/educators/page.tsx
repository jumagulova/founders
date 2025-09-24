import Image from 'next/image'
import Link from 'next/link'
import books from '@/data/books'
import EducatorsOptIn from '@/components/EducatorsOptIn'

export const metadata = {
  title: 'For Educators',
  description: 'Free, classroom-ready activity packs inspired by real founder stories. Download lesson plans, worksheets, and post-reading guides for your class.'
}

export default function EducatorsPage() {
  const availableBooks = books.filter(b => b.status === 'available')

  return (
    <div className="bg-white">
      {/* Header Section styled like Books page */}
      <section className="bg-gradient-to-br from-indigo-100 to-white py-14">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent tracking-tight">
            For Educators
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Classroom‑ready activity packs.</p>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-6 text-gray-700">
            <p className="text-base">
              Get free, classroom-ready lesson plans designed to teach your students essential skills like creativity, collaboration, and resilience. Our downloadable activity packs are inspired by the true stories of the world's most interesting entrepreneurs and come with everything you need to lead a memorable lesson.
            </p>
            <p className="text-base">
              Perfect for your language arts, social studies, or entrepreneurship classes.
            </p>

            {/* Inline Opt-in with the intro copy */}
            <div id="educators-optin" className="bg-white rounded-2xl shadow-xl p-6 border border-purple-100">
              <h2 className="text-lg md:text-xl font-black mb-2 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Get Your Free Activity Packs</h2>
              <p className="text-gray-600 mb-4 text-sm">Enter your email to get instant access to all current and future activity packs.</p>
              <EducatorsOptIn />
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900">What's Inside Each Pack</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Two No-Prep, 60-Minute Lesson Plans</h3>
                <p>Each lesson comes with a step-by-step teacher guide and hands-on group challenges.</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Collaborative Group Worksheets</h3>
                <p>Printable worksheets guide students through each activity, structure their thinking, and get them working together.</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Post-Reading Discussion & Writing Guides</h3>
                <p>For classes that have read the book, use reflection questions and writing prompts to extend learning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Inspired by stories of entrepreneurs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableBooks.map(book => (
              <div key={book.slug} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="relative h-64 bg-gray-50">
                  {book.image && (
                    <Image src={book.image} alt={book.title} fill className="object-contain p-6" />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-blue-600 mb-2">{book.title}</h3>
                  <Link href={book.amazonLink || '#'} target="_blank" className="text-sm font-semibold text-purple-600 hover:text-pink-500">View on Amazon →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
