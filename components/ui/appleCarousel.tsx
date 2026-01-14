import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRef } from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    View
} from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.82;
const SPACING = 16;

export type AppleCarouselItem = {
  id: string;
  title: string;
  caption?: string;
  image: any;
};

type AppleCarouselProps = {
  data: AppleCarouselItem[];
};

export function AppleCarousel({ data }: AppleCarouselProps) {
  const ref = useRef<FlatList>(null);

  return (
    <FlatList
      ref={ref}
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH + SPACING}
      decelerationRate="fast"
      contentContainerStyle={{ paddingHorizontal: SPACING }}
      renderItem={({ item }) => (
        <ThemedView style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.textWrapper}>
            <ThemedText style={styles.title}>{item.title}</ThemedText>
            {item.caption ? (
              <ThemedText style={styles.caption}>{item.caption}</ThemedText>
            ) : null}
          </View>
        </ThemedView>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    marginRight: SPACING,
    borderRadius: 20,
    backgroundColor: '#fff',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    height: 400,
  },
  image: {
    width: '100%',
    height: 400,
  },
  textWrapper: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  caption: {
    marginTop: 6,
    fontSize: 14,
    opacity: 0.7,
  },
});
