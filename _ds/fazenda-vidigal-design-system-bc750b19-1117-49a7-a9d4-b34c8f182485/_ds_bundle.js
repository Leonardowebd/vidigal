/* @ds-bundle: {"format":4,"namespace":"FazendaVidigalDesignSystem_bc750b","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"FeatureCard","sourcePath":"components/core/FeatureCard.jsx"},{"name":"Footer","sourcePath":"components/core/Footer.jsx"},{"name":"Navbar","sourcePath":"components/core/Navbar.jsx"},{"name":"PhotoTile","sourcePath":"components/core/PhotoTile.jsx"},{"name":"SectionIntro","sourcePath":"components/core/SectionIntro.jsx"}],"sourceHashes":{"components/core/Button.jsx":"205a722d16df","components/core/FeatureCard.jsx":"6b4f223e295b","components/core/Footer.jsx":"b76eae4cf8e5","components/core/Navbar.jsx":"74955934fd92","components/core/PhotoTile.jsx":"2a6ddca3823b","components/core/SectionIntro.jsx":"4843d1f0bfaf","deploy/Stack.jsx":"3edb0f1f0aed","deploy/TiltImage.jsx":"f529824aeac5","deploy/ds-base.js":"d84870336ec5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FazendaVidigalDesignSystem_bc750b = window.FazendaVidigalDesignSystem_bc750b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the site's single call-to-action shape: pill-radius rectangle,
 * italic semibold label. `primary` is solid maroon; `secondary` is a
 * hairline-inset outline meant to sit on top of photography; `secondary-onlight`
 * is the same outline adapted for the cream surface (intentional addition —
 * the source only shows secondary-on-photo).
 */
function Button({
  variant = 'primary',
  size = 'lg',
  as = 'button',
  href,
  children,
  style,
  ...rest
}) {
  const Tag = href ? 'a' : as;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 'var(--radius-sm)',
    padding: size === 'sm' ? '16px 40px' : '20px 56px',
    font: size === 'sm' ? 'var(--text-button-sm)' : 'var(--text-button)',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none',
    boxSizing: 'border-box',
    transition: 'background-color 150ms ease, opacity 150ms ease, transform 100ms ease'
  };
  const variants = {
    primary: {
      backgroundColor: 'var(--action-primary-bg)',
      color: 'var(--action-primary-text)'
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--action-secondary-text)',
      boxShadow: 'var(--shadow-inset-hairline)'
    },
    'secondary-onlight': {
      backgroundColor: 'transparent',
      color: 'var(--action-secondary-text-onlight)',
      boxShadow: 'inset 0 0 0 1px var(--action-secondary-border-onlight)'
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (variant === 'primary') e.currentTarget.style.backgroundColor = 'var(--action-primary-bg-hover)';else e.currentTarget.style.opacity = '0.75';
    },
    onMouseLeave: e => {
      if (variant === 'primary') e.currentTarget.style.backgroundColor = 'var(--action-primary-bg)';else e.currentTarget.style.opacity = '1';
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.98)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Footer.jsx
try { (() => {
/**
 * Footer — photo-backed closing band with the two brand marks (Fazenda
 * Vidigal + V. Vidigal signature) and the site's nav/contact lists, from
 * the source copy doc's "## RODAPÉ" block.
 */
function Footer({
  photo = 'assets/photos/footer-vista.jpg',
  logo = 'assets/logo-fazenda-vidigal.png',
  signature = 'assets/logo-v-vidigal.png',
  navLinks = ['Fazenda', 'Encontro Nacional do Café', 'Turismo Rural', 'Valéria Vidigal', 'Café Vidigal'],
  contact = ['WhatsApp', '@fazendavidigal', '@cafevidigal', '@valeriavidigal'],
  address = 'Fazenda Vidigal · Barra do Choça · Planalto da Conquista · Bahia',
  tagline = 'Fazenda Vidigal — Café feito com arte.'
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      position: 'relative',
      width: '100%',
      minHeight: 420,
      borderRadius: '0 0 37px 37px',
      overflow: 'hidden',
      background: `linear-gradient(rgba(35,1,0,0.55),rgba(35,1,0,0.72)), url(${photo}) center / cover no-repeat`,
      color: 'var(--white)',
      boxSizing: 'border-box',
      padding: '48px 60px',
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Fazenda Vidigal",
    style: {
      height: 40,
      background: '#fff',
      borderRadius: 6,
      padding: '4px 8px'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: signature,
    alt: "V. Vidigal",
    style: {
      height: 40,
      background: '#fff',
      borderRadius: 6,
      padding: '4px 8px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      fontSize: 16
    }
  }, "Navegue"), navLinks.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: 'var(--white)',
      opacity: 0.85,
      textDecoration: 'none',
      font: 'var(--text-body)',
      fontSize: 16
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      fontSize: 16
    }
  }, "Contato"), contact.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: 'var(--white)',
      opacity: 0.85,
      textDecoration: 'none',
      font: 'var(--text-body)',
      fontSize: 16
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body)',
      fontSize: 16
    }
  }, address), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-heading-sm)',
      fontSize: 16
    }
  }, tagline)));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Footer.jsx", error: String((e && e.message) || e) }); }

