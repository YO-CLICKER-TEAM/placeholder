import './style.css'
import title from './title.png'
import backgroundlogo from './bg.png'
document.querySelector('#app').innerHTML = `
      <div class="background" id="background">
        <img src="${backgroundlogo}" alt="Background">
    </div>
    <div class="overlay"></div>
    <div class="logo-container" id="logoContainer">
        <img src="${title}" alt="Clicking Soon">
    </div>
    <div class="popup" id="popup">
        <div class="popup-content">
            <span class="close-btn" id="closeBtn">&times;</span>
            <h2>Welcome to our upcoming project!</h2>
            <p>We're working hard to bring you something amazing. Stay tuned for more information and exciting updates.</p>
            <p>In the meantime, feel free to follow us on social media or sign up for our newsletter to be the first to know when we launch!</p>
            <a href="https://discord.gg/CM74aYnmz6" target="_blank" rel="noopener noreferrer" class="discord-btn">
                <svg class="discord-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" fill="#ffffff">
                    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                </svg>
                Join our Discord Server
            </a>
        </div>
    </div>
`

const logoContainer = document.getElementById('logoContainer');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
const background = document.getElementById('background');

logoContainer.addEventListener('click', () => {
    popup.style.display = 'block';
    setTimeout(() => {
        popup.classList.add('active');
    }, 10);
});

function closePopup() {
    popup.classList.remove('active');
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300);
}

closeBtn.addEventListener('click', closePopup);

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        closePopup();
    }
});

// Background movement
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    const moveX = (mouseX - 0.5) * 20; // Adjust the multiplier to control movement intensity
    const moveY = (mouseY - 0.5) * 20;
    
    background.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
});