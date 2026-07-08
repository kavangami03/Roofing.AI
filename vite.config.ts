// Vite configuration for SuperMIA — AI Service Desk for Roofing Companies
// This config uses @lovable.dev/vite-tanstack-config which bundles:
//   tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro,
//   componentTagger, VITE_* env injection, @ path alias, React/TanStack dedupe.
// Do NOT add these plugins manually.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
});
