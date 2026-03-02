export default async function handler(req, res) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  
  try {
    const projectId = 'oiauqspg'
    const dataset = 'production'
    const query = '*[_type == "diyProject"]'
    
    const url = `https://${projectId}.api.sanity.io/v2024-03-02/data/query/${dataset}?query=${encodeURIComponent(query)}`
    
    console.log('Fetching from Sanity:', url)
    
    const response = await fetch(url)
    const data = await response.json()
    
    res.status(200).json({
      success: true,
      data: data,
      url: url
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      stack: error.stack
    })
  }
}
