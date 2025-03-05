import Image from 'next/image'
import Link from 'next/link'

export default function Founders() {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-purple-100 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent tracking-tight">
            Founders
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Bold, Curious, and Building Big Ideas
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Meet the dreamers and doers we celebrate in our series. They come from different places and moments in history, yet each had the courage to try something new. They often faced tough questions, doubters, and roadblocks. But they kept going.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              
              {/* Pleasant Rowland */}
              <div className="bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="relative h-80 bg-gradient-to-br from-purple-100 to-purple-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image 
                      src="/pleasant-rowland-portrait.jpg" 
                      alt="Pleasant Rowland" 
                      width={200}
                      height={200}
                      className="rounded-full object-cover h-40 w-40 border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Pleasant Rowland</h3>
                  <h4 className="text-lg font-medium text-gray-600 mb-4">American Girl</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>A former teacher who used reading programs and bright ideas to create a one-of-a-kind doll.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Mixed her love of education with an understanding of what kids need.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Proved that a bold vision can inspire millions.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Phil Knight */}
              <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="relative h-80 bg-gradient-to-br from-blue-100 to-blue-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image 
                      src="/phil-knight-portrait.jpg" 
                      alt="Phil Knight" 
                      width={200}
                      height={200}
                      className="rounded-full object-cover h-40 w-40 border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Phil Knight</h3>
                  <h4 className="text-lg font-medium text-gray-600 mb-4">Nike</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Started with a small shoe idea in college.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Grew it into a global sports brand that changed how people run.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Daniel Ek */}
              <div className="bg-white rounded-2xl shadow-lg border border-green-100 overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="relative h-80 bg-gradient-to-br from-green-100 to-green-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image 
                      src="/daniel-ek-portrait.jpg" 
                      alt="Daniel Ek" 
                      width={200}
                      height={200}
                      className="rounded-full object-cover h-40 w-40 border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">Daniel Ek</h3>
                  <h4 className="text-lg font-medium text-gray-600 mb-4">Spotify</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Liked music and coding from a young age.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Found new ways to deliver songs to fans around the world.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Jensen Huang */}
              <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="relative h-80 bg-gradient-to-br from-indigo-100 to-indigo-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image 
                      src="/jensen-huang-portrait.jpg" 
                      alt="Jensen Huang" 
                      width={200}
                      height={200}
                      className="rounded-full object-cover h-40 w-40 border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">Jensen Huang</h3>
                  <h4 className="text-lg font-medium text-gray-600 mb-4">NVIDIA</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>Fascinated by computers.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>Helped shape the tech we use for games, science, and more.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Nick Woodman */}
              <div className="bg-white rounded-2xl shadow-lg border border-red-100 overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="relative h-80 bg-gradient-to-br from-red-100 to-red-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image 
                      src="/nick-woodman-portrait.jpg" 
                      alt="Nick Woodman" 
                      width={200}
                      height={200}
                      className="rounded-full object-cover h-40 w-40 border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Nick Woodman</h3>
                  <h4 className="text-lg font-medium text-gray-600 mb-4">GoPro</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Surfer who wanted a better camera.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Built a new way to capture life's adventures.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Markus Persson */}
              <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="relative h-80 bg-gradient-to-br from-emerald-100 to-emerald-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image 
                      src="/markus-persson-portrait.jpg" 
                      alt="Markus Persson" 
                      width={200}
                      height={200}
                      className="rounded-full object-cover h-40 w-40 border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">Markus Persson</h3>
                  <h4 className="text-lg font-medium text-gray-600 mb-4">Minecraft</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span>Loved video games and programming.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span>Created blocky worlds that millions of players explore daily.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Sara Blakely */}
              <div className="bg-white rounded-2xl shadow-lg border border-pink-100 overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="relative h-80 bg-gradient-to-br from-pink-100 to-pink-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image 
                      src="/sara-blakely-portrait.jpg" 
                      alt="Sara Blakely" 
                      width={200}
                      height={200}
                      className="rounded-full object-cover h-40 w-40 border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">Sara Blakely</h3>
                  <h4 className="text-lg font-medium text-gray-600 mb-4">Spanx</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2">•</span>
                      <span>Turned everyday problems into practical products.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2">•</span>
                      <span>Showed that problem-solving and a dash of humor can go a long way.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Dharmesh Shah */}
              <div className="bg-white rounded-2xl shadow-lg border border-yellow-100 overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="relative h-80 bg-gradient-to-br from-yellow-100 to-yellow-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image 
                      src="/dharmesh-shah-portrait.jpg" 
                      alt="Dharmesh Shah" 
                      width={200}
                      height={200}
                      className="rounded-full object-cover h-40 w-40 border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-yellow-600 to-amber-500 bg-clip-text text-transparent">Dharmesh Shah</h3>
                  <h4 className="text-lg font-medium text-gray-600 mb-4">HubSpot</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Passionate about software and community building.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Created tools that many businesses use to grow.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Reed Hastings */}
              <div className="bg-white rounded-2xl shadow-lg border border-cyan-100 overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="relative h-80 bg-gradient-to-br from-cyan-100 to-cyan-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image 
                      src="/reed-hastings-portrait.jpg" 
                      alt="Reed Hastings" 
                      width={200}
                      height={200}
                      className="rounded-full object-cover h-40 w-40 border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent">Reed Hastings</h3>
                  <h4 className="text-lg font-medium text-gray-600 mb-4">Netflix</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-cyan-600 mr-2">•</span>
                      <span>Frustrated by late fees at the video store.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-600 mr-2">•</span>
                      <span>Sparked a new way to enjoy shows and movies at home.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Stay tuned for upcoming book releases on each of these founders. Their paths might look different, but they share a spirit of exploration and grit.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-purple-100 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10 border border-purple-100">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Ready to Explore Their Stories?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Check out our books or sign up for the starter pack to begin your own entrepreneurial journey.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/books" 
                  className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Browse Books
                </Link>
                <a 
                  href="/#starter-pack" 
                  className="bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-full font-bold transition-all"
                >
                  Get Starter Pack
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 