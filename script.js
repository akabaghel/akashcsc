fetch('data/updates.json')
  .then(response => response.json())
  .then(data => {
    const updatesSection = document.getElementById('updates');

    updatesSection.innerHTML += createSection("Latest Jobs", data.jobs, "jobs");
    updatesSection.innerHTML += createSection("Admit Cards", data.admitCards, "admit");
    updatesSection.innerHTML += createSection("Results", data.results, "results");
  });

function createSection(title, items, id) {
  let html = `<section id="${id}"><h2>${title}</h2><ul>`;
  items.forEach(item => {
    html += `<li><a href="${item.link}" target="_blank">${item.title}</a></li>`;
  });
  html += '</ul></section>';
  return html;
}
