import React, { useState } from "react";
import { View, Text, Pressable, TextInput, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementByAmountAsync,
} from "./store/counterSlice";

function CounterFeature() {
  const [incrementAmount, setIncrementAmount] = useState("2");

  const count = useSelector((state) => state.counter.value);
  const isPending = useSelector((state) => state.counter.isPending);
  const error = useSelector((state) => state.counter.error);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => {
            dispatch(increment());
          }}
        >
          <Text style={styles.buttonText}>Increment</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            dispatch(decrement());
          }}
        >
          <Text style={styles.buttonText}>Decrement</Text>
        </Pressable>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setIncrementAmount}
          value={incrementAmount}
          keyboardType="numeric"
        />
        <Pressable
          style={[styles.button, styles.addButton]}
          onPress={() => {
            dispatch(incrementByAmount(Number(incrementAmount) || 0));
          }}
        >
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.addButton]}
          onPress={() => {
            dispatch(incrementByAmountAsync(Number(incrementAmount) || 0));
          }}
        >
          <Text style={styles.buttonText}>Add Async</Text>
        </Pressable>
      </View>
      <Text style={styles.counterText}>
        {isPending ? "Evaluating..." : count}
      </Text>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  addButton: {
    marginLeft: 10, // Adds space between the input and the button
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  input: {
    height: 40,
    width: "50%", // Adjust width as necessary
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
  counterText: {
    fontSize: 32,
    margin: 8,
  },
  errorText: {
    fontSize: 26,
    margin: 8,
    color: "red",
  },
});

export default CounterFeature;
