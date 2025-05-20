import { TextInput,  TextInputProps, Text, StyleSheet } from 'react-native'

export function Input({ ...rest }: TextInputProps){
return (
    <TextInput style={styles.input} {...rest}/>
)
}

const styles = StyleSheet.create({
  inputWrapper: {
    position: 'relative',
    width: '100%',
    height: 60,
    marginBottom: 20,
    justifyContent: 'center',
    
  },

  backgroundText: {
    position: 'absolute',
    left: 2,
    fontSize: 50,
    color: '#3c3c3c',
    zIndex: 0,
 
  },

  input: {
    width: '100%',
    height: 52,
    backgroundColor: '#FEF5C8',
    borderRadius: 11,
    padding: 10,
    shadowRadius: 7,
    elevation: 8,
    
},

});

export default Input;