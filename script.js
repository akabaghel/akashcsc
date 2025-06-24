fetch('data/updates.json')
  .then(response => {
    if (!response.ok) throw new Error("Failed to fetch updates.json");
    return response.json();
  })
  .then(data => {
    const updatesSection = document.getElementById('updates');
    updatesSection.innerHTML += createSection("Latest Jobs", data.jobs, "jobs");
    updatesSection.innerHTML += createSection("Admit Cards", data.admitCards, "admit");
    updatesSection.innerHTML += createSection("Results", data.results, "results");
  })
  .catch(error => console.error("Fetch error:", error));

function createSection(title, items, id) {
  if (!items || !items.length) return '';
  let html = `<section id="\${id}"><h2>\${title}</h2><ul>`;
  items.forEach(item => {
    html += `<li><a href="\${item.link}" target="_blank" rel="noopener noreferrer">\${item.title}</a></li>`;
  });
  html += '</ul></section>';
  return html;
}