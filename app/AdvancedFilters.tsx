import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { i18n } from '@/locales/i18n';
import { PageTitle } from '@/components/PageTitle';
import { PageTag } from '@/components/PageTag';
import { PageDescription } from '@/components/PageDescription';
import { CustomButton } from '@/components/CustomButton';
import Animated, { useSharedValue, withSpring, withDelay } from 'react-native-reanimated';

const DELAY = 1500;
const START_VALUE = -200;

export const AdvancedFilters = () => {
  const bottom = useSharedValue<number>(START_VALUE);
  const leftBarAnimation = useSharedValue<number>(0);
  const rightBarAnimation = useSharedValue<number>(0);

  useEffect(() => {
    bottom.value = withDelay(DELAY / 2, withSpring(bottom.value + 350));
    leftBarAnimation.value = withDelay(DELAY, withSpring(leftBarAnimation.value + 1));
    rightBarAnimation.value = withDelay(DELAY + 500, withSpring(rightBarAnimation.value + 1));
  }, [])

  return (
    <View style={styles.container}>
      <PageTag text={i18n.t("pages.advancedFilters.tag")} />
      <PageTitle text={i18n.t("pages.advancedFilters.title")} />
      <PageDescription text={i18n.t("pages.advancedFilters.description")} />
      <CustomButton style={{ marginTop: 40 }} />

      <View style={styles.animatedContainer}>
        <Animated.Image
          source={require("@/assets/images/advancedFilters/phone.png")}
          style={{ ...styles.image, bottom }}>
        </Animated.Image>

        <Animated.Image
          source={require("@/assets/images/advancedFilters/advanced-filters-left-bar.png")}
          style={{ ...styles.bar, left: 20, opacity: leftBarAnimation }}>
        </Animated.Image>

        <Animated.Image
          source={require("@/assets/images/advancedFilters/advanced-filters-right-bar.png")}
          style={{ ...styles.bar, right: 20, opacity: rightBarAnimation }}>
        </Animated.Image>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: "100%",
    paddingHorizontal: 24,
    alignItems: "center"
  },
  animatedContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row"
  },
  image: {
    objectFit: "scale-down",
    height: 352,
    width: "100%",
    position: "absolute",
  },
  bar: {
    objectFit: "scale-down",
    height: 240,
    maxWidth: 28.35,
    width: "100%",
    position: "absolute",
  },
});