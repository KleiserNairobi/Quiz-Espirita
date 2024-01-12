import React, {useEffect, useState} from 'react';
import {BackHandler, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {verticalScale} from 'react-native-size-matters';
import {CardCategory} from '@components/CardCategory';
import {GradientContainer} from '@components/GradientContainer';
import {BottomNavigation} from '@components/BottomNavigation';
import {loadString, saveString} from '@utils/Storage';
import {completedQuizGettAll} from '@utils/StorageCompletedQuiz';
import {DataCategories} from '@quizes/Categories';
import {Category, Container, GreetingBox, Greeting, Title} from './styles';

export function Categories() {
  const navigation = useNavigation();
  const [data, setData] = useState(DataCategories);

  function goToSubcategories(id: string, title: string, description: string) {
    navigation.navigate('subcategories', {
      idCategory: id,
      titleCategory: title,
      description: description,
    });
  }

  async function calculateCategoryQuizPercentage(
    categoryId: string,
  ): Promise<number> {
    try {
      const collRef = firestore().collection('quizes');
      const snapshot = await collRef
        .where('idCategory', '==', categoryId)
        .countFromServer()
        .get();
      const quantity = snapshot.data().count;

      if (quantity === 0) {
        return 0;
      }

      const playedQuizes = completedQuizGettAll();
      const playedCategoryQuizes = playedQuizes.filter(
        quiz => quiz.title.toLocaleUpperCase() === categoryId,
      );

      const percentage = (playedCategoryQuizes.length / quantity) * 100;
      return percentage;
    } catch (error) {
      console.log('ocorreu um erro:', error);
      return 0;
    }
  }

  async function updateChart() {
    const updatedDataCategories = await Promise.all(
      data.map(async item => ({
        ...item,
        percentage: await calculateCategoryQuizPercentage(item.id),
      })),
    );
    setData(updatedDataCategories);
  }

  useFocusEffect(() => {
    const result = loadString('update-chart');
    if (result && result === 'yes') {
      updateChart();
      saveString('update-chart', 'no');
    }
  });

  useEffect(() => {
    updateChart();
    saveString('update-chart', 'no');
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (navigation.isFocused()) {
          return true;
        }
        return false;
      },
    );
    return () => {
      backHandler.remove();
    };
  }, [navigation]);

  return (
    <GradientContainer>
      <Container>
        <GreetingBox>
          <Greeting>
            Oi, {loadString('user_name')?.trim() || 'amigo(a)'}!
          </Greeting>
        </GreetingBox>
        <Title>Escolha uma categoria para começar</Title>
        <Category>Categorias</Category>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <CardCategory
              title={item.title}
              subtitle={`${item.quizzes.toString()} quizes`}
              percentage={item.percentage}
              imageBackground={item.imageBackground}
              onPress={() =>
                goToSubcategories(
                  item.id,
                  item.title ?? '',
                  item.description ?? '',
                )
              }
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: verticalScale(10),
            paddingBottom: verticalScale(200),
            paddingHorizontal: 24,
          }}
        />
        <BottomNavigation />
      </Container>
    </GradientContainer>
  );
}
