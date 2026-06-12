import Link from 'next/link'
import Image from 'next/image'
import { Founder } from '@/types'

const primaryButtonStyle =
  'px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold text-sm hover:from-purple-700 hover:to-pink-600 transition duration-300 inline-block text-center'

export default function FounderCard({ founder }: { founder: Founder }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow">
      <div>
        <Link href={`/founders/${founder.slug}`} className="block aspect-[3/4] relative bg-gray-100">
          <Image
            src={founder.image}
            alt={founder.name}
            fill
            className="object-cover hover:opacity-90 transition-opacity"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </Link>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">
            <Link href={`/founders/${founder.slug}`} className="text-blue-600 hover:text-purple-600 transition-colors">
              {founder.name}
            </Link>
          </h3>
          <p className="text-gray-600 mb-4">{founder.shortBio}</p>
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {founder.industry}
            </span>
          </div>
        </div>
      </div>
      <div className="p-6 pt-0">
        <Link href={`/founders/${founder.slug}`} className={primaryButtonStyle}>
          Read More
        </Link>
      </div>
    </div>
  )
}
