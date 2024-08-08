import React, { useEffect } from "react";
import Animated, { useSharedValue, withSpring, withDelay } from 'react-native-reanimated';

import { StyleSheet } from "react-native";
import { HScale } from '@/utils/layout';
import { PAGE_LODASH_DELAY } from '@/utils/global';

type PageTitlePropType = {
  text: string;
}

export const PageTitle = (props: PageTitlePropType) => {
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
    marginTop: HScale(16),
    fontWeight: "700",
    fontSize: 32,
    lineHeight: HScale(40),
    textAlign: 'center',
    color: '#0B122A'
  }
});