import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

export const PageTitle = (props) => {
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
    marginTop: 16,
    fontWeight: 700,
    fontSize: 32,
    lineHeight: 40,
    textAlign: 'center',
    color: '#0B122A'
  }
});