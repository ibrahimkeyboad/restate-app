import { Redirect } from 'expo-router';
import { Alert, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import icons from '~/constants/icons';
import images from '~/constants/images';
import { login } from '~/lib/appwrite';
import { useGlobalContect } from '~/lib/global-provider';

export default function SignInPage() {
  const { refetch, loading, isLoggedIn } = useGlobalContect();

  if (!loading && isLoggedIn) return <Redirect href="/" />;

  async function handleLogin() {
    const result = await login();

    if (result) {
      refetch();
    } else {
      Alert.alert('Error', 'Failed to login');
    }
  }

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerClassName="h-full">
        <Image source={images.onboarding} className="h-4/6 w-full" resizeMode="contain" />

        <View className="px-10">
          <Text className="text-center font-rubik text-base uppercase text-black-200">
            Welcome to Restate
          </Text>
          <Text className="mt-2 text-center font-rubik-bold text-3xl text-black-300">
            Let's Get You Closer to {'\n'}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>
          <Text className="mt-12 text-center font-rubik text-lg text-black-200">
            Login to Restate with google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="mt-5 w-full flex-row items-center justify-center rounded-full bg-white py-4 shadow-md shadow-zinc-300">
            <Image source={icons.google} className="size-5" resizeMode="contain" />
            <Text className="text ml-2 font-rubik-medium text-lg text-black-300">
              Countinue with Google
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
