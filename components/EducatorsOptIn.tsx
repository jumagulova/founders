export default function EducatorsOptIn() {
  return (
    <form
      method="post"
      action="https://systeme.io/embedded/41397478/subscription"
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          name="first_name"
          placeholder="Your name (optional)"
          className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm"
        />
        <input
          type="text"
          name="email"
          required
          placeholder="Your email"
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm"
        />
        <button
          type="submit"
          className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold hover:from-purple-700 hover:to-pink-600"
        >
          SEND ME THE LESSON PLANS
        </button>
      </div>
    </form>
  )
}
