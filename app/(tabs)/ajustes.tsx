import { View, Button } from 'react-native';
import { useAuth } from '../../contexts/authContext';

export default function AjustesScreen() {
  const { logout } = useAuth();

  return (
    <View style={{ padding: 20 }}>
      <Button title="Cerrar sesión" onPress={logout} />
    </View>
  );
}
