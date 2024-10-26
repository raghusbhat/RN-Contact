import { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Link } from 'expo-router';
import ContactCard from '../components/ContactCard';
import SearchBar from '../components/SearchBar';
import { Contact } from '../types';

const initialContacts: Contact[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'Sales Representative',
    email: 'john@example.com',
    phone: '(555) 123-4567',
    tags: [
      { id: '1', name: 'Team Lead', type: 'manager' },
      { id: '2', name: 'West Region', type: 'peer' },
    ],
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'Account Executive',
    email: 'jane@example.com',
    phone: '(555) 987-6543',
    tags: [
      { id: '3', name: 'East Region', type: 'peer' },
    ],
  },
];

export default function Home() {
  const [contacts] = useState<Contact[]>(initialContacts);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.tags.some(tag => tag.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <View className="flex-1 bg-gray-50">
      <SearchBar 
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="px-4">
            <ContactCard
              contact={item}
              onPress={(contact) => {
                // Navigate to contact details
              }}
            />
          </View>
        )}
        className="flex-1"
      />
      <Link href="/add-contact" asChild>
        <View className="absolute bottom-6 right-6 bg-blue-500 w-14 h-14 rounded-full items-center justify-center">
          <Text className="text-white text-3xl">+</Text>
        </View>
      </Link>
    </View>
  );
}