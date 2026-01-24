/** @type {import('next').NextConfig} */
const nextConfig = {
  // No reactCompiler here
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
};

export default nextConfig;
