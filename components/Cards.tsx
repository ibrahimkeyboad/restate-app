import { View, Text, TouchableOpacity, Image } from 'react-native';

import icons from '~/constants/icons';
import images from '~/constants/images';

type FeaturedCardProps = {
  onPress?: () => void;
};

export function FeaturedCard({ onPress }: FeaturedCardProps) {
  return (
    <TouchableOpacity onPress={onPress} className="relative h-80 w-60 flex-col items-start">
      <Image source={images.japan} className="size-full rounded-2xl" />
      <Image
        source={images.cardGradient}
        className="absolute bottom-0 top-0 size-full rounded-2xl"
      />

      <View className="absolute right-5 top-5 flex-row items-center rounded-full bg-white/90 px-3 py-1.5">
        <Image source={icons.star} className="size-3.5" />
        <Text className="ml-1 font-rubik-bold text-xs text-primary-300 ">4.5</Text>
      </View>
      <View className="absolute inset-x-5 bottom-5 flex-col items-start">
        <Text className="font-rubik-extrabold text-xl text-white" numberOfLines={1}>
          Modern Apartment
        </Text>
        <Text className="font-rubik text-base text-white">22 W 15th St, New York, NY 10011</Text>
        <View className="w-full flex-row items-center justify-between">
          <Text className="font-rubik-extrabold text-xl text-white">$ 2,500</Text>
          <Image source={icons.heart} className="size-5" />
        </View>
      </View>
    </TouchableOpacity>
  );
}
export function Card() {
  return (
    <TouchableOpacity className="relative mt-4 w-full flex-1 rounded-lg bg-white px-3 py-4 shadow-lg shadow-black-100/70">
      <View className=" absolute right-5 top-5 z-50 flex-row items-center bg-white/90 px-2">
        <Image source={icons.star} className="size-2.5" />
        <Text className="ml-0.5 font-rubik-bold text-xs text-primary-300 ">4.5</Text>
      </View>
      <Image source={images.newYork} className="h-40 w-full rounded-lg" />
      <View className="mt-2 flex-col items-start">
        <Text className="font-rubik-bold text-base text-black-300">Cozy Studio</Text>
        <Text className="font-rubik text-xs text-black-200">22 W 15th St, New York, NY 10011</Text>
      </View>
      <View className="mt-2 flex-row items-center justify-between">
        <Text className="font-rubik-bold text-base text-primary-300">$ 2,500</Text>
        <Image source={icons.heart} className="mr-2 size-5" tintColor="#191d31" />
      </View>
    </TouchableOpacity>
  );
}
