import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'

export default function Calendar() {
  return (
     //header
     <ScrollView style={{ backgroundColor: '#D9D9D9' }}>
     <View style={{ backgroundColor: 'white' }}>
       <View style={styles.backgroungBar}>
         <Image
           source={require('../../images/user.png')}
           style={styles.picture}
         />
         <View style={styles.textContainer}>
           <Text style={styles.textUI}>Bùi Thanh Tâm</Text>
           <Text style={styles.textUI}>2051052118</Text>
         </View>
         <Image
           source={require('../../images/bell.png')}
           style={styles.bell}
         />
       </View>
     </View>

     <View style={styles.backgroundMonth}>
       <Image
         source={require('../../images/backButton.png')}
         style={styles.nextBackBtn}
       />
       <Text style={styles.heading}>Tháng 7, 2023</Text>

       <Image
         source={require('../../images/nextButton.png')}
         style={styles.nextBackBtn}
       />
     </View>
   </ScrollView>
  )
}