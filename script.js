// --- DROPDOWN LOGIC (ONLY ONE OPEN AT A TIME) ---
function toggleHolder(holder) {
  
  const allHolders = document.querySelectorAll('.holder');
  var holderName = holder.querySelector('.holder-name');
  
  allHolders.forEach(h => {
    if (h !== holder) {
      h.querySelector('.holder-content').style.display = 'none';
      const img = h.querySelector('.profile-pic-small');
      if (img) img.style.display = 'block';
      const otherName = h.querySelector('.holder-name');
if (otherName) otherName.style.display = 'block';
    }
  });

  const content = holder.querySelector('.holder-content');
  const imgSmall = holder.querySelector('.profile-pic-small');
  

  if (content.style.display == 'block') {
    content.style.display = 'none';
    imgSmall.style.display = 'block';
    holderName.style.display = 'block';
  } else {
    content.style.display = 'block';
    imgSmall.style.display = 'none';
    holderName.style.display = 'none';
  } 
}






// --- FIXED MULTI‑CARD COUNTDOWN SYSTEM ---
function startCountdown() {
  const timers = document.querySelectorAll('.timer');

  timers.forEach(timer => {
    const target = new Date(Date.UTC(2026, 2, 2, 23, 59, 59)).getTime();

    setInterval(() => {
      const now = Date.now();
      const distance = target - now;

      if (distance <= 0) {
        timer.textContent = 'EXPIRED';
        return;
      }

      const d = new Date(distance);
      const years = d.getUTCFullYear() - 1970;
      const months = d.getUTCMonth();
      const days = d.getUTCDate() - 1;
      const hours = d.getUTCHours();
      const minutes = d.getUTCMinutes();
      const seconds = d.getUTCSeconds();

      timer.textContent = `${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
  });
}

startCountdown();







function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}