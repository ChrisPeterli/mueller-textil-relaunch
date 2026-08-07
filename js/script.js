(function () {
	"use strict";

	// Header: solid background + gold border once scrolled past hero top
	var header = document.getElementById("siteHeader");
	if (header) {
		var onScroll = function () {
			header.classList.toggle("is-scrolled", window.scrollY > 24);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
	}

	// Mobile navigation toggle
	var toggle = document.getElementById("navToggle");
	var mobileNav = document.getElementById("mobileNav");
	if (toggle && mobileNav) {
		toggle.addEventListener("click", function () {
			var isOpen = mobileNav.classList.toggle("is-open");
			toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
		});
		mobileNav.querySelectorAll("a").forEach(function (link) {
			link.addEventListener("click", function () {
				mobileNav.classList.remove("is-open");
				toggle.setAttribute("aria-expanded", "false");
			});
		});
	}

	// Contact form: no backend on this static site, so hand off to the
	// visitor's own mail client with the fields pre-filled.
	var form = document.getElementById("contactForm");
	if (form) {
		form.addEventListener("submit", function (event) {
			event.preventDefault();
			var data = new FormData(form);
			var name = data.get("name") || "";
			var email = data.get("email") || "";
			var isEnglish = document.documentElement.lang === "en";
			var subject = data.get("subject") || (isEnglish ? "Website inquiry" : "Anfrage über die Website");
			var message = data.get("message") || "";
			var body = message + "\n\n— " + name + " (" + email + ")";
			var mailto = "mailto:info@mueller-textil.ch" +
				"?subject=" + encodeURIComponent(subject) +
				"&body=" + encodeURIComponent(body);
			window.location.href = mailto;
		});
	}

	var yearEl = document.getElementById("year");
	if (yearEl) {
		yearEl.textContent = new Date().getFullYear();
	}
})();
