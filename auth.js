const params = new URLSearchParams(window.location.search);
const token = params.get('token');

if (token) {
  localStorage.setItem('auth_token', token);
  window.history.replaceState({}, document.title, "/");
}

const storedToken = localStorage.getItem('auth_token');
if (storedToken) {
  try {
    const payload = JSON.parse(atob(storedToken.split('.')[1]));
    const avatarUrl = payload.avatar;

    let avatarImg = document.getElementById('steam-avatar');
    if (!avatarImg) {
      avatarImg = document.createElement('img');
      avatarImg.id = 'steam-avatar';
      avatarImg.style.position = 'absolute';
      avatarImg.style.top = '10px';
      avatarImg.style.right = '10px';
      avatarImg.style.width = '40px';
      avatarImg.style.height = '40px';
      avatarImg.style.borderRadius = '50%';
      avatarImg.style.cursor = 'pointer';
      document.body.appendChild(avatarImg);
    }
    avatarImg.src = avatarUrl;

    avatarImg.onclick = () => {
      localStorage.removeItem('auth_token');
      window.location.reload();
    };
  } catch (err) {
    console.error('Invalid token:', err);
    localStorage.removeItem('auth_token');
  }
}
