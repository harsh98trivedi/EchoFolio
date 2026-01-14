/**
 * Project Mixer
 * Renders projects from static data (projects.yml) only.
 * GitHub fetching has been removed as per request.
 */

export async function initProjectMixer() {
    const container = document.getElementById('project-grid');
    if (!container) return;

    // 1. Get Static Projects (Rendered via Liquid as JSON)
    const staticProjects = window.STATIC_PROJECTS || [];

    // 2. Map to standardized format expected by the template
    const projects = staticProjects.map(p => ({
        title: p.name || p.title, // Handle both 'name' (YML standard) and 'title'
        description: p.description,
        image: p.image,
        tags: p.tags || [],
        live_url: p.link || p.live_url || p.url // Handle various URL keys
    }));

    // 3. Render
    container.innerHTML = projects.map(project => `
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
                        ${(project.tags || []).map(tag => `
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
