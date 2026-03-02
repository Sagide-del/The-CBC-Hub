const projectId = 'oiauqspg'
const dataset = 'production'
const apiVersion = '2024-03-02'

// Simple fetch wrapper for Sanity
export async function fetchSanity(query) {
  const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`
  const response = await fetch(url)
  const data = await response.json()
  return data.result
}

export async function getLessons() {
  return fetchSanity(`*[_type == "lesson"] | order(title asc)`)
}

export async function getDIYProjects() {
  return fetchSanity(`*[_type == "diyProject"] | order(title asc)`)
}
