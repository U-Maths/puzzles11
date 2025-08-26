document.getElementById("year").textContent = new Date().getFullYear();

// Auto-open the section from the hash (e.g., .../puzzles11/#p2)
function openFromHash(){
  const id = window.location.hash.replace("#", "");
  if(!id) return;
  const el = document.getElementById(id);
  if(el && el.tagName.toLowerCase() === "details"){
    el.open = true;
    // small scroll delay for smoother behavior
    setTimeout(() => el.scrollIntoView({behavior:"smooth", block:"start"}), 50);
  }
}
window.addEventListener("hashchange", openFromHash);
openFromHash();

// Copy direct link buttons
document.querySelectorAll(".copylink").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const id = btn.getAttribute("data-target");
    const url = `${location.origin}${location.pathname}#${id}`;
    navigator.clipboard.writeText(url).then(() => {
      btn.textContent = "✅";
      setTimeout(() => btn.textContent = "🔗", 900);
    });
  });
});
