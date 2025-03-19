# SVG

All the svg files will be optimized using SVGO, converted into react components
using SVGR and will be saved inside components folder. The original svgs will
remain unaltered inside the assets folder.

All the components can be used through named import. Tree shaking feature is
enabled in the package.

## Usage

- Add all your svgs inside assets folder.
- Run the command `transform` to get the corresponding react components.
- Alternatively, you can simply run the command `build` to transform and build
  the components.
