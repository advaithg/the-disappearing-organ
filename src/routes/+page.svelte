<script>
    import Overview from './overview.svelte'
    import About from './about.svelte'
	import Organ from './organ.svelte';
    import Functioning from './functioning.svelte'
    import History from './history.svelte'
	export let menu = 0;
</script>

<h1> The Tower Theatre Organ </h1>

<ul id="menu">
	<li><a href="/" on:click|preventDefault={() => (menu = 0)}>Project Overview</a></li> 
	<li><a href="/" on:click|preventDefault={() => (menu = 1)}>About</a></li>
	<li><a href="/" on:click|preventDefault={() => (menu = 2)}>Organ</a></li>
	<li><a href="/" on:click|preventDefault={() => (menu = 3)}>Functioning</a></li>
	<li><a href="/" on:click|preventDefault={() => (menu = 4)}>History</a></li>
</ul>

{#if menu === 0}
    <Overview />
{:else if menu === 1}
    <About />
{:else if menu === 2}
    <Organ />
{:else if menu === 3}
    <Functioning />
{:else if menu === 4}
    <History />
{:else}
    <h1>
        404 Page Not Found
    </h1>
{/if}

