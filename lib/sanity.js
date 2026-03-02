const projectId = 'oiauqspg'
const dataset = 'production'
const apiVersion = '2024-03-02'

// Simple fetch wrapper for Sanity
export async function fetchSanity(query) {
  try {
    const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`
    console.log('Fetching:', url) // For debugging
    
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data.result || []
  } catch (error) {
    console.error('Error fetching from Sanity:', error)
    return []
  }
}

export async function getLessons() {
  return fetchSanity('*[_type == "lesson"] | order(title asc)')
}

export async function getDIYProjects() {
  return fetchSanity('*[_type == "diyProject"] | order(title asc)')
}
