export default function FiveLeafClover({
  size = 240,
  color = "#ffffff",
  roughness = 0.4,
}) {
  const leaves = Array.from({ length: 5 });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
    >
      <defs>
        <filter id="rough">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={roughness}
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="6"
          />
        </filter>
      </defs>

      <g filter="url(#rough)" transform="translate(100 100)">
        {leaves.map((_, i) => (
          <path
            key={i}
            d="
              M0 -55
              C-35 -95, -95 -45, -40 0
              C15 25, -59 45, 0 65
              C5 45, 15 25, 40 0
              C195 45, 35 95,  -45
              Z
            "
            fill={color}
            transform={`rotate(${i * 72}) translate(0 -10)`}
          />
        ))}

       
      </g>
    </svg>
  );
}
