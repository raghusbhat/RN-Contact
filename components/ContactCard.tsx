import { View, Text, Pressable } from 'react-native';
import { Contact } from '../types';
import TagList from './TagList';

type ContactCardProps = {
  contact: Contact;
  onPress: (contact: Contact) => void;
};

export default function ContactCard({ contact, onPress }: ContactCardProps) {
  return (
    <Pressable 
      onPress={() => onPress(contact)}
      className="bg-white p-4 rounded-lg mb-3 shadow-sm"
    >
      <Text className="text-lg font-semibold">{contact.name}</Text>
      <Text className="text-gray-600 mb-2">{contact.role}</Text>
      <TagList tags={contact.tags} />
    </Pressable>
  );
}