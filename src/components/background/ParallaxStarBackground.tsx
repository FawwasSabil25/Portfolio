import { useMemo } from 'react';

const rand = (max: number) => Math.floor(Math.random() * max);
const shadows = (n: number) =>
  Array.from({ length: n }, () => `${rand(3000)}px ${rand(2000)}px #FFF`).join(', ');

export function ParallaxStarBackground() {
  const layers = useMemo(
    () => [
      { size: 1, shadow: shadows(700), dur: 50 },
      { size: 2, shadow: shadows(200), dur: 100 },
      { size: 3, shadow: shadows(100), dur: 150 },
    ],
    []
  );
  return (
    <div className="star-bg" aria-hidden="true">
      {layers.map((l) => (
        <div
          key={l.size}
          className="star-layer"
          style={
            {
              '--size': `${l.size}px`,
              '--shadow': l.shadow,
              '--dur': `${l.dur}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
