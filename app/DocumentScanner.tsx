import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

import { i18n } from '@/locales/i18n';
import { CustomButton } from '@/components/CustomButton';
import { PageTitle } from '@/components/PageTitle';
import { PageTag } from '@/components/PageTag';
import { PageDescription } from '@/components/PageDescription';
import { WScale, HScale } from '@/utils/layout';

const IMAGE_HEIGHT = HScale(466);

export const DocumentScanner = () => {

  const bottom = useSharedValue<number>(-IMAGE_HEIGHT);

  useEffect(() => {
    setTimeout(() => {
      bottom.value = withSpring(bottom.value + IMAGE_HEIGHT - HScale(60));
    }, 1000)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <PageTag text={i18n.t("pages.documentScanner.tag")} />
        <PageTitle text={i18n.t("pages.documentScanner.title")} />
        <PageDescription text={i18n.t("pages.documentScanner.description")} />
        <CustomButton style={{ marginTop: HScale(20) }} onPress={() => null} />
      </View>

      <View style={styles.animationContainer}>
        <Animated.Image
          source={require("@/assets/images/documentScanner/phone.png")}
          style={{ ...styles.image, bottom }}>
        </Animated.Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  contentContainer: {
    paddingHorizontal: WScale(24),
    alignItems: "center"
  },
  animationContainer: {
    flex: 1,
    alignItems: "center"
  },
  image: {
    width: WScale(230),
    height: IMAGE_HEIGHT,
    position: "absolute",
    objectFit: "contain"
  }
});