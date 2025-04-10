---
to: packages/<%= packageName %>/package.json
---
{
  "name": "@sky-hub/<%= packageName.toLowerCase() %>",
  "version": "0.1.0",
  "description": "<%= packageName %> package",
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
  "dependencies": {},
  "devDependencies": {}
}
