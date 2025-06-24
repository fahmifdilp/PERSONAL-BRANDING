// Dark Mode Toggle + Simpan ke localStorage
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  
    // Simpan preferensi ke localStorage
    const mode = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("mode", mode);
  }
  
  // Saat halaman dimuat
  document.addEventListener("DOMContentLoaded", function () {
    // Cek preferensi dark mode sebelumnya
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
      document.body.classList.add("dark-mode");
    }
  
    // Efek Ketik
    const typingEl = document.getElementById("typing");
    const teks = "Fahmi Fadilah Purba";
    let i = 0;
  
    function ketik() {
      if (i < teks.length) {
        typingEl.textContent += teks.charAt(i);
        i++;
        setTimeout(ketik, 100);
      }
    }
  
    ketik();
  });
  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("themeToggle");
    const body = document.body;
  
    // Cek localStorage
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      toggle.textContent = "🌞";
    }
  
    toggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      const isDark = body.classList.contains("dark-mode");
      toggle.textContent = isDark ? "🌞" : "🌙";
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  });

  