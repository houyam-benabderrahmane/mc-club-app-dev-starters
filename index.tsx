
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function TaxCalculator() {
  const [amount, setAmount] = useState('');
  const taxRate = 0.32; 

  const calculateTax = () => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount)) return 'Invalid input';
    return (numAmount * taxRate).toFixed(2);
  };

  const result = calculateTax();
  const isInvalidInput = result === 'Invalid input';

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Tax Calculator</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter a number"
          placeholderTextColor="#999"
          value={amount}
          onChangeText={setAmount}
        />
        <Text style={[styles.result, isInvalidInput ? styles.error : styles.valid]}>
          Tax result: {isInvalidInput ? 'Invalid input' : result}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 30,
    width: '90%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    color: 'blue',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  valid: {
    color: '#2ecc71',
  },
  error: {
    color: '#e74c3c',
  },
});