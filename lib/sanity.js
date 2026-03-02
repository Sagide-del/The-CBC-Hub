import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'oiauqspg'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = '2024-03-02'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
})

export async function getLessons() {
  return await client.fetch(`*[_type == "lesson"] | order(title asc)`)
}

export async function getDIYProjects() {
  return await client.fetch(`*[_type == "diyProject"] | order(title asc)`)
}
