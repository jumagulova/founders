export default function NewsletterSignup() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-xl shadow-md">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Be the First to Know</h3>
        <p className="text-gray-600">
          Join our newsletter to get updates on new releases, special offers, and exclusive content.
        </p>
      </div>

      <form
        method="post"
        action="https://systeme.io/embedded/41397545/subscription"
        className="max-w-md mx-auto"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            name="first_name"
            placeholder="Your name (optional)"
            className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
          />
          <input
            type="text"
            name="email"
            required
            placeholder="Your email address"
            className="flex-grow px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
          >
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  )
}
