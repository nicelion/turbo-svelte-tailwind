/**
 tailwind.config.ts
 web
 
 Created by Ian Thompson on March 1st 2025
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2025 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import type { Config } from 'tailwindcss'
import presets from "@repo/ui/tailwind.config.ts"


const config: Config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}', 
		'../../packages/ui/src/**/*.{html,js,svelte,ts}',
		"../../packages/ui/node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"
	],
	presets: [presets]
}

export default config; 