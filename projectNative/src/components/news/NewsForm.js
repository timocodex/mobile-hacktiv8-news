import React from 'react'
import{
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Text
} from 'react-native'

export const NewsForm = (props) => (
  <View style={styles.header}>
    <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChange={props.handleChange}/>
  </View>
)

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  header: {
    height: deviceHeight *0.1,
    width: deviceWidth,

    backgroundColor: '#F5F5F5',
  }
})
