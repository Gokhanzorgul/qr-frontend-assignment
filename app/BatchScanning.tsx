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

export const BatchScanning = () => {
  const bottom = useSharedValue<number>(START_VALUE);
  const pageOneAnimation = useSharedValue<number>(START_VALUE);
  const pageTwoAnimation = useSharedValue<number>(START_VALUE);
  const pageThreeAnimation = useSharedValue<number>(START_VALUE);

  useEffect(() => {
    bottom.value = withDelay(DELAY / 2, withSpring(bottom.value + 350));
    pageOneAnimation.value = withDelay(DELAY, withSpring(pageOneAnimation.value + 320));
    pageTwoAnimation.value = withDelay(DELAY + 500, withSpring(pageTwoAnimation.value + 300));
    pageThreeAnimation.value = withDelay(DELAY + 1000, withSpring(pageThreeAnimation.value + 280));
  }, [])

  return (
    <View style={styles.container}>
      <PageTag text={i18n.t("pages.batchScanning.tag")} />
      <PageTitle text={i18n.t("pages.batchScanning.title")} />
      <PageDescription text={i18n.t("pages.batchScanning.description")} />
      <CustomButton style={{ marginTop: 40 }} />

      <View style={styles.animatedContainer}>
        <Animated.Image
          source={require("@/assets/images/batchScanning/phone.png")}
          style={{ ...styles.image, bottom }}>
        </Animated.Image>

        <Animated.Image
          source={require("@/assets/images/batchScanning/page-three.png")}
          style={{ ...styles.page, bottom: pageOneAnimation, height: 310 }}>
        </Animated.Image>

        <Animated.Image
          source={require("@/assets/images/batchScanning/page-three.png")}
          style={{ ...styles.page, bottom: pageTwoAnimation, height: 310 }}>
        </Animated.Image>

        <Animated.Image
          source={require("@/assets/images/batchScanning/page-three.png")}
          style={{ ...styles.page, bottom: pageThreeAnimation }}>
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
    borderWidth: 1,
    alignItems: "center"
  },
  animatedContainer: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  image: {
    objectFit: "scale-down",
    height: 352,
    width: "100%",
    position: "absolute",
  },
  page: {
    objectFit: "scale-down",
    height: 310,
    width: "100%",
    position: "absolute",
  },
});