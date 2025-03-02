<script lang="ts">
	import { MyCounterButton, MyTestContainer } from '@repo/ui';

	import { Accordion, AccordionItem, Badge } from 'flowbite-svelte';
</script>

<h1 class="bg-primary-500">Web</h1>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<MyCounterButton />

<MyTestContainer number={53} text="Yo mamma">
	<p class="bg-orange-300 p-3 rounded-md border">Hello</p>
	<p class="bg-orange-300 p-3 rounded-md border">World</p>
	<p class="bg-orange-300 p-3 rounded-md border">from</p>
	<p class="bg-orange-300 p-3 rounded-md border">MyTestContainer</p>
</MyTestContainer>

<Badge color="blue" border>This is a test</Badge>

<div class=" bg-secondary-500">f</div>

<Accordion flush>
	<AccordionItem>
		<p>hello</p>
	</AccordionItem>
</Accordion>
