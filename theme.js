(function () {
  var STORAGE_KEY = "cv-theme";
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      /* storage may be unavailable */
    }
  }

  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(theme === "dark"));
    }
  }

  var currentTheme = getStoredTheme() || getSystemTheme();
  applyTheme(currentTheme);

  if (toggle) {
    toggle.addEventListener("click", function () {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(currentTheme);
      storeTheme(currentTheme);
    });
  }
})();
