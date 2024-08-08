import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, { useSharedValue, withDelay, withSpring } from 'react-native-reanimated';

import { HScale } from '@/utils/layout';
import { PAGE_LODASH_DELAY } from '@/utils/global';

type PageDescriptionPropType = {
  text?: string,
}

export const PageDescription = (props: PageDescriptionPropType) => {
  const opacity = useSharedValue<number>(0);
  const { text } = props;

  useEffect(() => {
    opacity.value = withDelay(PAGE_LODASH_DELAY, withSpring(1));
  }, [])

  return (
    <Animated.Text style={{ ...styles.title, opacity }}>{text}</Animated.Text>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: HScale(22),
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 28,
    textAlign: 'center',
    color: '#0B172A',
  }
});