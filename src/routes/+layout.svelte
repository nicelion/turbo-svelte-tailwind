<!--
 +layout.svelte
 web
 
 Created by Ian Thompson on March 1st 2025
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2025 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import '@repo/ui/globals.css';

	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

{@render children()}
