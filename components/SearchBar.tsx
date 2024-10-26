import { TextInput, View } from 'react-native';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function SearchBar({ value, onChangeText }: SearchBarProps) {
  return (
    <View className="px-4 py-2">
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search contacts..."
        className="bg-gray-100 px-4 py-2 rounded-lg"
      />
    </View>
  );
}