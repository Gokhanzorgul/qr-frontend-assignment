import React, { useEffect } from 'react';
import { Text, StyleSheet, Pressable, ViewStyle  } from 'react-native';
import Animated, { useSharedValue, withDelay, withSpring } from 'react-native-reanimated';

import { PAGE_LODASH_DELAY } from '@/utils/global';
import { HScale, WScale } from '@/utils/layout';
import { i18n } from '@/locales/i18n';

type CustomButtonPropType = {
  onPress: () => void,
  title?: string,
  style?: ViewStyle
}

export const CustomButton = (props: CustomButtonPropType) => {
  const opacity = useSharedValue<number>(0);
  const { onPress, title = i18n.t("global.learnMore"), style } = props;

  useEffect(() => {
    opacity.value = withDelay(PAGE_LODASH_DELAY,withSpring(1));
  }, [])

  return (
    <Animated.View style={{opacity}}>
      <Pressable style={{ ...styles.button, ...style }} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,0.3)",
    borderRadius: 1.48,
    paddingHorizontal: WScale(15),
    paddingVertical: HScale(10),
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 14.81,
    lineHeight: 17.68,
    fontWeight: "400",
    color: '#0B122A',
  },
});