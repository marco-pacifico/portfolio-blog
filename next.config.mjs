// Using next.config.mjs beause remarkFrontmatter and remarkMdxFrontmatter packages are ESM only
// https://www.npmjs.com/package/remark-frontmatter  https://www.npmjs.com/package/remark-mdx-frontmatter
import mdx from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkPrism from "remark-prism";

// Use '@next/mdx' package and configure to support top level .mdx pages.
// The options object key is for passing in plugins.
const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkFrontmatter,
      [remarkMdxFrontmatter, { name: "meta" }],
      // [remarkPrism, {}],
    ],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Highluts potential problems in an application
  reactStrictMode: true,

  // Configure pageExtensions to include md and mdx
  pageExtensions: ["js", "mdx"],

  // Required for SSR of styled-components css-in-js
  compiler: {
    styledComponents: true,
  },
  // Disable the build loading indicator (only present in development mode)
  devIndicators: {
    buildActivity: false,
  },
};

// Merge MDX config with Next.js config
// Cannot use module.exports because remarkFrontmatter and remarkMdxFrontmatter packages are ESM only
export default withMDX({
  ...nextConfig,
});
