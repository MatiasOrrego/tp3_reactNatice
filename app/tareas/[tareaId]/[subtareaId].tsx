import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { tareas } from '../../../constants/tareas';

export default function DetalleSubtarea() {
  const { tareaId, subtareaId } = useLocalSearchParams();

  const tarea = tareas.find(t => t.id === tareaId);
  const subtarea = tarea?.subtareas.find(st => st.id === subtareaId);

  if (!subtarea) return <Text>Subtarea no encontrada</Text>;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{subtarea.titulo}</Text>
      <Text style={{ marginTop: 10 }}>Descripción: {subtarea.descripcion}</Text>
      <Text>Estado: {subtarea.estado}</Text>
    </View>
  );
}
