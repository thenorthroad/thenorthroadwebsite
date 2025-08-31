// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Optional: lightweight email capture (local only for now)
const notifyBtn = document.getElementById('notifyBtn');
if (notifyBtn) {
  notifyBtn.addEventListener('click', () => {
    const email = prompt('Pop your email in and I’ll ping you when the full site is live:');
    if (!email) return;
    try {
      // Very light validation
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!ok) return alert('That email doesn’t look right 🙈');
      // Persist locally for now; wire this to a form backend later
      const list = JSON.parse(localStorage.getItem('notifyList') || '[]');
      if (!list.includes(email)) list.push(email);
      localStorage.setItem('notifyList', JSON.stringify(list));
      alert('Got it — saved locally on this device for now.');
    } catch (e) {
      alert('Sorry, something went wrong.');
    }
  });
}
