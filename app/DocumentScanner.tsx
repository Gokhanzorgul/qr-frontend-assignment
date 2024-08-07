import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { i18n } from '@/locales/i18n';
import { PageTitle } from '@/components/PageTitle';
import { PageTag } from '@/components/PageTag';
import { PageDescription } from '@/components/PageDescription';
import { CustomButton } from '@/components/CustomButton';

import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';


export const DocumentScanner = () => {

  const bottom = useSharedValue<number>(0);

  useEffect(() => {
    setTimeout(() => {
      bottom.value = withSpring(bottom.value + 150);
    }, 1000)
  }, [])

  return (
    <View style={{ flexGrow: 1, height: "100%", paddingHorizontal: 24, borderWidth: 1, alignItems: "center" }}>
      <PageTag text={i18n.t("pages.documentScanner.tag")} />
      <PageTitle text={i18n.t("pages.documentScanner.title")} />
      <PageDescription text={i18n.t("pages.documentScanner.description")} />
      <CustomButton style={{ marginTop: 40 }} />

      <View style={styles.container}>
        <Animated.Image
          source={require("@/assets/images/document-scanner-phone.png")}
          style={{ ...styles.image, bottom }}>
        </Animated.Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  image: {
    height: 352,
    width: "100%",
    position: "absolute",
    objectFit:"scale-down"
  }
});