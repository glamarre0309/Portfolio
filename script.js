const revealItems = document.querySelectorAll(".reveal, .card, .project-card, .timeline-item, .contact-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -30px 0px",
  }
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});
