<script lang="ts">
  const { text }: { text: string } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200">
  <defs>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="10" result="blur" />
      <feFlood flood-color="#ff00ff" flood-opacity="0.7" result="glowColor" />
      <feComposite in="glowColor" in2="blur" operator="in" result="softGlow" />
      <feMerge>
        <feMergeNode in="softGlow" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ff4500">
        <animate
          attributeName="stop-color"
          values="#ff4500; #ffd700; #00ff00; #00bfff; #ff00ff; #ff4500"
          dur="8s"
          repeatCount="indefinite"
        />
      </stop>
      <stop offset="100%" stop-color="#ffd700">
        <animate
          attributeName="stop-color"
          values="#ffd700; #00ff00; #00bfff; #ff00ff; #ff4500; #ffd700"
          dur="8s"
          repeatCount="indefinite"
        />
      </stop>
    </linearGradient>

    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#000033">
        <animate
          attributeName="stop-color"
          values="#000033; #000066; #000088; #000066; #000033"
          dur="10s"
          repeatCount="indefinite"
        />
      </stop>
      <stop offset="100%" stop-color="#000055">
        <animate
          attributeName="stop-color"
          values="#000055; #000088; #0000aa; #000088; #000055"
          dur="10s"
          repeatCount="indefinite"
        />
      </stop>
    </linearGradient>

    <radialGradient id="pulseGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" stop-color="#5500ff" stop-opacity="0.3">
        <animate
          attributeName="stop-opacity"
          values="0.3;0.7;0.3"
          dur="4s"
          repeatCount="indefinite"
        />
      </stop>
      <stop offset="100%" stop-color="#000033" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgGradient)" />

  <circle cx="250" cy="100" r="150" fill="url(#pulseGlow)">
    <animate attributeName="r" values="100;150;100" dur="4s" repeatCount="indefinite" />
    <animate attributeName="opacity" values="0.6;0.8;0.6" dur="4s" repeatCount="indefinite" />
  </circle>

  <g id="stars">
    <circle cx="50" cy="50" r="2" fill="white">
      <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="150" cy="30" r="1.5" fill="white">
      <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="250" cy="70" r="2" fill="white">
      <animate attributeName="opacity" values="0.2;1;0.2" dur="4s" repeatCount="indefinite" />
    </circle>
    <circle cx="350" cy="40" r="1.5" fill="white">
      <animate attributeName="opacity" values="0.2;1;0.2" dur="3.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="450" cy="60" r="2" fill="white">
      <animate attributeName="opacity" values="0.2;1;0.2" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="100" cy="150" r="1.5" fill="white">
      <animate attributeName="opacity" values="0.2;1;0.2" dur="3.2s" repeatCount="indefinite" />
    </circle>
    <circle cx="200" cy="170" r="2" fill="white">
      <animate attributeName="opacity" values="0.2;1;0.2" dur="4.2s" repeatCount="indefinite" />
    </circle>
    <circle cx="300" cy="130" r="1.5" fill="white">
      <animate attributeName="opacity" values="0.2;1;0.2" dur="2.8s" repeatCount="indefinite" />
    </circle>
    <circle cx="400" cy="160" r="2" fill="white">
      <animate attributeName="opacity" values="0.2;1;0.2" dur="3.7s" repeatCount="indefinite" />
    </circle>

    <g>
      <line x1="0" y1="40" x2="40" y2="0" stroke="white" stroke-width="2" opacity="0">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="5s"
          begin="1s"
          repeatCount="indefinite"
        />
        <animate attributeName="x1" values="0;500" dur="5s" begin="1s" repeatCount="indefinite" />
        <animate attributeName="y1" values="40;200" dur="5s" begin="1s" repeatCount="indefinite" />
        <animate attributeName="x2" values="40;540" dur="5s" begin="1s" repeatCount="indefinite" />
        <animate attributeName="y2" values="0;160" dur="5s" begin="1s" repeatCount="indefinite" />
      </line>
      <line x1="500" y1="30" x2="460" y2="0" stroke="white" stroke-width="2" opacity="0">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="6s"
          begin="3s"
          repeatCount="indefinite"
        />
        <animate attributeName="x1" values="500;0" dur="6s" begin="3s" repeatCount="indefinite" />
        <animate attributeName="y1" values="30;190" dur="6s" begin="3s" repeatCount="indefinite" />
        <animate attributeName="x2" values="460;-40" dur="6s" begin="3s" repeatCount="indefinite" />
        <animate attributeName="y2" values="0;160" dur="6s" begin="3s" repeatCount="indefinite" />
      </line>
    </g>
  </g>

  <g filter="url(#glow)">
    <text
      x="50%"
      y="50%"
      font-family="Impact, fantasy"
      font-size="124px"
      fill="url(#textGradient)"
      stroke="#ffffff"
      stroke-width="2"
      text-anchor="middle"
      dominant-baseline="middle"
    >
      {text}
    </text>
  </g>

  <g id="particles">
    <circle cx="250" cy="110" r="5" fill="#ff00ff">
      <animate attributeName="cx" values="230;270;230" dur="2s" repeatCount="indefinite" />
      <animate attributeName="cy" values="110;90;110" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="270" cy="120" r="4" fill="#00ffff">
      <animate attributeName="cx" values="270;230;270" dur="2.5s" repeatCount="indefinite" />
      <animate attributeName="cy" values="120;100;120" dur="2.5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0;1" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="230" cy="115" r="6" fill="#ffff00">
      <animate attributeName="cx" values="230;260;230" dur="1.8s" repeatCount="indefinite" />
      <animate attributeName="cy" values="115;140;115" dur="1.8s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0;1" dur="1.8s" repeatCount="indefinite" />
    </circle>

    <circle cx="180" cy="105" r="4" fill="#00ff00">
      <animate attributeName="cx" values="180;150;180" dur="2.2s" repeatCount="indefinite" />
      <animate attributeName="cy" values="105;125;105" dur="2.2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0;1" dur="2.2s" repeatCount="indefinite" />
    </circle>
    <circle cx="320" cy="110" r="5" fill="#ff8800">
      <animate attributeName="cx" values="320;350;320" dur="2.3s" repeatCount="indefinite" />
      <animate attributeName="cy" values="110;90;110" dur="2.3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0;1" dur="2.3s" repeatCount="indefinite" />
    </circle>
  </g>

  <g id="sparkles">
    <circle cx="170" cy="95" r="2" fill="#ffffff">
      <animate attributeName="r" values="1;3;1" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;1;0" dur="0.6s" repeatCount="indefinite" />
    </circle>
    <circle cx="330" cy="115" r="2" fill="#ffffff">
      <animate attributeName="r" values="1;3;1" dur="0.7s" begin="0.2s" repeatCount="indefinite" />
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="0.7s"
        begin="0.2s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="250" cy="80" r="2" fill="#ffffff">
      <animate attributeName="r" values="1;4;1" dur="0.5s" begin="0.3s" repeatCount="indefinite" />
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="0.5s"
        begin="0.3s"
        repeatCount="indefinite"
      />
    </circle>

    <circle cx="290" cy="140" r="2" fill="#ffffff">
      <animate attributeName="r" values="1;3;1" dur="0.8s" begin="0.1s" repeatCount="indefinite" />
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="0.8s"
        begin="0.1s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="210" cy="130" r="2" fill="#ffffff">
      <animate attributeName="r" values="1;3;1" dur="0.65s" begin="0.4s" repeatCount="indefinite" />
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="0.65s"
        begin="0.4s"
        repeatCount="indefinite"
      />
    </circle>
  </g>
</svg>
