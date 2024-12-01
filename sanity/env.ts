export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || process.env.SANITY_STUDIO_API_VERSION || "2024-11-21";


export const dataset = assertValue(
  process.env.SANITY_STUDIO_DATASET || process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET,
  'Missing environment variable: SANITY_STUDIO_DATASET or NEXT_PUBLIC_SANITY_STUDIO_DATASET'
)

export const projectId = assertValue(
  process.env.SANITY_STUDIO_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: SANITY_STUDIO_PROJECT_ID or NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = process.env.SANITY_WRITE_TOKEN;


function assertValue<T>(v: T | undefined, errorMessage: string): T {
if (v === undefined) {
  throw new Error(errorMessage)
 
}

return v
}
