import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import PizzaTranslator from './components/Pizza';
// import TestScrollView from './components/scrollView';
import TestFlatView from './components/flatlist';

const App = (): React.JSX.Element => {
  return (
    <ScrollView>
      <Text>Hello</Text>
      <View style={styles.container}>
        <PizzaTranslator />
        {/* <TestScrollView /> */}
        <TestFlatView />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
  },
});

export default App;