// components/core/Navbar.jsx
try { (() => {
/**
 * Navbar — logo mark + text nav links + primary CTA, from the source
 * copy doc's "## NAV" block (Fazenda · Encontro · Turismo · Valéria · Café Vidigal).
 */
function Navbar({
  logo = 'assets/logo-fazenda-vidigal.png',
  links = [],
  ctaLabel = 'Agendar visita',
  tone = 'light'
}) {
  const color = tone === 'light' ? 'var(--white)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      padding: '20px 40px',
      boxSizing: 'border-box',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Fazenda Vidigal",
    style: {
      height: 44,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      flexWrap: 'nowrap'
    }
  }, links.map(label => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: `#${label.toLowerCase()}`,
    style: {
      font: 'var(--text-button-sm)',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 16,
      textDecoration: 'none',
      color,
      whiteSpace: 'nowrap',
      flexShrink: 0
    }
  }, label)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: tone === 'light' ? 'secondary' : 'primary',
    size: "sm",
    style: {
      flexShrink: 0,
      whiteSpace: 'nowrap'
    }
  }, ctaLabel)));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/core/PhotoTile.jsx
try { (() => {
/**
 * PhotoTile — a single rounded photograph, the atomic unit of the farm's
 * image gallery grid (Rota do Café strip, Valéria gallery wall).
 */
function PhotoTile({
  src,
  alt = '',
  radius = 0,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '1 / 1',
      borderRadius: radius,
      overflow: 'hidden',
      background: `url(${src}) center / cover no-repeat`,
      ...style
    },
    role: "img",
    "aria-label": alt
  });
}
Object.assign(__ds_scope, { PhotoTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PhotoTile.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionIntro.jsx
try { (() => {
/**
 * SectionIntro — the copy stack repeated at the top of every section on the
 * marketing site: a bold eyebrow label, an italic semibold headline, and a
 * regular body paragraph (supports blank-line-separated paragraphs).
 */
function SectionIntro({
  eyebrow,
  heading,
  body,
  tone = 'dark',
  maxWidth = 596,
  style
}) {
  const paragraphs = (body || '').split('\n\n');
  const color = tone === 'light' ? 'var(--text-on-dark)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      color
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, heading && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--text-display)',
      color,
      fontSize: 40
    }
  }, heading), paragraphs.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      font: 'var(--text-body)',
      lineHeight: 1.4,
      color,
      opacity: 0.9
    }
  }, p))));
}
Object.assign(__ds_scope, { SectionIntro });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionIntro.jsx", error: String((e && e.message) || e) }); }

