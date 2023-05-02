import React from 'react'

export const NoiseFilter = () => {
  return (
    <svg aria-hidden="true">
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="6.29"
          numOctaves="6"
          stitchTiles="stitch"
        ></feTurbulence>
      </filter>
    </svg>
  )
}
