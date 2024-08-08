import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, { useSharedValue, withSpring, withDelay } from 'react-native-reanimated';

import { i18n } from '@/locales/i18n';
import { PageTitle } from '@/components/PageTitle';
import { PageTag } from '@/components/PageTag';
import { PageDescription } from '@/components/PageDescription';
import { CustomButton } from '@/components/CustomButton';
import { HScale, WScale } from '@/utils/layout';

const DELAY = 1500;
const IMAGE_HEIGHT = HScale(466);
const START_VALUE = -IMAGE_HEIGHT;

export const AdvancedFilters = () => {
  const bottom = useSharedValue<number>(START_VALUE);
  const leftBarAnimation = useSharedValue<number>(0);
  const rightBarAnimation = useSharedValue<number>(0);

  useEffect(() => {
    bottom.value = withDelay(DELAY / 2, withSpring(bottom.value + IMAGE_HEIGHT - HScale(80)));
    leftBarAnimation.value = withDelay(DELAY, withSpring(leftBarAnimation.value + 1));
    rightBarAnimation.value = withDelay(DELAY + 500, withSpring(rightBarAnimation.value + 1));
  }, [])

  return (
    <View style={styles.container}>
      <PageTag text={i18n.t("pages.advancedFilters.tag")} />
      <PageTitle text={i18n.t("pages.advancedFilters.title")} />
      <PageDescription text={i18n.t("pages.advancedFilters.description")} />
      <CustomButton style={{ marginTop: HScale(20) }} onPress={() => null} />

      <View style={styles.animatedContainer}>
        <Animated.Image
          source={require("@/assets/images/advancedFilters/phone.png")}
          style={{ ...styles.image, bottom }}>
        </Animated.Image>
      </View>

      <Animated.Image
        source={require("@/assets/images/advancedFilters/advanced-filters-right-bar.png")}
        style={{ ...styles.bar, right: WScale(52), opacity: rightBarAnimation }}>
      </Animated.Image>
      <Animated.Image
        source={require("@/assets/images/advancedFilters/advanced-filters-left-bar.png")}
        style={{ ...styles.bar, opacity: leftBarAnimation, left: WScale(52), }}>
      </Animated.Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: WScale(24),
    alignItems: "center"
  },
  animatedContainer: {
    flex: 1,
    alignItems: "center"
  },
  image: {
    width: WScale(230),
    height: IMAGE_HEIGHT,
    objectFit: "contain",
    position: "absolute",
  },
  bar: {
    objectFit: "scale-down",
    height: HScale(240),
    maxWidth: WScale(28.35),
    position: "absolute",
    bottom: HScale(0)
  },
});