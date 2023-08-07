/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
