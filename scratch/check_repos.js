async function check() {
    const response = await fetch('https://api.github.com/users/jukk4p/repos?per_page=100');
    const repos = await response.json();
    console.log(JSON.stringify(repos.map(r => r.name), null, 2));
}
check();
