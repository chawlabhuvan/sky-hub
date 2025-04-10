---
to: libs/ui/<%= component %>/<%= componentName %>/src/<%= componentName %>.tsx
---
import { ReactNode } from "react";

export function <%= componentName %>({ children }: { children: ReactNode }) {
  return (
    <div>{children}</div>
  );
}
