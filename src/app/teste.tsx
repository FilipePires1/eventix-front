import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';

const EditableTable = () => {
  const [data, setData] = useState([
    { id: '1', name: 'João', age: '25' },
    { id: '2', name: 'Maria', age: '30' },
    { id: '3', name: 'Carlos', age: '22' },
  ]);

  const handleEdit = (text, itemId, field) => {
    setData(prevData =>
      prevData.map(item =>
        item.id === itemId ? { ...item, [field]: text } : item
      )
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <TextInput
        style={styles.cell}
        value={item.name}
        onChangeText={text => handleEdit(text, item.id, 'name')}
      />
      <TextInput
        style={styles.cell}
        value={item.age}
        onChangeText={text => handleEdit(text, item.id, 'age')}
        keyboardType="numeric"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerCell}>Nome</Text>
        <Text style={styles.headerCell}>Idade</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    padding: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
  },
});

export default EditableTable;
