import { useLocalSearchParams } from 'expo-router';
import { tareas } from '@/constants/tareas';
import { View, Text } from 'react-native';

export default function SubtareaDetalle() {
  const { tareaId, subtareaId } = useLocalSearchParams();
  const tarea = tareas.find(t => t.id === tareaId);
  const subtarea = tarea?.subtareas.find(s => s.id === subtareaId);

  if (!subtarea) return <Text>Subtarea no encontrada</Text>;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22 }}>{subtarea.titulo}</Text>
      <Text style={{ marginTop: 10 }}>{subtarea.descripcion}</Text>
      <Text style={{ marginTop: 10, color: '#888' }}>Estado: {subtarea.estado}</Text>
    </View>
  );
}