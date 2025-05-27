import { View, Text, FlatList, Pressable } from 'react-native';
import  { tareas } from '../../constants/tareas';
import { useRouter } from 'expo-router';

export default function Tareas() {
  const router = useRouter();

  return (
    <FlatList
      data={tareas}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable onPress={() => router.push(`/tareas/${item.id}`)}>
          <Text style={{ fontSize: 20, padding: 10 }}>{item.titulo}</Text>
        </Pressable>
      )}
    />
  );
}