const darkIcon = document.getElementById('icon');
darkIcon.addEventListener('click', () => {
  const lightMode = './img/lightmode.png'
  const darkMode = 'https://cdn.iconscout.com/icon/free/png-256/night-mode-2-475098.png';
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    icon.src = lightMode;
  } else {
    icon.src = darkMode;
  }
})