import { Redirect, Slot } from 'expo-router';
import { ActivityIndicator, SafeAreaView } from 'react-native';

import { useGlobalContect } from '~/lib/global-provider';

export default function AppLayout() {
  const { loading, isLoggedIn } = useGlobalContect();

  if (loading) {
    return (
      <SafeAreaView className="h-full items-center justify-center bg-white">
        <ActivityIndicator className="text-primary-300" size="large" />
      </SafeAreaView>
    );
  }
  if (!isLoggedIn) return <Redirect href="/sign-in" />;

  return <Slot />;
}
