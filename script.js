// script.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement; // El elemento <html>

    // Constantes para las clases
    const darkClass = 'dark';
    const moonIcon = 'fas fa-moon';
    const sunIcon = 'fas fa-sun';

    // Función para actualizar la interfaz (clase HTML e ícono)
    function updateTheme(isDark) {
        if (isDark) {
            html.classList.add(darkClass);
            themeIcon.className = sunIcon + ' text-yellow-300'; // Sol para modo oscuro
        } else {
            html.classList.remove(darkClass);
            themeIcon.className = moonIcon + ' text-gray-700'; // Luna para modo claro
        }
    }

    // 1. Cargar preferencia guardada
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        // Si la preferencia es 'dark' O no hay preferencia guardada y el sistema prefiere oscuro
        updateTheme(true);
    } else {
        // Por defecto o si la preferencia es 'light'
        updateTheme(false);
    }

    // 2. Manejar el evento de clic
    themeToggle.addEventListener('click', () => {
        const isCurrentlyDark = html.classList.contains(darkClass);
        
        // Alternar el tema
        updateTheme(!isCurrentlyDark);
        
        // Guardar la nueva preferencia
        localStorage.setItem('theme', isCurrentlyDark ? 'light' : 'dark');
    });
});

// 
    function setCardBackground(type, value) {
      // Reset
      card.style.backgroundColor = '';
      card.style.backgroundImage = '';
      card.classList.remove('has-image', 'dark-mode');

      if (type === 'solid') {
        card.style.backgroundColor = value;
        if (value === '#1e293b') {
          card.classList.add('dark-mode');
        }
      } else if (type === 'image') {
        card.style.backgroundImage = `url(${value})`;
        card.classList.add('has-image');
      }
    }
