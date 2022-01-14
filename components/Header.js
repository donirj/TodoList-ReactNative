import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>ckmobile task</Text>    
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        backgroundColor: 'blue',
        height: 80
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    }
  
  });
  

export default Header
