// Initial version generated with Claude (Anthropic). See README > AI Declaration.

const motionAllowed = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const growObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("grow-in");
      growObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

function observeGrow(element) {
  if (!motionAllowed) {
    return;
  }
  element.classList.add("grow-ready");
  growObserver.observe(element);
}

document.querySelectorAll("[data-grow]").forEach(observeGrow);

const railLinks = document.querySelectorAll(".rail a");

const railObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      railLinks.forEach(link => {
        const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
        link.setAttribute("aria-current", isCurrent ? "true" : "false");
      });
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

railLinks.forEach(link => {
  const target = document.querySelector(link.getAttribute("href"));
  if (target) {
    railObserver.observe(target);
  }
});
