import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: 'green',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './supreme.png',
  fullDecal: './supreme.png',
});

export default state;