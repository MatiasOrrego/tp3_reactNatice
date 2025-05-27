import { useLocalSearchParams, useRouter } from 'expo-router';
import  { tareas } from '../../../constants/tareas';
import { FlatList, Text, Pressable } from 'react-native';

export default function Subtareas() {
  const { tareaId } = useLocalSearchParams();
  const router = useRouter();

  const tarea = tareas.find((t) => t.id === tareaId);

  if (!tarea) return <Text>No se encontró la tarea</Text>;

  return (
    <FlatList
      data={tarea.subtareas}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable onPress={() => router.push(`/tareas/${tareaId}/${item.id}`)}>
          <Text style={{ fontSize: 18, padding: 10 }}>{item.titulo}</Text>
        </Pressable>
      )}
    />
  );
}