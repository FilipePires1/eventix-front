import { TextInput,  TextInputProps, Text, StyleSheet, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export function SearchBar({ ...rest }: TextInputProps){
return (
  
    <View style={styles.container}>
      <TextInput style={styles.input} {...rest}/>
      <FontAwesome name="search" size={20} color="#000" style={styles.icon} />
</View>
)
}

const styles = StyleSheet.create({
   container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF5C8',
    borderRadius: 11,
    paddingHorizontal: 10,
    height: 50,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
});


export default SearchBar;