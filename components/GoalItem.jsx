import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const GoalItem = (props) => {
  return (
    <View style={styles.goaItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goaItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    textAlign: "center",
  },
  goalText: {
    padding: 8,
    textAlign: "center",
    color: "white",
    fontWeight: "600",
  },
});

export default GoalItem;
