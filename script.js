/**
 * Ty The Window Guy — site interactions
 * Mobile nav, form validation, sticky CTA, year stamp
 */

(function () {
  "use strict";

  /* ---------- Year in footer ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ---------- Mobile navigation ---------- */
  var navToggle = document.getElementById("navToggle");
  var mobileNav = document.getElementById("mobileNav");

  function closeMobileNav() {
    if (!navToggle || !mobileNav) return;
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
    mobileNav.hidden = true;
  }

  function openMobileNav() {
    if (!navToggle || !mobileNav) return;
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close menu");
    mobileNav.hidden = false;
  }

  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      var expanded = navToggle.getAttribute("aria-expanded") === "true";
      if (expanded) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMobileNav);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMobileNav();
    });
  }

  /* ---------- Sticky CTA: hide when contact section is in view ---------- */
  var stickyCta = document.getElementById("stickyCta");
  var contactSection = document.getElementById("contact");

  if (stickyCta && contactSection && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            stickyCta.classList.add("is-hidden");
            stickyCta.setAttribute("aria-hidden", "true");
          } else {
            stickyCta.classList.remove("is-hidden");
            stickyCta.removeAttribute("aria-hidden");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(contactSection);
  }

  /* ---------- Quote form validation & demo submit ---------- */
  var form = document.getElementById("quoteForm");
  var successEl = document.getElementById("formSuccess");

  function clearErrors(formEl) {
    formEl.querySelectorAll(".is-invalid").forEach(function (el) {
      el.classList.remove("is-invalid");
    });
    formEl.querySelectorAll(".form-error-msg").forEach(function (el) {
      el.remove();
    });
  }

  function showFieldError(input, message) {
    input.classList.add("is-invalid");
    var msg = document.createElement("p");
    msg.className = "form-error-msg";
    msg.textContent = message;
    msg.setAttribute("role", "alert");
    var parent = input.closest(".form-field") || input.parentElement;
    if (parent) parent.appendChild(msg);
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function isValidPhone(value) {
    var digits = value.replace(/\D/g, "");
    return digits.length >= 10;
  }

  /* Quote form → email sales@tythewindowguyor.com via FormSubmit */
  var FORM_EMAIL_ENDPOINT =
    "https://formsubmit.co/ajax/sales@tythewindowguyor.com";

  if (form) {
    var submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      clearErrors(form);
      if (successEl) successEl.hidden = true;

      var existingFormError = form.querySelector(".form-submit-error");
      if (existingFormError) existingFormError.remove();

      var nameInput = form.querySelector("#name");
      var phoneInput = form.querySelector("#phone");
      var emailInput = form.querySelector("#email");
      var addressInput = form.querySelector("#address");
      var serviceChecks = form.querySelectorAll('input[name="service"]:checked');
      var valid = true;

      if (!nameInput.value.trim()) {
        showFieldError(nameInput, "Please enter your name.");
        valid = false;
      }

      if (!phoneInput.value.trim() || !isValidPhone(phoneInput.value)) {
        showFieldError(phoneInput, "Please enter a valid phone number.");
        valid = false;
      }

      if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
        showFieldError(emailInput, "Please enter a valid email address.");
        valid = false;
      }

      if (!addressInput.value.trim()) {
        showFieldError(addressInput, "Please enter your address or neighborhood.");
        valid = false;
      }

      if (serviceChecks.length === 0) {
        var fieldset = form.querySelector("fieldset.form-field");
        if (fieldset) {
          var msg = document.createElement("p");
          msg.className = "form-error-msg";
          msg.textContent = "Please select at least one service.";
          msg.setAttribute("role", "alert");
          fieldset.appendChild(msg);
        }
        valid = false;
      }

      if (!valid) {
        var firstInvalid = form.querySelector(".is-invalid, .form-error-msg");
        if (firstInvalid) {
          firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
          if (firstInvalid.focus) firstInvalid.focus();
        }
        return;
      }

      var servicesList = Array.prototype.map
        .call(serviceChecks, function (c) {
          return c.value;
        })
        .join(", ");

      var payload = {
        name: nameInput.value.trim(),
        phone: phoneInput.value.trim(),
        email: emailInput.value.trim(),
        _replyto: emailInput.value.trim(),
        address: addressInput.value.trim(),
        services: servicesList,
        message: (form.querySelector("#message") || {}).value || "",
        _subject: "New quote request — Ty The Window Guy website",
        _template: "table",
        _captcha: "false",
        source: "tythewindowguy-website",
      };

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.dataset.originalText = submitBtn.textContent;
        submitBtn.textContent = "Sending…";
      }

      fetch(FORM_EMAIL_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then(function (res) {
          if (!res.ok) {
            return res.json().then(function (data) {
              throw new Error(
                (data && (data.message || data.error)) ||
                  "Something went wrong sending your request."
              );
            }).catch(function (err) {
              if (err && err.message && err.message.indexOf("Something") === -1) {
                throw err;
              }
              throw new Error(
                "Something went wrong sending your request. Please call (541) 633-8728."
              );
            });
          }
          return res.json();
        })
        .then(function () {
          form.reset();
          if (successEl) {
            successEl.hidden = false;
            successEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }
          /* Optional analytics:
          if (typeof gtag === "function") {
            gtag("event", "generate_lead", { event_category: "quote_form" });
          }
          */
        })
        .catch(function (err) {
          var errEl = document.createElement("p");
          errEl.className = "form-error-msg form-submit-error";
          errEl.setAttribute("role", "alert");
          errEl.textContent =
            (err && err.message) ||
            "Unable to send right now. Please call (541) 633-8728.";
          form.appendChild(errEl);
          errEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent =
              submitBtn.dataset.originalText || "Request Free Quote";
          }
        });
    });
  }

  /* ---------- Smooth-scroll for same-page anchors (extra polish) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var id = anchor.getAttribute("href");
      if (!id) return;

      /* Logo / "back to top" — scroll to document top (not sticky header element) */
      if (id === "#" || id === "#top") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (history.pushState) {
          history.pushState(null, "", window.location.pathname + window.location.search);
        }
        closeMobileNav();
        return;
      }

      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (history.pushState) {
        history.pushState(null, "", id);
      }
      closeMobileNav();
    });
  });
})();
