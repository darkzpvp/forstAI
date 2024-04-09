export default function setBodyColor({color}) {
    document.documentElement.style.setProperty('--bodyColor', color)
}

export function setGradiente() {
    const gradient = `linear-gradient(
      to bottom,
      #40444b 0%,  
      #25292d 30%,
      #282d32 40%,
      #21252a 60%,
      #282c31 80%,
      #343a41 100%  
    )`;
    document.documentElement.style.setProperty('--gradiente', gradient);
  }