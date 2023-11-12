import {Text, View, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';

const PizzaTranslator = (): React.JSX.Element => {
  const [text, setText] = useState('');
  return (
    <View>
      <Text style={styles.heading}>This is Pizza</Text>
      <TextInput
        placeholder="Type here to order pizza"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={styles.maintext}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 42,
  },

  maintext: {
    fontSize: 20,
  },
});
export default PizzaTranslator;
