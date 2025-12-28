const fs = require('fs');
const path = require('path');

// Create a minimal routes-manifest.json for Vercel
// This is required for Next.js static exports on Vercel
const routesManifest = {
  version: 3,
  pages404: true,
  basePath: '',
  redirects: [],
  rewrites: [],
  headers: [],
  staticRoutes: [
    {
      page: '/',
      regex: '^/$',
    },
  ],
  dynamicRoutes: [],
  dataRoutes: [],
  rsc: {
    header: 'RSC',
    varyHeader: 'RSC, Next-Router-State-Tree, Next-Router-Prefetch',
    prefetchHeader: 'Next-Router-Prefetch',
  },
};

const outDir = path.join(process.cwd(), 'out');
const manifestPath = path.join(outDir, 'routes-manifest.json');

// Ensure out directory exists
if (!fs.existsSync(outDir)) {
  console.error('Error: out directory does not exist. Run build first.');
  process.exit(1);
}

// Write routes-manifest.json
fs.writeFileSync(manifestPath, JSON.stringify(routesManifest, null, 2));
console.log('✓ Created routes-manifest.json for Vercel');

