import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Text, ScrollView, TouchableOpacity } from 'react-native';

import { categories } from '~/constants/data';

export default function Filters() {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(params.filter || 'All');

  function handlerCategoryPress(category: string) {
    if (selectedCategory === category) {
      setSelectedCategory('All');
      router.setParams({ filter: 'All' });

      return;
    }

    setSelectedCategory(category);
    router.setParams({ filter: category });
  }
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-2 mt-3">
      {categories.map((category, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => handlerCategoryPress(category.category)}
          className={`mr-4 items-start rounded-full px-4 py-2 ${selectedCategory === category.category ? 'bg-primary-300' : 'border border-primary-200 bg-primary-100'}`}>
          <Text
            className={`text-sm ${selectedCategory === category.category ? 'mt-0,5 font-rubik-bold text-white' : 'font-rubik text-black-300'}`}>
            {category.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
