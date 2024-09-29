const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
const themeButtons = document.querySelectorAll('.theme-btn');

const getThemePreference = () => {
   if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('theme') ?? 'light';
   }
   return darkMode.matches ? 'dark' : 'light';
};

const updateTheme = () => {
   const themePreference = getThemePreference();
   const isDark = themePreference === 'dark';

   document.documentElement.setAttribute(
      'data-theme',
      isDark ? 'light' : 'dark'
   );
   updateIcon(themePreference);
};

const updateIcon = (themePreference) => {
   themeButtons.forEach((btn) => {
      const id = btn.id.split('-')[0];
      document.getElementById(id + '-btn').style.transform =
         id === themePreference ? 'scale(1)' : 'scale(0)';
   });
};

const setThemePreference = (theme) => {
   localStorage.setItem('theme', theme.split('-')[0] === 'dark' ? 'light' : 'dark');
   updateTheme();
};
