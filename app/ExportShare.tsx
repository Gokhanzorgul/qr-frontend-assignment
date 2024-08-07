import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { i18n } from '@/locales/i18n';
import { PageTitle } from '@/components/PageTitle';
import { PageTag } from '@/components/PageTag';
import { PageDescription } from '@/components/PageDescription';
import { CustomButton } from '@/components/CustomButton';
import Animated, { useSharedValue, withSpring, withDelay } from 'react-native-reanimated';
import { arrowAnimation, pdfAnimation, jpgAnimation, txtAnimation } from '@/utils/exportShareAnimationValues';

const DELAY = 1000;
const START_VALUE = -200;

export const ExportShare = () => {
  const bottom = useSharedValue<number>(START_VALUE);

  useEffect(() => {
    bottom.value = withDelay(DELAY / 2, withSpring(bottom.value + 350));
  }, [])

  return (
    <View style={styles.container}>
      <PageTag text={i18n.t("pages.exportShare.tag")} />
      <PageTitle text={i18n.t("pages.exportShare.title")} />
      <PageDescription text={i18n.t("pages.exportShare.description")} />
      <CustomButton style={{ marginTop: 40 }} />

      <View style={styles.animatedContainer}>
        <Animated.Image
          source={require("@/assets/images/exportShare/phone.png")}
          style={{ ...styles.phone, bottom }}>
        </Animated.Image>

        <Animated.Image
          source={require("@/assets/images/exportShare/arrow.png")}
          entering={arrowAnimation}
          style={styles.arrowIcon}
        >
        </Animated.Image>

        <Animated.Image
          source={require("@/assets/images/exportShare/pdf-icon.png")}
          entering={pdfAnimation}
          style={styles.pdfIcon}
        >
        </Animated.Image>

        <Animated.Image
          source={require("@/assets/images/exportShare/jpg-icon.png")}
          entering={jpgAnimation}
          style={styles.jpgIcon}
        >
        </Animated.Image>

        <Animated.Image
          source={require("@/assets/images/exportShare/txt-icon.png")}
          entering={txtAnimation}
          style={styles.txtIcon}
        >
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
  },
  phone: {
    objectFit: "scale-down",
    height: 352,
    width: "100%",
    position: "absolute",
  },
  arrowIcon: {
    height: 25,
    width: 25,
    objectFit: "contain",
    alignItems: 'center',
    justifyContent: 'center',
  },
  pdfIcon: {
    height: 140,
    width: 120,
    objectFit: "contain",
  },
  jpgIcon: {
    height: 120,
    width: 120,
    objectFit: "contain",
  },
  txtIcon: {
    height: 140,
    width: 120,
    objectFit: "contain",
  },
});