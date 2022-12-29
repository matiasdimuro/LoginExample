const toggleThemeButton = document.getElementById('toggle-theme');
const lightMode = window.matchMedia("(prefers-color-scheme: light)").matches;

!lightMode && toggleThemeButton.click();