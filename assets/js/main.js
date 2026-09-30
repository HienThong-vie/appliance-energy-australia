// Initial version generated with Claude (Anthropic). See README > Generative AI Reflection.

const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const faqButtons = document.querySelectorAll(".faq-q button");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));
    panel.hidden = isOpen;
  });
});
