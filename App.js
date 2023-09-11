import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View,  } from 'react-native';
import RadioForm, {} from 'react-native-simple-radio-button';
import { Picker } from '@react-native-picker/picker';

export default function App() {

  const [gender, setGender] = useState('male');
  const [gender1, setGender1] = useState('female');
  const [calories, setCalories] = useState(0);
  const [intensity, setIntensity] = useState();
  const [weight, setWeight] = useState('');

  const intensities=Array();
  intensities.push({label: 'light', value: 1.3});
  intensities.push({label: 'usual', value: 1.5});
  intensities.push({label: 'hard', value: 1.7});
  intensities.push({label: 'very hard', value: 2.2});

  const genders = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ];

  const calculate=()=>{
    let result = 0
    if (gender === 'male'){
      result = (879 +10.2 * weight) * intensity} else{
        result = (795+7.18 * weight) * intensity
      }
      setCalories(result)
      }

  return (
    <View style={styles.container}>
      <Text>Calorie counter</Text>
      
      <Text>Weight</Text>
      <View style={styles.field}>
      <TextInput
        onChangeText={text => setWeight(text)}
        placeholder='Enter weight in kilograms...'
          keyboardType='number-pad'
      />
      </View>
      <View style={styles.field}>
        <Text>Intensity level</Text>
        <Picker
          style={styles.intensity}
          onValueChange={(itemValue) => setIntensity(itemValue)}
          selectedValue={intensity}
        >
          {
          intensities.map((intensity,index) => (
            <Picker.Item key={index} label={intensity.label} value={intensity.value} />
  ))
}
        </Picker>
        </View>

    <View style={styles.field}>
      <Text>Gender</Text>
      <RadioForm
        style={styles.radio}
        buttonSize={10}
        radio_props={genders}
        initial={0}
      onPress={value=>setGender(value)}
      />

      </View>
      <View style={styles.field}>
        <Text>{calories.toFixed(0)}</Text>
      </View>

<Button title='Calculate' onPress={calculate}/>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flex: 1,
    paddinTop: 56,
    margin: 8,
  },
  field:{
    marginBottom: 8,
    marginTop: 8,
  },
  radio:{
    marginTop: 8,
  },
  intensity: {
    alignSelf: 'stretch',
  }
  },
);
