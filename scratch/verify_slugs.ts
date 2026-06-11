
import { projects } from '../src/data/projects.ts';
import { getGitHubRepos } from '../src/lib/github.ts';

async function verify() {
    console.log('--- Projects in projects.ts ---');
    projects.forEach(p => console.log(`- ${p.slug}`));

    console.log('\n--- Projects from getGitHubRepos (Fallback) ---');
    const repos = await getGitHubRepos();
    repos.forEach(r => console.log(`- ${r.slug} (${r.title})`));
}

verify();
