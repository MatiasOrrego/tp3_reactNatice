import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="inicio" options={{ title: 'Inicio' }} />
      <Tabs.Screen name="perfil" options={{ title: 'Perfil' }} />
      <Tabs.Screen name="ajustes" options={{ title: 'Ajustes' }} />
      <Tabs.Screen name="productos" options={{ title: 'Productos' }} />
    </Tabs>
  );
}
