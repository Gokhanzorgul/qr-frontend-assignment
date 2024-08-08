import { Keyframe, Easing } from 'react-native-reanimated';
import { HScale, WScale } from './layout';
const easing = Easing.quad;

export const arrowAnimation = new Keyframe({
  0: {
    originY: HScale(1000),
    originX: WScale(200),
    transform: [{ rotateZ: '90deg' }],
  },
  100: {
    originY: HScale(550),
    originX: WScale(48),
    transform: [{ rotateZ: '0deg' }],
    easing
  },
}).delay(1000).duration(500);

export const pdfAnimation = new Keyframe({
  0: {
    originY: HScale(1000),
    originX: WScale(200),
    transform: [{ rotateZ: '90deg' }],
  },
  100: {
    originY: HScale(475),
    originX: WScale(55),
    transform: [{ rotateZ: '0deg' }],
    easing
  },
}).delay(1500).duration(500);

export const jpgAnimation = new Keyframe({
  0: {
    originY: HScale(1000),
    originX: WScale(133),
  },
  100: {
    originY: HScale(470),
    originX: WScale(133),
    easing
  },
}).delay(2000).duration(500);

export const txtAnimation = new Keyframe({
  0: {
    originY: HScale(1000),
    originX: 0,
    transform: [{ rotateZ: '-90deg' }],
  },
  100: {
    originY: HScale(475),
    originX: WScale(220),
    transform: [{ rotateZ: '0deg' }],
    easing
  },
}).delay(2500).duration(500);