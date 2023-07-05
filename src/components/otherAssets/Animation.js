import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export const Animation = ({ src, size }) => {
  return (
    <Player
      loop
      autoplay
      src={src}
      speed={1}
      style={{
        height: size,
        width: size
      }}
      background="transparent" />
  );
}
