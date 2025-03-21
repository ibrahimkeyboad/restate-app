import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { settings } from '~/constants/data';
import icons from '~/constants/icons';
import { logout } from '~/lib/appwrite';
import { useGlobalContect } from '~/lib/global-provider';

type SettingsItemType = {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
};

const SettingsItem = ({ icon, title, onPress, textStyle, showArrow = true }: SettingsItemType) => (
  <TouchableOpacity onPress={onPress} className="flex-row items-center justify-between py-3">
    <View className="flex-row items-center gap-3">
      <Image source={icon} className="size-6" />
      <Text className={`font-rubik-medium text-lg text-black-300${textStyle}`}>{title}</Text>
    </View>

    {showArrow && <Image source={icons.rightArrow} className="size-5" />}
  </TouchableOpacity>
);

export default function Profile() {
  const { user, refetch } = useGlobalContect();

  async function handleLogout() {
    const result = await logout();

    if (result) {
      Alert.alert('Success', 'You have been logged out successfully');

      refetch();
    } else {
      Alert.alert('Error', 'An error occurred while loggin out');
    }
  }

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-32 px-7">
        <View className="mt-5 flex-row items-center justify-between">
          <Text className="font-rubik-bold text-xl">Profile</Text>
          <Image source={icons.bell} className="size-5" />
        </View>
        <View className="mt-5 flex-row justify-center">
          <View className="relative mt-5 flex-col items-center">
            <Image source={{ uri: user?.avatar }} className="relative size-44 rounded-full" />
            <TouchableOpacity className="absolute bottom-11 right-2">
              <Image source={icons.edit} className="size-9" />
            </TouchableOpacity>
            <Text className="mt-2 font-rubik-bold text-2xl">{user?.name}</Text>
          </View>
        </View>
        <View className="mt-10 flex-col">
          <SettingsItem icon={icons.calendar} title="My Bookings" />
          <SettingsItem icon={icons.wallet} title="Payments" />
        </View>
        <View className="mt-5 flex-col border-t border-primary-200 pt-5">
          {settings.slice(2).map((item, i) => (
            <SettingsItem icon={item.icon} title={item.title} key={i} />
          ))}
        </View>
        <View className="mt-5 flex-col border-t border-primary-200 pt-5">
          <SettingsItem
            icon={icons.logout}
            title="Logout"
            showArrow={false}
            textStyle="text-danger"
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
