import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Switch } from 'react-native';
import { useState } from 'react';

const Login = () => {
   const [value, setValue] = useState("Tên đăng nhập");
   return (
      <View  style={{ width: "80%" }}>
         <View style={{ marginBottom: "10%" }}>
            <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>Đăng nhập hệ thống</Text>
         </View>
         <View style={{ marginBottom: 10 }}>
            <Text style={{ color: "#ccc" }}>Tài khoản:</Text>
            <TextInput
               style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', padding: 2, marginTop: 10 }}
               onTextInput={(e) => {setValue(e.target.valueOf())}}
            />
         </View>
         <View style={{ marginBottom: 10 }}>
            <Text style={{ color: "#ccc" }}>Mật khẩu:</Text>
            <TextInput style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', padding: 2, marginTop: 10 }} />
         </View>
         <View style={{ marginBottom: 10, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Switch value={true} style={{ marginRight: 10 }} />
            <Text>Ghi nhớ đăng nhập</Text>
         </View>
         <View style={{ marginBottom: 10 }}>
            <TouchableOpacity style={{ width: "100%", padding: 10, marginBottom: 10, borderWidth: 1, borderColor: '#323639', backgroundColor: '#323639' }}>
               <Text style={{ textAlign: 'center', color: 'white' }}>Đăng nhập hệ thống</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: "100%", padding: 10, marginBottom: 10, borderWidth: 1, borderColor: '#ccc', backgroundColor: '#eee' }}>
               <Text style={{ textAlign: 'center' }}>Đăng ký</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}

export default Login;