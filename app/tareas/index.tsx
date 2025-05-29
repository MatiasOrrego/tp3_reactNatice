import { FlatList, Text, Pressable, View } from 'react-native';
import { useRouter } from 'expo-router';
import { tareas } from '../../constants/tareas';

export default function Tareas() {
  const router = useRouter();

  return (
    <FlatList
      data={tareas}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable onPress={() => router.push(`/tareas/${item.id}`)}>
          <View style={{ padding: 15 }}>
            <Text style={{ fontSize: 18 }}>{item.titulo}</Text>
          </View>
        </Pressable>
      )}
    />
  );
}