// components/core/FeatureCard.jsx
try { (() => {
/**
 * FeatureCard — a photo-backed section with a solid text panel floated on
 * top (cream or olive). This is the "family portrait / Giano quote" pattern:
 * full-bleed photography behind, a rounded panel carrying the copy.
 */
function FeatureCard({
  photo,
  eyebrow,
  heading,
  body,
  panelTone = 'cream',
  panelAlign = 'left',
  height = 700
}) {
  const panelBg = panelTone === 'olive' ? 'var(--surface-wash-olive)' : 'var(--surface-card)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height,
      borderRadius: 20,
      overflow: 'hidden',
      background: `url(${photo}) center / cover no-repeat`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: panelAlign === 'right' ? 'flex-end' : 'flex-start',
      boxSizing: 'border-box',
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: panelBg,
      borderRadius: 20,
      padding: 40,
      maxWidth: 500,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionIntro, {
    eyebrow: eyebrow,
    heading: heading,
    body: body,
    tone: "dark",
    maxWidth: '100%'
  })));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// deploy/Stack.jsx
try { (() => {
// Stack — a draggable photo-stack carousel (adapted from the open-source
// "React Bits" Stack component). Rebuilt on plain React state + CSS
// transforms/transitions (no external motion dependency) so it runs
// self-contained inside a Design Component via <x-import>.
//
// Usage: window.Stack({ cards: [<img/>, <img/>, ...], sensitivity, randomRotation })
// Also supports an imperative handle (via ref) so external arrow buttons
// can drive it: ref.current.next() / ref.current.prev().

const Stack = React.forwardRef(function Stack({
  cards = [],
  sensitivity = 180,
  randomRotation = true,
  sendToBackOnClick = true
}, ref) {
  const {
    useState,
    useRef,
    useImperativeHandle
  } = React;
  const [order, setOrder] = useState(() => cards.map((_, i) => i));
  const dragRef = useRef({
    id: null,
    startX: 0,
    startY: 0
  });
  const [drag, setDrag] = useState({
    id: null,
    x: 0,
    y: 0
  });
  function sendToBack(id) {
    setOrder(prev => [id, ...prev.filter(i => i !== id)]);
  }
  useImperativeHandle(ref, () => ({
    // "next": send the current top card to the back, revealing the next one
    next: () => setOrder(prev => prev.length ? [prev[prev.length - 1], ...prev.slice(0, -1)] : prev),
    // "prev": bring the most-recently-backed card back to the top
    prev: () => setOrder(prev => prev.length ? [...prev.slice(1), prev[0]] : prev)
  }));
  function onPointerDown(e, id) {
    e.currentTarget.setPointerCapture(e.pointerId);
    dragRef.current = {
      id,
      startX: e.clientX,
      startY: e.clientY
    };
  }
  function onPointerMove(e, id) {
    if (dragRef.current.id !== id) return;
    setDrag({
      id,
      x: e.clientX - dragRef.current.startX,
      y: e.clientY - dragRef.current.startY
    });
  }
  function onPointerUp(e, id) {
    if (dragRef.current.id !== id) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    dragRef.current = {
      id: null,
      startX: 0,
      startY: 0
    };
    setDrag({
      id: null,
      x: 0,
      y: 0
    });
    if (Math.abs(dx) > sensitivity || Math.abs(dy) > sensitivity) sendToBack(id);else if (sendToBackOnClick && Math.abs(dx) < 4 && Math.abs(dy) < 4) sendToBack(id);
  }
  return React.createElement('div', {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      perspective: 700
    }
  }, order.map((id, stackIndex) => {
    const isDragging = drag.id === id;
    const dx = isDragging ? drag.x : 0;
    const dy = isDragging ? drag.y : 0;
    const depth = order.length - 1 - stackIndex;
    const rot = randomRotation ? id * 37 % 10 - 5 : 0;
    return React.createElement('div', {
      key: id,
      onPointerDown: e => onPointerDown(e, id),
      onPointerMove: e => onPointerMove(e, id),
      onPointerUp: e => onPointerUp(e, id),
      style: {
        position: 'absolute',
        inset: 0,
        transform: `translate(${dx}px, ${dy}px) rotate(${depth * 4 + rot}deg) scale(${1 - depth * 0.06})`,
        transformOrigin: '90% 90%',
        transition: isDragging ? 'none' : 'transform 420ms cubic-bezier(0.22, 1, 0.36, 1)',
        zIndex: stackIndex,
        cursor: isDragging ? 'grabbing' : 'grab',
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: '0 16px 32px rgba(35,1,0,0.28)',
        touchAction: 'none',
        userSelect: 'none'
      }
    }, cards[id]);
  }));
});
window.Stack = Stack;
})(); } catch (e) { __ds_ns.__errors.push({ path: "deploy/Stack.jsx", error: String((e && e.message) || e) }); }

// deploy/TiltImage.jsx
try { (() => {
// TiltImage — a lightweight, dependency-free adaptation of the open-source
// "React Bits" TiltedCard component. No caption/tooltip, no external motion
// lib: plain React state + CSS transform, mouse-follow tilt + hover zoom.
//
// Usage: window.TiltImage({ src, alt, rotateAmplitude, scaleOnHover })

function TiltImage({
  src,
  alt = '',
  rotateAmplitude = 12,
  scaleOnHover = 1.08
}) {
  const {
    useRef,
    useState
  } = React;
  const ref = useRef(null);
  const [tilt, setTilt] = useState({
    rx: 0,
    ry: 0,
    scale: 1
  });
  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    const rotationX = offsetY / (rect.height / 2) * -rotateAmplitude;
    const rotationY = offsetX / (rect.width / 2) * rotateAmplitude;
    setTilt({
      rx: rotationX,
      ry: rotationY,
      scale: scaleOnHover
    });
  }
  function handleLeave() {
    setTilt({
      rx: 0,
      ry: 0,
      scale: 1
    });
  }
  return React.createElement('div', {
    ref,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    style: {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      perspective: 600
    }
  }, React.createElement('img', {
    src,
    alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      willChange: 'transform',
      transform: `scale(${tilt.scale}) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
      transition: tilt.rx === 0 && tilt.ry === 0 ? 'transform 420ms cubic-bezier(0.22, 1, 0.36, 1)' : 'transform 80ms linear'
    }
  }));
}
window.TiltImage = TiltImage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "deploy/TiltImage.jsx", error: String((e && e.message) || e) }); }

// deploy/ds-base.js
try { (() => {
// Vercel static build — loads the design system from this same folder.
(() => {
  const base = '.';
  for (const p of ["styles.css"]) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => console.error('ds-base.js: failed to load ' + s.src);
  document.head.appendChild(s);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "deploy/ds-base.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.PhotoTile = __ds_scope.PhotoTile;

__ds_ns.SectionIntro = __ds_scope.SectionIntro;

})();
