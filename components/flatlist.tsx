import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const data = [
  {Key: 'Prateek'},
  {Key: 'Pragya'},
  {Key: 'Lokesh'},
  {Key: 'Gaurav'},
];
const TestFlatView = (): React.JSX.Element => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Text style={styles.container}>{item.Key}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
});

export default TestFlatView;
