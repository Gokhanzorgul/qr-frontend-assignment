import React, { useEffect } from 'react';
import { Image, View, ImageSourcePropType } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const radius = 45;

type TabAnimatedIconPropType = {
  isSelected: boolean;
  icon: ImageSourcePropType;
}

export const TabAnimatedIcon = (props: TabAnimatedIconPropType) => {
  const { icon, isSelected } = props;
  const strokeOffset = useSharedValue(radius * Math.PI * 2);

  const animatedCircleProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: withTiming(strokeOffset.value, { duration: isSelected ? 800 : 0 }),
    };
  }, [isSelected]);

  useEffect(() => {
    if (isSelected) {
      strokeOffset.value = 0;
    } else {
      strokeOffset.value = 283
    }
  }, [isSelected]);

  return (
    <View>
      <View style={{
        position: "absolute",
        display: "flex",
        width: 56,
        height: 56,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
      }}>
        <Image
          style={{ width: 32, height: 32 }}
          source={icon}
        />
      </View>
      <Svg height="56" width="56" viewBox="0 0 100 100">
        <AnimatedCircle
          animatedProps={animatedCircleProps}
          cx="50"
          cy="50"
          r="45"
          stroke="#0381FF"
          strokeWidth="2"
          fill="rgba(255,255,255,0.2)"
          strokeDasharray={`${radius * Math.PI * 2}`}
        />
      </Svg>
    </View>

  )
}