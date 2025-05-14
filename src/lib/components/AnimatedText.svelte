<script lang="ts">
  const { text }: { text: string } = $props();
</script>

<svg viewBox="0 0 450 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="plaqueMetalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:hsl(var(--primary-hue), 30%, 75%); stop-opacity:1" />
      <stop offset="5%" style="stop-color:hsl(var(--primary-hue), 35%, 65%); stop-opacity:1" />
      <stop offset="50%" style="stop-color:hsl(var(--primary-hue), 40%, 50%); stop-opacity:1" />
      <stop offset="95%" style="stop-color:hsl(var(--primary-hue), 35%, 65%); stop-opacity:1" />
      <stop offset="100%" style="stop-color:hsl(var(--primary-hue), 30%, 75%); stop-opacity:1" />
    </linearGradient>

    <linearGradient id="shineEffectGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:white; stop-opacity:0" />
      <stop offset="45%" style="stop-color:white; stop-opacity:0.45" />
      <stop offset="55%" style="stop-color:white; stop-opacity:0.45" />
      <stop offset="100%" style="stop-color:white; stop-opacity:0" />
    </linearGradient>

    <mask id="plaqueShapeMask">
      <rect x="15" y="15" width="420" height="70" rx="15" ry="15" fill="white" />
    </mask>

    <filter id="etchedTextEffect" x="-10%" y="-10%" width="120%" height="120%">
      <feOffset dx="0.75" dy="0.75" in="SourceAlpha" result="offsetAlphaShadow" />
      <feFlood
        flood-color="hsl(var(--primary-hue), 25%, 20%)"
        flood-opacity="0.75"
        result="floodShadow"
      />
      <feComposite operator="in" in="floodShadow" in2="offsetAlphaShadow" result="coloredShadow" />

      <feOffset dx="-0.75" dy="-0.75" in="SourceAlpha" result="offsetAlphaHighlight" />
      <feFlood
        flood-color="hsl(var(--primary-hue), 35%, 85%)"
        flood-opacity="0.85"
        result="floodHighlight"
      />
      <feComposite
        operator="in"
        in="floodHighlight"
        in2="offsetAlphaHighlight"
        result="coloredHighlight"
      />

      <feMerge>
        <feMergeNode in="coloredShadow" />
        <feMergeNode in="coloredHighlight" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <rect
    x="15"
    y="15"
    width="420"
    height="70"
    rx="15"
    ry="15"
    fill="url(#plaqueMetalGradient)"
    stroke="hsl(var(--primary-hue), 25%, 35%)"
    stroke-width="3"
  />

  <rect
    x="-420"
    y="15"
    width="420"
    height="70"
    fill="url(#shineEffectGradient)"
    mask="url(#plaqueShapeMask)"
  >
    <animate attributeName="x" from="-420" to="420" dur="3s" begin="0s" repeatCount="indefinite" />
  </rect>

  <text
    x="225"
    y="50"
    font-family="'Times New Roman', Times, serif"
    font-size="38"
    fill="hsl(var(--primary-hue), 30%, 40%)"
    text-anchor="middle"
    dominant-baseline="central"
    letter-spacing="0.5"
    font-weight="bold"
    style="filter: url(#etchedTextEffect);"
  >
    {text}
  </text>
</svg>
