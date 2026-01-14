import { Image, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

import { InfoCards } from '@/components/ui/infoCard';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>

      <ThemedView style={styles.titleWrapper}>
        <Image
          source={require('@/assets/images/apple-icon.png')}
          style={styles.image}
          resizeMode="contain"
        />

        <ThemedText style={styles.title}>Apple</ThemedText>
      </ThemedView>

      <InfoCards
        title="The new iPhone 17 Pro"
        description="Take a look at groundbreaking technology"
        imageUrl={require('@/assets/images/iPhone-17-Colors.jpg')}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
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
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 5,
    paddingTop: '20%',
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
