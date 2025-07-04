setInterval(() => {
    const now = new Date();
    const deathDate = new Date(`January 1, ${deathYear} 00:00:00`);
    const diff = deathDate - now;
  
    if (diff <= 0) {
      document.getElementById('countdown').innerHTML = "<h2>💀 Time's Up 💀</h2>";
      return;
    }
  
    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 365;
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  
    document.getElementById('years').innerText = years;
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  }, 1000);
  