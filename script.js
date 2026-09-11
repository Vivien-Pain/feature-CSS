document.addEventListener('DOMContentLoaded', () => {

    const searchInput = document.getElementById('search-input');
    const navItems = document.querySelectorAll('nav ul li');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();

            navItems.forEach(item => {
                const text = item.textContent.toLowerCase();

                if (text.includes(searchTerm)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }


    const themeToggleBtn = document.getElementById('theme-toggle');

    if (themeToggleBtn) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
            themeToggleBtn.textContent = '🌙 Mode Sombre';
        }

        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const isLight = document.body.classList.contains('light-theme');

            if (isLight) {
                localStorage.setItem('theme', 'light');
                themeToggleBtn.textContent = '🌙 Mode Sombre';
            } else {
                localStorage.setItem('theme', 'dark');
                themeToggleBtn.textContent = '☀️ Mode Clair';
            }
        });
    }

    const preElements = document.querySelectorAll('pre');

    preElements.forEach(pre => {
        // Créer le bouton
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = 'Copier';

        pre.appendChild(copyBtn);

        copyBtn.addEventListener('click', () => {
            const codeBlock = pre.querySelector('code');
            const textToCopy = codeBlock ? codeBlock.innerText : pre.innerText.replace('Copier', '');

            navigator.clipboard.writeText(textToCopy).then(() => {
                copyBtn.textContent = 'Copié !';
                copyBtn.style.backgroundColor = '#10b981';

                setTimeout(() => {
                    copyBtn.textContent = 'Copier';
                    copyBtn.style.backgroundColor = '';
                }, 2000);
            }).catch(err => {
                console.error('Erreur lors de la copie : ', err);
                copyBtn.textContent = 'Erreur';
            });
        });
    });

});