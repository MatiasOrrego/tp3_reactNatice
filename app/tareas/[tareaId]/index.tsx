import { useLocalSearchParams, useRouter } from 'expo-router';
import { tareas } from '../../../constants/tareas';
import { FlatList, Text, Pressable, View } from 'react-native';

export default function Subtareas() {
  const { tareaId } = useLocalSearchParams();
  const router = useRouter();

  const tarea = tareas.find(t => t.id === tareaId);

  if (!tarea) return <Text>Tarea no encontrada</Text>;

  return (
    <FlatList
      data={tarea.subtareas}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable onPress={() => router.push(`/tareas/${tareaId}/${item.id}`)}>
          <View style={{ padding: 15 }}>
            <Text style={{ fontSize: 18 }}>{item.titulo}</Text>
          </View>
        </Pressable>
      )}
    />
  );
}
