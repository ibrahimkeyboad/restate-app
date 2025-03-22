import { Link } from 'expo-router';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Card, FeaturedCard } from '~/components/Cards';
import Filters from '~/components/Filters';
import Search from '~/components/Search';
import icons from '~/constants/icons';
import images from '~/constants/images';
import { useGlobalContect } from '~/lib/global-provider';

export default function Home() {
  const { user } = useGlobalContect();
  return (
    <SafeAreaView className="h-full bg-white">
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Card />}
        keyExtractor={(item) => item.toString()}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={
          <View className="px-5">
            <View className="mt-5 flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Image source={{ uri: user?.avatar }} className="size-12 rounded-full" />
                <View className="ml-2 flex-col items-start justify-center">
                  <Text className="font-rubik text-xs text-black-100">Good Morning</Text>
                  <Text className="font-rubik-medium text-base text-black-300">{user?.name}</Text>
                </View>
              </View>
              <Image source={icons.bell} className="size-6" />
            </View>
            <Search />
            <View className="my-5">
              <View className="flex-row items-center justify-between">
                <Text className="font-rubik-bold text-xl text-black-300">Featured</Text>
                <TouchableOpacity>
                  <Text className="font-rubik-bold text-base text-primary-300">See All</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={[1, 2, 3]}
                renderItem={({ item }) => <FeaturedCard />}
                keyExtractor={(item) => item.toString()}
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="gap-5 mt-5"
              />
            </View>
            <View className="flex-row items-center justify-between">
              <Text className="font-rubik-bold text-xl text-black-300">Our Recommedation</Text>
              <TouchableOpacity>
                <Text className="font-rubik-bold text-base text-primary-300">See All</Text>
              </TouchableOpacity>
            </View>
            <Filters />
          </View>
        }
      />
    </SafeAreaView>
  );
}
