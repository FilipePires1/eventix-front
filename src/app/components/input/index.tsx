import { TextInput,  TextInputProps, Text } from 'react-native'

import { styles } from "./styles"

export function Input({ ...rest }: TextInputProps){
return (
    <TextInput style={styles.input} {...rest}/>
     
)

}
export default Input;