import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
        },
        headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Sales Contacts'
        }}
      />
      <Stack.Screen
        name="add-contact"
        options={{
          title: 'Add Contact'
        }}
      />
      <Stack.Screen
        name="contact/[id]"
        options={{
          title: 'Contact Details'
        }}
      />
    </Stack>
  );
}