---
to: libs/ui/<%= component %>/<%= componentName %>/src/<%= componentName %>.doc.mdx
---
import { Canvas, Meta } from "@storybook/addon-docs";
import { <%= componentName %> } from "./<%= componentName %>";
import * as <%= componentName %>Stories from "./<%= componentName %>.stories";
import { ArgTypes } from "@storybook/blocks";

<Meta of={<%= componentName %>Stories} />

# <%= h.capitalize(componentName) %>

A brief introduction to the <%= componentName %> component.

## Props

<ArgTypes of={<%= componentName %>} />

## Usage

### Default

<Canvas of={<%= componentName %>Stories.Default} />
