import { Image, StyleSheet } from 'react-native';

import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '../themed-text';

import { LinearGradient } from 'expo-linear-gradient';

type InfoCardsProps = {
    title: string;
    description: string;
    imageUrl: any;
}

export function InfoCards({ title, description, imageUrl }: InfoCardsProps) {
    return (
        <ThemedView style={styles.card}>
            <Image source={imageUrl} style={styles.backgroundImage} />

            <LinearGradient
            colors={['rgba(0, 0, 0, 0.77)', 'rgba(0,0,0,0.0)']}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
            style={styles.tint}
            />

            <ThemedView style={styles.texts}>
                <ThemedText style={styles.title}>{title}</ThemedText>
                <ThemedText style={styles.desc}>{description}</ThemedText>
            </ThemedView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ededed',
    width: '90%',
    height: 160,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  tint: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  texts: {
    padding: 20,
    zIndex: 1,
    backgroundColor: 'transparent',
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ffffff',
  },
  desc: {
    fontSize: 14,
    color: '#ffffff',
  },
});