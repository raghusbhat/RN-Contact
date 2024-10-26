import { useState } from 'react';
import { View, Text, TextInput, ScrollView, Pressable } from 'react-native';
import { router } from 'expo-router';
import { Contact, Tag } from '../types';

export default function AddContact() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    // Handle contact creation
    router.back();
  };

  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      <View className="space-y-4">
        <View>
          <Text className="text-gray-700 mb-1">Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            className="bg-white p-3 rounded-lg border border-gray-200"
          />
        </View>

        <View>
          <Text className="text-gray-700 mb-1">Role</Text>
          <TextInput
            value={role}
            onChangeText={setRole}
            className="bg-white p-3 rounded-lg border border-gray-200"
          />
        </View>

        <View>
          <Text className="text-gray-700 mb-1">Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            className="bg-white p-3 rounded-lg border border-gray-200"
          />
        </View>

        <View>
          <Text className="text-gray-700 mb-1">Phone</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            className="bg-white p-3 rounded-lg border border-gray-200"
          />
        </View>

        <Pressable
          onPress={handleSubmit}
          className="bg-blue-500 p-4 rounded-lg mt-4"
        >
          <Text className="text-white text-center font-semibold">Add Contact</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}