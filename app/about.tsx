import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function About() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-2xl font-semibold mb-4">About Page</Text>
      <Text className="text-gray-600 mb-6 px-4 text-center">
        This is a sample about page built with Expo Router and styled with NativeWind.
      </Text>
      <Link href="/" className="bg-blue-500 px-4 py-2 rounded-lg">
        <Text className="text-white text-lg">Back to Home</Text>
      </Link>
    </View>
  );
}