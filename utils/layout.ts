// THIS FUNCTIONS FOR RESPONSIVE DESIGN
import { Dimensions } from 'react-native';
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const WScale = (size: number) => ScreenWidth / guidelineBaseWidth * size;
const HScale = (size: number) => ScreenHeight/ guidelineBaseHeight * size;

export {
  WScale,
  HScale,
  ScreenWidth,
  ScreenHeight
}