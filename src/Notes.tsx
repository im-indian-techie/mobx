import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'
import mynotesStore from './store/MyNotes';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

const Notes = () => {
    const isFocused = useIsFocused();
    const [notes, setNotes] = useState([]);
    useEffect(()=>{
      const tempnotes= mynotesStore.notes;
      console.log(tempnotes);
    },[isFocused])
    return (
        <View style={{flex:1,flexDirection:"column"}}>
            <TouchableOpacity style={{position:"absolute",backgroundColor:"black",height:40,width:40,right:0,bottom:0,margin:20,borderRadius:20}}>
             <MaterialIcons name="add" size={20} color="white"/>
            </TouchableOpacity>
        </View>
    )
}

export default Notes

const styles = StyleSheet.create({})