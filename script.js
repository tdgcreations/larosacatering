const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    navToggle.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
    nav.classList.toggle("is-open", !open);
    document.body.classList.toggle("nav-open", !open);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation");
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const quoteForm = document.querySelector("#quote-form");
const formNote = document.querySelector("#form-note");

if (quoteForm) {
  quoteForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = new FormData(quoteForm);
    const details = {
      name: String(data.get("name") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      eventType: String(data.get("eventType") || "").trim(),
      eventDate: String(data.get("eventDate") || "").trim(),
      guestCount: String(data.get("guestCount") || "").trim(),
      city: String(data.get("city") || "").trim(),
      message: String(data.get("message") || "").trim()
    };

    const message = [
      "Hi Isabel! I would like a catering quote.",
      "",
      `Name: ${details.name}`,
      `Phone: ${details.phone}`,
      `Event: ${details.eventType}`,
      `Date: ${details.eventDate || "Not selected"}`,
      `Guests: ${details.guestCount || "Not sure yet"}`,
      `City: ${details.city || "Not provided"}`,
      `Details: ${details.message || "No additional details"}`
    ].join("\n");

    const encodedMessage = encodeURIComponent(message);
    const smsUrl = `sms:+18586635462?&body=${encodedMessage}`;

    try {
      await navigator.clipboard.writeText(message);
      if (formNote) {
        formNote.textContent =
          "Your request was copied and a text message is opening now.";
      }
    } catch {
      if (formNote) {
        formNote.textContent =
          "A text message is opening now. Please review it before sending.";
      }
    }

    window.location.href = smsUrl;
  });
}

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}
