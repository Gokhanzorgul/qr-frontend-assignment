import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, { useSharedValue, withSpring, withDelay } from 'react-native-reanimated';
import { PAGE_LODASH_DELAY } from '@/utils/global';
import { HScale } from '@/utils/layout';

type PageTagPropType = {
  text?: string,
}

export const PageTag = (props: PageTagPropType) => {
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
    fontWeight: "800",
    fontSize: 16,
    lineHeight: HScale(19),
    textAlign: 'center',
    color: '#0381FF',
    textTransform: 'uppercase'
  }
});