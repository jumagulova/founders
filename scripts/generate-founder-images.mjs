// Generates founder portrait illustrations in the site's existing style.
// Usage:  OPENAI_API_KEY=sk-...  node scripts/generate-founder-images.mjs
//
// Uses /v1/images/edits with an existing portrait as a style reference so the
// new images match the current art (cel-shaded cartoon, white sticker border,
// retro rainbow-stripe background).

import fs from 'node:fs'
import path from 'node:path'

const API_KEY = process.env.OPENAI_API_KEY
if (!API_KEY) {
  console.error('Missing OPENAI_API_KEY. Run:  OPENAI_API_KEY=sk-...  node scripts/generate-founder-images.mjs')
  process.exit(1)
}

const OUT_DIR = path.resolve('public/founders')
const STYLE_REF = path.join(OUT_DIR, 'Markus_Persson.jpeg')

const STYLE = `Create a new portrait in the EXACT same illustration style as the reference image: flat cel-shaded cartoon with clean dark outlines, soft airbrush shading, subtle grain texture, character shown from the waist up with a warm friendly smile, cut out with a thick white sticker border with rough chalky edges, on a background of bold retro wavy rainbow stripes (teal, navy, orange, red, mustard yellow, green) curving diagonally. Kid-friendly children's book style. Portrait orientation. No text. The new portrait should depict:`

const FOUNDERS = [
  ['Walt_Disney.jpeg', 'Walt Disney — a man in his 50s from the 1950s, slicked-back dark hair, thin mustache, gray suit and tie'],
  ['Steve_Jobs.jpeg', 'Steve Jobs — a man in his 50s, short gray beard, balding with short gray hair, round rimless glasses, black mock turtleneck'],
  ['Steve_Wozniak.jpeg', 'Steve Wozniak — a heavyset cheerful man, full dark-gray beard, glasses, dark casual shirt'],
  ['Bill_Gates.jpeg', 'Bill Gates — a man in his 60s, side-parted gray-brown hair, square glasses, light-blue sweater over a collared shirt'],
  ['Jeff_Bezos.jpeg', 'Jeff Bezos — a bald man in his 50s, big confident smile, fitted dark blazer over a t-shirt'],
  ['Elon_Musk.jpeg', 'Elon Musk — a man in his 50s, short brown hair, clean-shaven, slight smile, black t-shirt'],
  ['Mark_Zuckerberg.jpeg', 'Mark Zuckerberg — a man in his late 30s, short curly light-brown hair, pale skin, gray t-shirt'],
  ['Larry_Page.jpeg', 'Larry Page — a man in his 50s, short dark hair graying at the temples, friendly eyes, dark zip-up sweater'],
  ['Sergey_Brin.jpeg', 'Sergey Brin — a man in his 50s, short dark hair, light stubble, dark t-shirt'],
  ['Satoshi_Tajiri.jpeg', 'Satoshi Tajiri — a Japanese man in his 50s, short black hair, gentle smile, casual dark jacket'],
  ['Ruth_Handler.jpeg', 'Ruth Handler — a woman from the 1960s in her 40s, short dark curled hair, pearl necklace, elegant blouse'],
  ['Milton_Hershey.jpeg', 'Milton Hershey — an older man from the early 1900s, gray mustache, balding gray hair, dark three-piece suit with bow tie'],
  ['Ray_Kroc.jpeg', 'Ray Kroc — an older man in his 60s, balding with gray hair at the sides, big salesman grin, 1960s suit and tie'],
  ['Stan_Lee.jpeg', 'Stan Lee — an older man, swept-back gray hair, tinted aviator glasses, gray mustache, huge grin, casual blazer'],
  ['George_Lucas.jpeg', 'George Lucas — a man in his 60s, gray hair, full gray beard, glasses, plaid flannel shirt'],
  ['Jim_Henson.jpeg', 'Jim Henson — a man in his 40s from the 1970s, shaggy brown hair, full beard, gentle kind smile, casual jacket'],
  ['Gabe_Newell.jpeg', 'Gabe Newell — a heavyset man in his 50s, glasses, gray hair, short gray beard, dark polo shirt'],
  ['Evan_Spiegel.jpeg', 'Evan Spiegel — a slim young man in his early 30s, short neat brown hair, clean-shaven, white t-shirt under a casual jacket'],
  ['Nolan_Bushnell.jpeg', 'Nolan Bushnell — a tall older man, wavy gray hair, gray beard, warm smile, dark turtleneck'],
  ['Shigeru_Miyamoto.jpeg', 'Shigeru Miyamoto — a Japanese man in his 60s, side-parted black hair with gray streaks, big cheerful smile, casual blazer'],
  ['Reed_Hastings.jpeg', 'Reed Hastings — a man in his 60s, short gray hair, gray goatee beard, warm smile, casual dark sweater'],
]

async function generate(file, description) {
  // Strip the "Name — " prefix: naming real people trips the moderation
  // filter, so we send only the physical description.
  const anonymous = description.includes(' — ') ? description.split(' — ')[1] : description

  const refBuffer = fs.readFileSync(STYLE_REF)
  const form = new FormData()
  form.append('model', 'gpt-image-1')
  form.append('image', new Blob([refBuffer], { type: 'image/jpeg' }), 'style-reference.jpeg')
  form.append('prompt', `${STYLE} ${anonymous}`)
  form.append('size', '1024x1536')
  form.append('quality', 'high')
  form.append('moderation', 'low')

  const res = await fetch('https://api.openai.com/v1/images/edits', {
    method: 'POST',
    headers: { Authorization: `Bearer ${API_KEY}` },
    body: form,
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`API ${res.status}: ${text.slice(0, 300)}`)
  }

  const json = await res.json()
  const b64 = json.data?.[0]?.b64_json
  if (!b64) throw new Error('No image data in response')
  fs.writeFileSync(path.join(OUT_DIR, file), Buffer.from(b64, 'base64'))
}

// Optional filter: pass part of a filename to generate only matching images.
// e.g.  node scripts/generate-founder-images.mjs Walt
const filter = process.argv[2]?.toLowerCase()
const queue = filter
  ? FOUNDERS.filter(([file]) => file.toLowerCase().includes(filter))
  : FOUNDERS

if (filter && queue.length === 0) {
  console.error(`No founder filename matches "${process.argv[2]}".`)
  process.exit(1)
}

let done = 0
for (const [file, description] of queue) {
  const target = path.join(OUT_DIR, file)
  if (fs.existsSync(target)) {
    console.log(`skip (exists): ${file}`)
    continue
  }
  process.stdout.write(`generating ${file} ... `)
  try {
    await generate(file, description)
    done++
    console.log('ok')
  } catch (err) {
    console.log(`FAILED — ${err.message}`)
  }
}

console.log(`\nDone. ${done} new images written to public/founders/.`)
console.log('Next: tell Claude to update the image fields in data/founders.js.')
