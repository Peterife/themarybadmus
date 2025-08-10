// Simple interactions: mobile menu, theme toggle (with persistence)
(function(){
  const body = document.body;
  const themeBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  // apply stored theme
  const stored = localStorage.getItem('site-theme');
  if(stored === 'dark') body.classList.add('dark');

  // set accessible icon state
  function updateThemeIcon(){
    const dark = body.classList.contains('dark');
    themeBtn.setAttribute('aria-pressed', String(dark));
    // update icon path (simple swap of sun/moon style)
    themeIcon.innerHTML = dark ?
      '<path d="M3.55 18.54l1.41-1.41M1 12h2M3.55 5.46L4.96 6.87M12 1v2M20.45 5.46l-1.41 1.41M23 12h-2M20.45 18.54l-1.41-1.41M12 21v-2" stroke="currentColor" stroke-width="1.4" fill="none"/>' :
      '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" stroke-width="1.4" fill="none"/>';
  }
  updateThemeIcon();

  themeBtn.addEventListener('click', function(){
    body.classList.toggle('dark');
    localStorage.setItem('site-theme', body.classList.contains('dark') ? 'dark' : 'light');
    updateThemeIcon();
  });

  // mobile menu toggle
  menuToggle.addEventListener('click', function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    if(mainNav.style.display === 'block'){
      mainNav.style.display = '';
    } else {
      mainNav.style.display = 'block';
      mainNav.style.position = 'absolute';
      mainNav.style.left = '50%';
      mainNav.style.transform = 'translateX(-50%)';
      mainNav.style.top = '66px';
      mainNav.style.background = 'var(--panel-bg)';
      mainNav.style.padding = '12px 18px';
      mainNav.style.borderRadius = '8px';
      mainNav.style.boxShadow = '0 8px 30px rgba(10,20,30,0.12)';
    }
  });

  // close mobile nav if window resized larger
  window.addEventListener('resize', function(){
    if(window.innerWidth > 880){
      mainNav.style.display = '';
    }
  });

})();
