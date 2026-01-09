
// GitHub API Fetcher for Footer
// Fetches top 3 starred repos

document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('github-repos');
    const username = window.githubUsername || 'harsh98trivedi';
    
    if (!container) return; // Exit if footer not present

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&type=owner`);
        
        if (!response.ok) {
             // If rate limited or error, show simple fallback
             container.innerHTML = `<div class="text-sm text-gray-500">Github stats currently unavailable.</div>`;
             return;
        }
        
        const data = await response.json();
        // Sort by stars desc and take top 3
        const repos = data.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 3);

        // Safe rendering
        container.innerHTML = repos.map(repo => `
            <a href="${repo.html_url}" target="_blank" class="block group p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                <div class="flex justify-between items-center mb-1">
                    <span class="font-medium text-white group-hover:text-primary transition-colors">${repo.name}</span>
                    <span class="text-xs text-gray-500 flex items-center gap-1">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        ${repo.stargazers_count}
                    </span>
                </div>
                <p class="text-xs text-gray-400 line-clamp-1">${repo.description || 'No description provided.'}</p>
            </a>
        `).join('');

    } catch (e) {
        console.warn('Github Fetch Error:', e);
        container.innerHTML = `<div class="text-sm text-gray-500">Connecting to GitHub...</div>`;
    }
});
