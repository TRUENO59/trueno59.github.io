    const btnTheme = document.getElementById('toggle-theme');
    const card = document.getElementById('card');
    // Persistencia modo claro/oscuro
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
    btnTheme.addEventListener('click', function () {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem(
        'theme',
        document.documentElement.classList.contains('dark') ? 'dark' : 'light'
      );
    });
    // Cambiar fondo con animación
    document.querySelectorAll('[data-bg]').forEach(btn => {
      btn.addEventListener('click', () => {
        card.classList.add('opacity-0');
        setTimeout(() => {
          card.className = 'p-6 max-w-sm rounded-xl shadow-lg flex flex-col items-center space-y-4 transition-colors duration-500 ease-in-out';
          card.classList.add(...btn.getAttribute('data-bg').split(' '));
          card.classList.remove('opacity-0');
        }, 300);
      });
    });
    card.classList.add('bg-white', 'dark:bg-gray-800');
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
    
// Toggle del tema oscuro
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const htmlElement = document.documentElement;

        // Comprobar tema guardado o preferencia del sistema
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        if (savedTheme === 'dark') {
            htmlElement.classList.add('dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }

        themeToggle.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            
            if (htmlElement.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                localStorage.setItem('theme', 'light');
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });

