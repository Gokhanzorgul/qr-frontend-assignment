import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { i18n } from '../locales/i18n';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

export const PageTag = (props) => {
  const opacity = useSharedValue<number>(0);
  const { text } = props;

  useEffect(() => {
    opacity.value = withSpring(1);
  }, [])

  return (
    <Animated.Text style={{ ...styles.title, opacity }}>{text}</Animated.Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 800,
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#0381FF',
    textTransform: 'uppercase'
  }
});