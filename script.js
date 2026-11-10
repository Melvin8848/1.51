const knapp = document.getElementById("knapp");
const extra = document.getElementById("extra");

knapp.addEventListener("click", () => {
  const open = knapp.getAttribute("aria-expanded") === "true";
  knapp.setAttribute("aria-expanded", String(!open));
  knapp.textContent = open ? "Visa mer" : "Visa mindre";
  extra.hidden = open;
});