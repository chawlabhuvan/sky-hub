---
to: libs/ui/<%= component %>/<%= componentName %>/package.json
---
{
  "name": "@sky-hub/<%= componentName.toLowerCase() %>",
  "version": "0.1.0",
  "description": "<%= componentName %> component",
  "license": "MIT",
  "main": "./dist/index.cjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": {
        "types": "./dist/index.d.ts",
        "default": "./dist/index.js"
      },
      "require": {
        "types": "./dist/index.d.cts",
        "default": "./dist/index.cjs"
      }
    }
  },
  "type": "module",
  "files": [
    "dist",
    "README.md",
    "package.json"
  ],
  "publishConfig": {
    "access": "public"
  },
  "scripts": {
    "build": "tsup",
    "clean": "rimraf dist"
  },
  "dependencies": {
    "@sky-hub/tailwind": "workspace:*",
    "class-variance-authority": "0.7.0"
  },
  "devDependencies": {},
  "peerDependencies": {
    "react": "^18.x",
    "react-dom": "^18.x"
  }
}
