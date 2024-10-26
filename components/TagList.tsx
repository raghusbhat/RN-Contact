import { View, Text } from 'react-native';
import { Tag } from '../types';

type TagListProps = {
  tags: Tag[];
};

export default function TagList({ tags }: TagListProps) {
  return (
    <View className="flex-row flex-wrap gap-2">
      {tags.map((tag) => (
        <View 
          key={tag.id} 
          className={`px-2 py-1 rounded-full ${
            tag.type === 'peer' ? 'bg-blue-100' : 'bg-green-100'
          }`}
        >
          <Text className={`${
            tag.type === 'peer' ? 'text-blue-700' : 'text-green-700'
          } text-sm`}>
            {tag.name}
          </Text>
        </View>
      ))}
    </View>
  );
}