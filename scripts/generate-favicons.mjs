// Generate favicon.png (32x32) and favicon.ico from public/favicon.svg
// Usage: npm run favicons
import { readFile, writeFile, unlink } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import sharp from 'sharp'
import pngToIco from 'png-to-ico'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, '..')
const publicDir = path.join(root, 'public')
const svgPath = path.join(publicDir, 'favicon.svg')

async function ensurePng(size) {
  const out = path.join(publicDir, `favicon-${size}.png`)
  const svg = await readFile(svgPath)
  await sharp(svg)
    .resize(size, size, { fit: 'contain', withoutEnlargement: true, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(out)
  return out
}

async function main() {
  try {
    // 1) Primary PNG at 32x32
    const svg = await readFile(svgPath)
    const png32Path = path.join(publicDir, 'favicon.png')
    await sharp(svg)
      .resize(32, 32, { fit: 'contain', withoutEnlargement: true, background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toFile(png32Path)

    // 2) ICO from multiple PNG sizes for better fidelity
    const sizes = [16, 32, 48]
    const tmpPngPaths = []
    for (const s of sizes) {
      tmpPngPaths.push(await ensurePng(s))
    }
    const pngBuffers = await Promise.all(tmpPngPaths.map(p => readFile(p)))
    const icoBuf = await pngToIco(pngBuffers)
    await writeFile(path.join(publicDir, 'favicon.ico'), icoBuf)

    // Cleanup temp PNGs
    await Promise.all(tmpPngPaths.map(p => unlink(p).catch(() => {})))

    console.log('Favicons generated: public/favicon.png, public/favicon.ico')
  } catch (err) {
    console.error('Failed to generate favicons:', err)
    process.exit(1)
  }
}

main()
