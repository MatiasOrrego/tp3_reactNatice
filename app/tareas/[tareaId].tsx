import { useLocalSearchParams, useRouter } from 'expo-router';
import { tareas } from '@/constants/tareas';
import { FlatList, TouchableOpacity, Text, View } from 'react-native';

export default function SubtareasScreen() {
  const { tareaId } = useLocalSearchParams();
  const router = useRouter();
  const tarea = tareas.find(t => t.id === tareaId);

  if (!tarea) return <Text>Tarea no encontrada</Text>;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 16 }}>{tarea.titulo}</Text>
      <FlatList
        data={tarea.subtareas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ padding: 14, borderBottomWidth: 1, borderColor: '#eee' }}
            onPress={() => router.push(`/tareas/${tarea.id}/subtarea/${item.id}`)}
          >
            <Text style={{ fontSize: 16 }}>{item.titulo}</Text>
            <Text style={{ color: '#888' }}>{item.estado}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}