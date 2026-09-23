/**
 * Mamta Travels - Ambient Hero Canvas (Expressway Commute Stream Animation)
 */

export function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Light stream particles simulating express highway traffic
  const streams = [];
  const streamCount = 45;

  for (let i = 0; i < streamCount; i++) {
    streams.push({
      x: Math.random() * width,
      y: Math.random() * height,
      length: Math.random() * 80 + 40,
      color: Math.random() > 0.6 ? 'rgba(0, 194, 203, ' : (Math.random() > 0.3 ? 'rgba(56, 189, 248, ' : 'rgba(255, 255, 255, '),
      opacity: Math.random() * 0.45 + 0.15,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    streams.forEach(stream => {
      ctx.beginPath();
      const xEnd = stream.x + Math.cos(stream.angle) * stream.length;
      const yEnd = stream.y + Math.sin(stream.angle) * stream.length;

      const grad = ctx.createLinearGradient(stream.x, stream.y, xEnd, yEnd);
      grad.addColorStop(0, stream.color + '0)');
      grad.addColorStop(0.5, stream.color + stream.opacity + ')');
      grad.addColorStop(1, stream.color + (stream.opacity * 1.5) + ')');

      ctx.strokeStyle = grad;
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      ctx.moveTo(stream.x, stream.y);
      ctx.lineTo(xEnd, yEnd);
      ctx.stroke();

      // Move particle
      stream.x += Math.cos(stream.angle) * stream.speed;
      stream.y += Math.sin(stream.angle) * stream.speed;

      // Wrap around edges
      if (stream.x > width + 100 || stream.y > height + 100) {
        stream.x = Math.random() * width * 0.4 - 100;
        stream.y = -50;
      }
    });

    requestAnimationFrame(render);
  }

  render();
}
