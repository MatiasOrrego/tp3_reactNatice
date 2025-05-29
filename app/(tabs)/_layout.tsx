import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Inicio", tabBarIcon: () => null }}
      />
      <Tabs.Screen
        name="tareas"
        options={{ title: "Tareas" }}
      />
      <Tabs.Screen
        name="perfil"
        options={{ title: "Perfil" }}
      />
    </Tabs>
  );
}
