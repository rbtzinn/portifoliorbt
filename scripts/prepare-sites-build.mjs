import { mkdir, writeFile } from 'node:fs/promises'

const worker = `export default {
  async fetch(request, env) {
    if (!env.ASSETS?.fetch) {
      return new Response('Static assets binding is unavailable.', { status: 500 })
    }

    const response = await env.ASSETS.fetch(request)
    if (response.status !== 404) return response

    const url = new URL(request.url)
    url.pathname = '/index.html'
    return env.ASSETS.fetch(new Request(url, request))
  }
}
`

await mkdir('dist/server', { recursive: true })
await writeFile('dist/server/index.js', worker, 'utf8')
