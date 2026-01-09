<script>
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    
    // In Svelte 5, using $state for reactivity
    let { initialPosts = [] } = $props();
    let searchQuery = $state('');
    
    // Derived state for filtering
    let filteredPosts = $derived(
        initialPosts.filter(post => {
            const query = searchQuery.toLowerCase();
            return (
                post.title.toLowerCase().includes(query) ||
                post.description.toLowerCase().includes(query)
            );
        })
    );
</script>

<div class="w-full max-w-7xl mx-auto p-4">
    <!-- Search Bar -->
    <div class="mb-12 relative w-full max-w-2xl mx-auto">
        <input 
            type="text" 
            bind:value={searchQuery}
            placeholder="Search articles..."
            class="w-full bg-secondary/30 backdrop-blur-md border border-white/10 rounded-full px-8 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-white placeholder-white/40"
        />
        <div class="absolute right-6 top-1/2 -translate-y-1/2 text-white/40">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>
    </div>

    <!-- Feed Grid -->
    <div class="grid grid-cols-1 gap-8">
        {#each filteredPosts as post (post.url)}
            <a 
                href={post.url} 
                class="group block relative overflow-hidden rounded-2xl bg-card/40 border border-white/5 hover:border-white/20 transition-colors duration-500"
                in:fly={{ y: 20, duration: 400 }}
            >
                <div class="flex flex-col md:flex-row h-full">
                    <!-- Image -->
                    <div class="w-full md:w-1/3 aspect-video md:aspect-auto overflow-hidden">
                        {#if post.image}
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        {:else}
                            <div class="w-full h-full bg-gradient-to-br from-gray-800 to-black"></div>
                        {/if}
                    </div>

                    <!-- Content -->
                    <div class="p-8 md:w-2/3 flex flex-col justify-center">
                        <div class="flex items-center gap-4 mb-4 text-sm text-gray-400">
                            <time datetime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                            {#if post.read_time}
                                <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">
                                    {post.read_time} min read
                                </span>
                            {/if}
                        </div>
                        
                        <h3 class="text-3xl font-display font-medium mb-3 text-white group-hover:text-primary transition-colors">
                            {post.title}
                        </h3>
                        
                        <p class="text-gray-400 line-clamp-2 leading-relaxed">
                            {post.description}
                        </p>
                    </div>
                </div>
            </a>
        {:else}
            <div class="text-center py-20 text-gray-500" in:fade>
                No posts found matching "{searchQuery}"
            </div>
        {/each}
    </div>
</div>
