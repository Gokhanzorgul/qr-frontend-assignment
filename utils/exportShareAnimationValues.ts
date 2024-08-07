import { Keyframe, Easing } from 'react-native-reanimated';
const easing = Easing.quad;

export const arrowAnimation = new Keyframe({
  0: {
    originY: 500,
    originX: 200,
    transform: [{ rotateZ: '90deg' }],
  },
  100: {
    originY: 290,
    originX: 0,
    transform: [{ rotateZ: '0deg' }],
    easing
  },
}).delay(1000).duration(500);

export const pdfAnimation = new Keyframe({
  0: {
    originY: 500,
    originX: 200,
    transform: [{ rotateZ: '90deg' }],
  },
  100: {
    originY: 200,
    originX: 10,
    transform: [{ rotateZ: '0deg' }],
    easing
  },
}).delay(1500).duration(500);

export const jpgAnimation = new Keyframe({
  0: {
    originY: 500,
    originX: 105,
  },
  100: {
    originY: 190,
    originX: 105,
    easing
  },
}).delay(2000).duration(500);

export const txtAnimation = new Keyframe({
  0: {
    originY: 500,
    originX: 0,
    transform: [{ rotateZ: '-90deg' }],
  },
  100: {
    originY: 200,//dikey
    originX: 210,//yatay
    transform: [{ rotateZ: '0deg' }],
    easing
  },
}).delay(2500).duration(500);