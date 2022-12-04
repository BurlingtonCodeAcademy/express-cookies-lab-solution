console.log({ message: 'Hey, I am here!' });
const darkButton = document.getElementById('dark-javascript');
const lightButton = document.getElementById('light-javascript');

async function loadTheme(evt) {
  const target = evt.target;
  console.log({ data: target.dataset });
  const theme = target.dataset.theme;
  const response = await window.fetch(`/${theme}-mode`);
  if (response.status === 200) {
    window.location = response.url;
  }
}

darkButton.addEventListener('click', loadTheme);
lightButton.addEventListener('click', loadTheme);
