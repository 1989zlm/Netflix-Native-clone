//! BU SAYFA BEĞENİ YAPILAN DİZİLERİ TUTMAMIZ İÇİN YAPILDI

import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {selectFavorites} from '../app/slices/favoriteSlice';
import FavoriteCard from '../components/FavoriteCard';

const FavoritesScreen = () => {
  const favorites = useSelector(selectFavorites);
  // console.log(favorites);

  return (
    <SafeAreaView className="flex-1 bg-neutral-800">
      <Text className="text-[20px] text-center text-white my-4">
        FavoriteScreen
      </Text>
      <FlatList
        data={favorites}
        renderItem={({item}) => <FavoriteCard item={item} />}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={() => (
          <View>
            <Text className="text-white font-semibold mx-4 text-center my-5">
              {' '}
              Henüz film beğenmediniz
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default FavoritesScreen;
