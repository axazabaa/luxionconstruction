// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Allow overriding the Nitro deploy preset via env (e.g. NITRO_PRESET=netlify).
// Netlify sets NETLIFY=true automatically in its build env, so we auto-detect there.
const isNetlify = process.env.NETLIFY === "true" || process.env.NITRO_PRESET === "netlify";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  // Force-enable Nitro with the Netlify preset when building on Netlify,
  // otherwise keep Lovable's default (Cloudflare in the sandbox, Vite-only when cloned).
  nitro: isNetlify ? { preset: "netlify" } : undefined,
});
