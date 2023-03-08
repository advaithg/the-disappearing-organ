<script>
    import Overview from './overview.svelte'
    import About from './about.svelte'
	import Organ from './organ.svelte';
    import Functioning from './functioning.svelte'
    import History from './history.svelte'

    export let menu = 0;
	export let menuItem = [
        "Project Overview",
        "About",
        "Organ",
        "Function",
        "History"
    ];

</script>


<nav id="menu" class="bg-dark px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <div class="grid grid-cols-4 mx-10">
        <div class="col-span-1">
            <a class="italic font-extrabold"
            href="/" on:click|preventDefault={() => (menu = 0)}>
            The Tower Theatre Organ </a>
        </div>
        <div class="col-span-3 ">
            <div class="flex flex-row items-center justify-between mx-auto">
            {#each menuItem as item, index}
            <div class="block">
                <a
                    class="{menu === index ? 'text-light' : 'text-black'}"
                    href="/" on:click|preventDefault={() => (menu = index)}>
                    {item}
                </a>
            </div> 
            {/each}
        </div>  
    </div>
</nav>
  
  
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
