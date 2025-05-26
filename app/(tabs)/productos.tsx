import { FlatList, Text, View } from 'react-native';

const productos = ['Café', 'Té', 'Chocolate', 'Galletas', 'Agua'];

export default function Productos() {
  return (
    <FlatList
      data={productos}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <Text style={{ padding: 10 }}>{item}</Text>}
    />
  );
}
