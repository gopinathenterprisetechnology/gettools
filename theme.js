/**
 * GET Tools - Light / Dark Theme Manager
 * Pure client-side, zero backend dependencies, persists via localStorage and prefers-color-scheme.
 * Features Sun (সূর্য) logo for Day Mode and Moon (চাঁদ) logo for Dark Mode.
 */
(function() {
  'use strict';

  var THEME_KEY = 'gettools_theme';

  // High-Resolution Golden Sun (সূর্য) Logo for Day Mode
  var SUN_SVG = '<svg class="icon-sun" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#f59e0b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; filter:drop-shadow(0 0 5px rgba(245,158,11,0.7));"><circle cx="12" cy="12" r="4.5" fill="#f59e0b" stroke="#f59e0b"></circle><line x1="12" y1="1.5" x2="12" y2="4.5"></line><line x1="12" y1="19.5" x2="12" y2="22.5"></line><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"></line><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"></line><line x1="1.5" y1="12" x2="4.5" y2="12"></line><line x1="19.5" y1="12" x2="22.5" y2="12"></line><line x1="4.22" y1="19.78" x2="6.34" y2="17.66"></line><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"></line></svg>';

  // High-Resolution Glowing Moon (চাঁদ) Logo for Dark Mode
  var MOON_SVG = '<svg class="icon-moon" viewBox="0 0 24 24" width="22" height="22" fill="#38bdf8" stroke="#0284c7" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; filter:drop-shadow(0 0 5px rgba(56,189,248,0.7));"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#38bdf8"></path><circle cx="17.5" cy="5.5" r="1.2" fill="#facc15" stroke="none"></circle><circle cx="13.5" cy="3.5" r="0.8" fill="#facc15" stroke="none"></circle></svg>';

  function getSystemPreference() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function getSavedTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var isDark = (theme === 'dark');
    var buttons = document.querySelectorAll('.theme-toggle-btn');

    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];
      btn.setAttribute('aria-label', isDark ? 'Dark Mode active (চাঁদ) - Click to switch to Day Mode' : 'Day Mode active (সূর্য) - Click to switch to Dark Mode');
      btn.setAttribute('title', isDark ? 'Dark Mode (চাঁদ) - Click for Day Mode (সূর্য)' : 'Day Mode (সূর্য) - Click for Dark Mode (চাঁদ)');
      
      // Day Mode shows Sun (সূর্য), Dark Mode shows Moon (চাঁদ)
      btn.innerHTML = isDark ? MOON_SVG : SUN_SVG;
    }
  }

  window.toggleTheme = function() {
    var current = document.documentElement.getAttribute('data-theme') || 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch (e) {}
    applyTheme(next);
  };

  // Immediate execution before DOM render to prevent theme flashing
  var initialTheme = getSavedTheme() || getSystemPreference();
  document.documentElement.setAttribute('data-theme', initialTheme);

  // Bind buttons once DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      applyTheme(document.documentElement.getAttribute('data-theme') || initialTheme);
      initMobileNav();
    });
  } else {
    applyTheme(initialTheme);
    initMobileNav();
  }

  // Mobile navigation drawer toggle
  function initMobileNav() {
    var menuBtn = document.querySelector('.mobile-menu-btn');
    var mobileNav = document.querySelector('.mobile-nav-menu');
    if (menuBtn && mobileNav) {
      menuBtn.addEventListener('click', function() {
        var isOpen = mobileNav.classList.contains('is-open');
        if (isOpen) {
          mobileNav.classList.remove('is-open');
          menuBtn.setAttribute('aria-expanded', 'false');
        } else {
          mobileNav.classList.add('is-open');
          menuBtn.setAttribute('aria-expanded', 'true');
        }
      });
      // Close on clicking links
      var links = mobileNav.querySelectorAll('a');
      for (var j = 0; j < links.length; j++) {
        links[j].addEventListener('click', function() {
          mobileNav.classList.remove('is-open');
          menuBtn.setAttribute('aria-expanded', 'false');
        });
      }
    }
  }
})();
