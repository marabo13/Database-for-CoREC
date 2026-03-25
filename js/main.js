const page = window.location.pathname;

let file = "";

if (page.includes("ambassadors")) {
  file = "data/ambassadors.json";
} else if (page.includes("investigators")) {
  file = "data/investigators.json";
}

fetch(file)
  .then(res => res.json())
  .then(data => {
    // Duties
    document.getElementById("duties").innerHTML =
      data.duties.map(d => `<p>- ${d}</p>`).join("");

    // Council
    document.getElementById("council").innerHTML =
      data.council.map(c => `<p>${c.name} - ${c.role}</p>`).join("");

    // Hierarchy
    document.getElementById("hierarchy").innerHTML =
      data.hierarchy.map(h => `<p>${h}</p>`).join("");

    // Laws
    document.getElementById("laws").href = data.laws_link;
  });
