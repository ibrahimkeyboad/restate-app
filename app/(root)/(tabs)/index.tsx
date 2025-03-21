import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Search from '~/components/Search';
import icons from '~/constants/icons';
import images from '~/constants/images';

export default function Home() {
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="px-5">
        <View className="mt-5 flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Image source={images.avatar} className="size-12 rounded-full" />
            <View className="ml-2 flex-col items-start justify-center">
              <Text className="font-rubik text-xs text-black-100">Good Morning</Text>
              <Text className="font-rubik-medium text-base text-black-300">Zahara</Text>
            </View>
          </View>
          <Image source={icons.bell} className="size-6" />
        </View>
      </View>
      <Search />
    </SafeAreaView>
  );
}
