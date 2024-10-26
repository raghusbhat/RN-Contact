import { View, Text, ScrollView, Pressable } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import TagList from '../../components/TagList';

export default function ContactDetails() {
  const { id } = useLocalSearchParams();
  
  // In a real app, fetch contact details using the id
  const contact = {
    id: '1',
    name: 'John Doe',
    role: 'Sales Representative',
    email: 'john@example.com',
    phone: '(555) 123-4567',
    tags: [
      { id: '1', name: 'Team Lead', type: 'manager' as const },
      { id: '2', name: 'West Region', type: 'peer' as const },
    ],
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-4 bg-white mb-4">
        <Text className="text-2xl font-bold">{contact.name}</Text>
        <Text className="text-gray-600 text-lg mb-2">{contact.role}</Text>
        <TagList tags={contact.tags} />
      </View>

      <View className="p-4 bg-white space-y-4">
        <View>
          <Text className="text-gray-500">Email</Text>
          <Text className="text-lg">{contact.email}</Text>
        </View>
        <View>
          <Text className="text-gray-500">Phone</Text>
          <Text className="text-lg">{contact.phone}</Text>
        </View>
      </View>

      <View className="p-4">
        <Pressable
          onPress={() => {
            // Handle edit contact
          }}
          className="bg-blue-500 p-4 rounded-lg mb-2"
        >
          <Text className="text-white text-center font-semibold">Edit Contact</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            // Handle delete contact
            router.back();
          }}
          className="bg-red-500 p-4 rounded-lg"
        >
          <Text className="text-white text-center font-semibold">Delete Contact</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}