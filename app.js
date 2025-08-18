/* JavaScript for EstateHub Landing Page */

document.addEventListener("DOMContentLoaded", () => {
    const menuToggleButton = document.getElementById("menuToggle");
    const primaryNav = document.getElementById("primaryNav");
    const searchForm = document.getElementById("searchForm");
    const listPropertyBtn = document.getElementById("listPropertyBtn");
    const yearSpan = document.getElementById("year");

    if (yearSpan) {
        yearSpan.textContent = String(new Date().getFullYear());
    }

    if (menuToggleButton && primaryNav) {
        menuToggleButton.addEventListener("click", () => {
            const isOpen = primaryNav.style.display === "flex";
            primaryNav.style.display = isOpen ? "none" : "flex";
            if (!isOpen) {
                primaryNav.style.flexDirection = "column";
                primaryNav.style.gap = "10px";
                primaryNav.style.background = "#111727";
                primaryNav.style.position = "absolute";
                primaryNav.style.top = "58px";
                primaryNav.style.right = "4%";
                primaryNav.style.padding = "12px";
                primaryNav.style.border = "1px solid #2b3759";
                primaryNav.style.borderRadius = "12px";
                primaryNav.style.boxShadow = "0 12px 28px -18px rgba(0,0,0,0.35)";
            }
        });
    }

    if (listPropertyBtn) {
        listPropertyBtn.addEventListener("click", () => {
            window.location.hash = "#cta-sell";
            document.getElementById("cta-sell")?.scrollIntoView({ behavior: "smooth" });
        });
    }

    if (searchForm) {
        searchForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const locationInput = document.getElementById("searchLocation");
            const purposeSelect = document.getElementById("searchPurpose");
            const typeSelect = document.getElementById("searchType");
            const minPriceSelect = document.getElementById("minPrice");
            const maxPriceSelect = document.getElementById("maxPrice");
            const bedsSelect = document.getElementById("beds");

            const query = new URLSearchParams({
                location: (locationInput instanceof HTMLInputElement) ? locationInput.value : "",
                purpose: (purposeSelect instanceof HTMLSelectElement) ? purposeSelect.value : "",
                type: (typeSelect instanceof HTMLSelectElement) ? typeSelect.value : "",
                minPrice: (minPriceSelect instanceof HTMLSelectElement) ? minPriceSelect.value : "",
                maxPrice: (maxPriceSelect instanceof HTMLSelectElement) ? maxPriceSelect.value : "",
                beds: (bedsSelect instanceof HTMLSelectElement) ? bedsSelect.value : "",
            }).toString();

            // In a real app, you would navigate to your search results page.
            // For this static landing, we just show a friendly message and scroll to listings.
            console.log("Search:", query);
            alert("Searching with filters:\n" + decodeURIComponent(query));
            document.getElementById("listings")?.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Reveal on scroll animations
    const revealed = new WeakSet();
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !revealed.has(entry.target)) {
                entry.target.classList.add("visible");
                revealed.add(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
});

