import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import mynotesStore from './store/MyNotes';
import Note from './store/MyNotes'
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const navigation= useNavigation();
  return (
    <View style={{flex:1,flexDirection:"column"}}>
      <TextInput placeholder='Enter title' style={{width:'100%',height:40} }
       onChangeText={it=>setTitle(it)} value={title}/>
       <TextInput placeholder='Enter Description' style={{width:'100%',height:40} }
       onChangeText={it=>setDescription(description)} value={description}/>
       <TouchableOpacity style={{backgroundColor:'black'}} onPress={()=>{
       
          mynotesStore.addMyNotes({title:title,content:description})
          navigation.goBack();
       }}>
        <Text style={{color:"yellow"}}>Submit</Text>
       </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})