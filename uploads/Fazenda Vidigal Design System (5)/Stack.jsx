// Stack — a draggable photo-stack carousel (adapted from the open-source
// "React Bits" Stack component). Rebuilt on plain React state + CSS
// transforms/transitions (no external motion dependency) so it runs
// self-contained inside a Design Component via <x-import>.
//
// Usage: window.Stack({ cards: [<img/>, <img/>, ...], sensitivity, randomRotation })
// Also supports an imperative handle (via ref) so external arrow buttons
// can drive it: ref.current.next() / ref.current.prev().

const Stack = React.forwardRef(function Stack(
  { cards = [], sensitivity = 180, randomRotation = true, sendToBackOnClick = true },
  ref
) {
  const { useState, useRef, useImperativeHandle } = React;
  const [order, setOrder] = useState(() => cards.map((_, i) => i));
  const dragRef = useRef({ id: null, startX: 0, startY: 0 });
  const [drag, setDrag] = useState({ id: null, x: 0, y: 0 });

  function sendToBack(id) {
    setOrder((prev) => [id, ...prev.filter((i) => i !== id)]);
  }

  useImperativeHandle(ref, () => ({
    // "next": send the current top card to the back, revealing the next one
    next: () => setOrder((prev) => (prev.length ? [prev[prev.length - 1], ...prev.slice(0, -1)] : prev)),
    // "prev": bring the most-recently-backed card back to the top
    prev: () => setOrder((prev) => (prev.length ? [...prev.slice(1), prev[0]] : prev)),
  }));

  function onPointerDown(e, id) {
    e.currentTarget.setPointerCapture(e.pointerId);
    dragRef.current = { id, startX: e.clientX, startY: e.clientY };
  }
  function onPointerMove(e, id) {
    if (dragRef.current.id !== id) return;
    setDrag({ id, x: e.clientX - dragRef.current.startX, y: e.clientY - dragRef.current.startY });
  }
  function onPointerUp(e, id) {
    if (dragRef.current.id !== id) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    dragRef.current = { id: null, startX: 0, startY: 0 };
    setDrag({ id: null, x: 0, y: 0 });
    if (Math.abs(dx) > sensitivity || Math.abs(dy) > sensitivity) sendToBack(id);
    else if (sendToBackOnClick && Math.abs(dx) < 4 && Math.abs(dy) < 4) sendToBack(id);
  }

  return React.createElement(
    'div',
    { style: { position: 'relative', width: '100%', height: '100%', perspective: 700 } },
    order.map((id, stackIndex) => {
      const isDragging = drag.id === id;
      const dx = isDragging ? drag.x : 0;
      const dy = isDragging ? drag.y : 0;
      const depth = order.length - 1 - stackIndex;
      const rot = randomRotation ? (((id * 37) % 10) - 5) : 0;
      return React.createElement(
        'div',
        {
          key: id,
          onPointerDown: (e) => onPointerDown(e, id),
          onPointerMove: (e) => onPointerMove(e, id),
          onPointerUp: (e) => onPointerUp(e, id),
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
            userSelect: 'none',
          },
        },
        cards[id]
      );
    })
  );
});

window.Stack = Stack;
