import { router, useLocalSearchParams, usePathname } from 'expo-router';
import { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useDebouncedCallback } from 'use-debounce';

import icons from '~/constants/icons';

export default function Search() {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();

  const [search, setSearch] = useState(params.query);

  const debouncedSearch = useDebouncedCallback(
    (text: string) => router.setParams({ query: text }),
    500
  );

  function handleSearch(text: string) {
    setSearch(text);
    debouncedSearch(text);
  }

  return (
    <View className="mt-5 w-full flex-row items-center justify-between rounded-lg border border-primary-100 bg-accent-100 px-4 py-2">
      <View className="z-50 flex-1 flex-row items-center justify-start">
        <Image source={icons.search} className="size-5" />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search for anything"
          className="ml2 flex-1 font-rubik text-sm text-black-300 "
        />
      </View>
      <TouchableOpacity>
        <Image source={icons.filter} className="size-5" />
      </TouchableOpacity>
    </View>
  );
}
