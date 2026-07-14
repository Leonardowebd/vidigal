// TiltImage — a lightweight, dependency-free adaptation of the open-source
// "React Bits" TiltedCard component. No caption/tooltip, no external motion
// lib: plain React state + CSS transform, mouse-follow tilt + hover zoom.
//
// Usage: window.TiltImage({ src, alt, rotateAmplitude, scaleOnHover })

function TiltImage({ src, alt = '', rotateAmplitude = 12, scaleOnHover = 1.08 }) {
  const { useRef, useState } = React;
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, scale: 1 });

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;
    setTilt({ rx: rotationX, ry: rotationY, scale: scaleOnHover });
  }

  function handleLeave() {
    setTilt({ rx: 0, ry: 0, scale: 1 });
  }

  return React.createElement(
    'div',
    {
      ref,
      onMouseMove: handleMove,
      onMouseLeave: handleLeave,
      style: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        perspective: 600,
      },
    },
    React.createElement('img', {
      src,
      alt,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        willChange: 'transform',
        transform: `scale(${tilt.scale}) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transition: tilt.rx === 0 && tilt.ry === 0 ? 'transform 420ms cubic-bezier(0.22, 1, 0.36, 1)' : 'transform 80ms linear',
      },
    })
  );
}

window.TiltImage = TiltImage;
