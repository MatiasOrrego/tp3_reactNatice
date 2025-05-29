import { Stack } from 'expo-router';
import { useAuth, AuthProvider } from '../contexts/authContext';

// Este componente controla el enrutamiento según la autenticación
function RootNavigation() {
  const { isAuthenticated } = useAuth();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="(tabs)" /> // Ruta protegida
      ) : (
        <Stack.Screen name="login" /> // Ruta pública
      )}
    </Stack>
  );
}

// Este es el root layout que provee el contexto
export default function RootLayout() {
  return (
    <AuthProvider>
      <RootNavigation />
    </AuthProvider>
  );
}
