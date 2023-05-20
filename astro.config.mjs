import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
    base: "/dev/mon_compte_business",
    outDir: './mon_compte_business'
});