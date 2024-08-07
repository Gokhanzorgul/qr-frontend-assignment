import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

export const PageDescription = (props) => {
  const opacity = useSharedValue<number>(0);
  const { text } = props;

  useEffect(() => {
    opacity.value = withSpring(1);
  }, [])

  return (
    <Animated.Text style={{...styles.title, opacity}}>{text}</Animated.Text>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 22,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 28,
    textAlign: 'center',
    color: '#0B172A',
  }
});