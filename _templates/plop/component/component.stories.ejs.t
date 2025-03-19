---
to: libs/ui/<%= component %>/<%= componentName %>/src/<%= componentName %>.stories.tsx
---
// import { ComponentProps } from "react";
import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import { <%= componentName %> } from "./<%= componentName %>";

// type <%= componentName %>Props = ComponentProps<typeof <%= componentName %>>;

const meta: Meta<typeof <%= componentName %>> = {
  title: "Components/<%= componentName %>",
  component: <%= componentName %>,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "<%= componentName %>",
  },
};
