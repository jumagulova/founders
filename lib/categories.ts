import foundersData from '@/data/founders'
import { Founder } from '@/types'

const founders = foundersData as Founder[]

export interface Category {
  slug: string
  label: string
  founders: Founder[]
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// The `industry` field is compound ("Toys & Education", "Design & Technology").
// Split on "&" so a founder can belong to multiple clean categories.
function categoryPartsOf(founder: Founder): { slug: string; label: string }[] {
  return founder.industry
    .split('&')
    .map((part) => part.trim())
    .filter(Boolean)
    .map((label) => ({ slug: slugify(label), label }))
}

export function getAllCategories(): Category[] {
  const map = new Map<string, { label: string; founders: Founder[] }>()

  for (const founder of founders) {
    for (const part of categoryPartsOf(founder)) {
      if (!map.has(part.slug)) {
        map.set(part.slug, { label: part.label, founders: [] })
      }
      map.get(part.slug)!.founders.push(founder)
    }
  }

  return Array.from(map.entries())
    .map(([slug, value]) => ({ slug, label: value.label, founders: value.founders }))
    .sort((a, b) => a.label.localeCompare(b.label))
}

export function getCategory(slug: string): Category | undefined {
  return getAllCategories().find((category) => category.slug === slug)
}
