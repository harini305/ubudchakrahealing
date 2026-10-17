/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Pre-generated derivatives (scripts/build-images.mjs) are served as-is, so the
  // Vercel Image Optimization quota is never used.
  images: { unoptimized: true },
};

export default nextConfig;
