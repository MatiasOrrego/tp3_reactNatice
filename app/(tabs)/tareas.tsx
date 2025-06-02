import { FlatList, TouchableOpacity, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { tareas } from '@/constants/tareas';

export default function Tareas() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={tareas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ padding: 16, borderBottomWidth: 1, borderColor: '#eee' }}
            onPress={() => router.push(`/tareas/${item.id}`)}
          >
            <Text style={{ fontSize: 18 }}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}