import { Image, StyleSheet } from 'react-native';

import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '../themed-text';

type InfoCardsProps = {
    title: string;
    description: string;
    imageUrl: any;
}

export function InfoCards({ title, description, imageUrl }: InfoCardsProps) {
    return (
        <ThemedView style={styles.card}>
            <ThemedText>{title}</ThemedText>
            <ThemedText>{description}</ThemedText>
            <Image source={ imageUrl } style={{ width: 50, height: 50 }} />
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#b7b6b6',
        width: '90%',
        height: 150,
        borderRadius: 20,
        padding: 20,
    },
})