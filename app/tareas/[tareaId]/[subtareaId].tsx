import { useLocalSearchParams } from 'expo-router';
import { tareas }  from '../../../constants/tareas';
import { Text, View } from 'react-native';

export default function DetalleSubtarea() {
  const { tareaId, subtareaId } = useLocalSearchParams();

  const tarea = tareas.find((t) => t.id === tareaId);
  const subtarea = tarea?.subtareas.find((s) => s.id === subtareaId);

  if (!subtarea) return <Text>Subtarea no encontrada</Text>;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>{subtarea.titulo}</Text>
      <Text style={{ marginTop: 10 }}>{subtarea.descripcion}</Text>
      <Text style={{ marginTop: 10, fontStyle: 'italic' }}>Estado: {subtarea.estado}</Text>
    </View>
  );
}