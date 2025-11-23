
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
    

