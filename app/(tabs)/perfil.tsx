import { View, Text, Image } from 'react-native';

export default function Perfil() {
  return (
    <View style={{ alignItems: 'center', padding: 20 }}>
      <Image source={{ uri: 'https://randomuser.me/api/portraits/men/80.jpg' }} style={{ width: 120, height: 120, borderRadius: 60 }} />
      <Text style={{ fontSize: 18, marginTop: 10 }}>Usuario: mati</Text>
    </View>
  );
}
