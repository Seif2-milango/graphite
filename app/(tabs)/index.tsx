import { Image, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

import { InfoCards } from '@/components/ui/infoCard';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>

      <ThemedView style={styles.titleWrapper}>
        <ThemedText style={styles.title}>Welcome to the EXPO application</ThemedText>

        <Image
          source={require('@/assets/images/android-icon-monochrome.png')}
          style={{ width: 80, height: 80, }}
          resizeMode="contain"
        />
      </ThemedView>

      <InfoCards
        title="Welcome to the EXPO application"
        description="This is a sample description for the info card."
        imageUrl={require('@/assets/images/favicon.png')}
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
    elevation: 5,
  },
});
