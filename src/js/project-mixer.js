
/**
 * Project Mixer
 * Fetches pinned/top GitHub repos and mixes them with static projects.
 */

export async function initProjectMixer() {
    const container = document.getElementById('project-grid');
    if (!container) return;

    // 1. Get Static Projects (Rendered via Liquid as JSON)
    const staticProjects = window.STATIC_PROJECTS || [];

    // 2. Fetch GitHub Projects
    let githubProjects = [];
    try {
        // Fallback username if window variable not set
        const username = (window.githubUsername && window.githubUsername !== '') ? window.githubUsername : 'harsh98trivedi'; 
        
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
             headers: { 'Accept': 'application/vnd.github.v3+json' }
        });

        if (response.ok) {
            const repos = await response.json();
            
            // Map GitHub repos to our project structure
            githubProjects = repos.map(repo => ({
                title: repo.name,
                description: repo.description || "Open source contribution.",
                // Use GitHub OpenGraph image for a rich preview
                image: `https://opengraph.githubassets.com/1/${repo.full_name}`, 
                tags: [repo.language || "Open Source", "GitHub"],
                live_url: repo.homepage || repo.html_url,
                isGithub: true
            })).filter(repo => !repo.fork); // Optional: filter out forks
        } else {
             console.error("GitHub API Error:", response.status, response.statusText);
        }
    } catch (e) {
        console.warn("GitHub Project Fetch failed", e);
    }

    // 3. Shuffle & Merge (Interleave)
    const mixedProjects = [];
    const maxLen = Math.max(staticProjects.length, githubProjects.length);
    
    for (let i = 0; i < maxLen; i++) {
        if (staticProjects[i]) mixedProjects.push(staticProjects[i]);
        if (githubProjects[i]) mixedProjects.push(githubProjects[i]);
    }

    // 4. Render with "Breathing Space" and Shery-compatible classes
    container.innerHTML = mixedProjects.map(project => `
        <article class="project-card break-inside-avoid mb-24 relative group">
            <a href="${project.live_url}" target="_blank" class="block w-full cursor-none">
                <!-- Image Container -->
                <div class="project-img-wrapper relative overflow-hidden rounded-2xl aspect-video border border-white/5 bg-white/5">
                    <img 
                        src="${project.image}" 
                        alt="${project.title}" 
                        loading="lazy"
                        class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    >
                </div>
            </a>
            
            <div class="mt-8 flex justify-between items-start px-2">
                <div class="max-w-[85%]">
                    <h2 class="text-4xl font-display font-bold mb-3 group-hover:text-primary transition-colors project-title magnetic inline-block origin-left">
                        ${project.title}
                    </h2>
                    <p class="text-gray-400 text-lg leading-relaxed mb-6 line-clamp-3">
                        ${project.description}
                    </p>
                    <div class="flex flex-wrap gap-3">
                        ${project.tags.map(tag => `
                            <span class="text-sm border border-white/10 px-3 py-1 rounded-full text-gray-400 font-mono hover:bg-white/5 transition-colors">${tag}</span>
                        `).join('')}
                    </div>
                </div>
                
                <a href="${project.live_url}" target="_blank" aria-label="View Project" class="magnetic h-12 w-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all shrink-0 group-hover:scale-110 duration-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
            </div>
        </article>
    `).join('');

    // Dispatch event to signal content is ready for Shery.js
    document.dispatchEvent(new Event('projectsLoaded'));
}
