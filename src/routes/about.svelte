<script>
    let people = [
        {
            'name':'Kelsey Araghi',
            'image':'kelsey.jpg',
            'description':'Kelsey is a third year Theater major and Digital Humanities minor. She was very drawn to this class because of the opportunity to learn about the historic Los Angeles and strengthen her drafting skills. Contributing to this project gave her the chance to get hands-on experience with exploratory research and make conclusions on a subject that has not yet been examined.'
        },
        {
            'name':'Xinran Fang',
            'image':'xinran.jpg',
            'description':'lorem ipsum'
        },
        {
            'name':'Advaith Gowrishetty',
            'image':'advaith.jpg',
            'description':'lorem ipsum'
        },
        {
            'name':'Austin Law',
            'image':'austin.jpg',
            'description':'lorem ipsum'
        },
        {
            'name':'Sela Serafin',
            'image':'sela.jpg',
            'description':'Sela is a Senior majoring in Communication with a minor in Digital Humanities. Having worked as an entertainment marketing strategist in LA, Sela was eager to join this class and further learn about the intersection between entertainment and technology.  Participating in this project allowed her to discover the unique ways in which theater organs impacted cinema and inspired her to think more deeply about how it may inform modern technologies impacting viewer experience. If she was an organ, she would be an Allen Organ.'
        }
    ];
</script>

<div class="flex flex-col mt-15 bg-light px-64 items-center">
    <p class="mt-10 p-10 text-dark text-5xl">About</p>
    <p class="m-10 text-3xl underline">Team Members</p>
    <div>
        {#each people as person, index}
        <div class="flex pt-10">
            {#if index%2===0}
            <div class="mr-auto">
                <img class="max-w-sm" src={person.image} alt={person.name}>
            </div>
            {/if}
            <div class="flex flex-col justify-between m-10">
                <h4 class="text-2xl font-extrabold"> {person.name} </h4>
                <p> {person.description} </p>
            </div>
            {#if index%2===1}
            <div class="ml-auto">
                <img class="max-w-sm" src={person.image} alt={person.name}>
            </div>
            {/if}
        </div>
        {/each}
    </div>
    <p class="m-10 text-3xl underline">Resources</p>
    <p class="m-10 text-3xl underline">Timeline</p>
</div>