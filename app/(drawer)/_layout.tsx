import { Drawer } from 'expo-router/drawer';

export default function GestureLayout() {
  return (
    <Drawer
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="index" options={{ drawerLabel: 'Home' }} />
      <Drawer.Screen name="explore" options={{ drawerLabel: 'Explore' }} />
      <Drawer.Screen name="buy" options={{ drawerLabel: 'Buy' }} />
    </Drawer>
  );
}
