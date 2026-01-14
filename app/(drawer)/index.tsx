import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

import { InfoCards } from '@/components/ui/infoCard';

import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ThemedView style={styles.container}>

      <ThemedView style={styles.titleWrapper}>
        <Image
          source={require('@/assets/images/apple-icon.png')}
          style={styles.image}
          resizeMode="contain"
        />

        <ThemedText style={styles.title}>Apple</ThemedText>

        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Ionicons name="menu" size={28} />
        </TouchableOpacity>
      </ThemedView>

      <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center', paddingBottom: 50 }}>
        <ThemedView style={{ gap: 50, width: '100%', alignItems: 'center', paddingTop: 20 }}>
          <InfoCards
            title="The new iPhone 17 Pro"
            description="Take a look at groundbreaking technology"
            imageUrl={require('@/assets/images/iPhone-17-Colors.jpg')}
          />

          <InfoCards
            title="Airpods Pro 3"
            description="Music like you've never heard before"
            imageUrl={require('@/assets/images/airpods.jpg')}
          />

          <InfoCards
            title="Your new best friend"
            description="Be more productive with new and powerful Mac"
            imageUrl={require('@/assets/images/mac2.png')}
          />
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'left',
    width: '80%',
  },
  titleWrapper: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    paddingBottom: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 5,
    paddingTop: '5%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 50,
    height: 50,
  }
});
