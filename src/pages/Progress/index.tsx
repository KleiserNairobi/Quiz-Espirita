import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  SectionList,
  View,
} from 'react-native';
import {format} from 'date-fns';
import {useNavigation} from '@react-navigation/native';
import {Header} from '@components/Header';
import {GradientContainer} from '@components/GradientContainer';
import {BottomNavigation} from '@components/BottomNavigation';
import {ProgressListItem} from '@components/ProgressListItem';
import {ButtonFilterProgress} from '@components/ButtonFilterProgress';
import {ButtonAction} from '@components/ButtonAction';
import {loadArray} from '@utils/Storage';
import {HistoryProps} from '@models/History';

import {
  BoxFlatListEmpty,
  CompletedQuizes,
  Container,
  ImageSearch,
  Subtitle,
  SubtitleFlatListEmpty,
  Title,
  TitleFlatListEmpty,
  Wrapper,
} from './styles';
import {verticalScale} from 'react-native-size-matters';

export function Progress() {
  const navigation = useNavigation();
  const [data, setData] = useState<HistoryProps[]>([]);
  const [filterData, setFilterData] = useState<HistoryProps[]>([]);
  const [filterTitle, setFilterTitle] = useState('Todos');
  const {height} = Dimensions.get('window');

  const categories = [
    {id: 0, title: 'Todos'},
    {id: 1, title: 'Conceitos'},
    {id: 2, title: 'Personagens'},
    {id: 3, title: 'Livros'},
    {id: 4, title: 'Filmes'},
    {id: 5, title: 'Espíritos'},
    {id: 6, title: 'Histórias'},
  ];

  function flatListEmpty() {
    return (
      <BoxFlatListEmpty>
        <ImageSearch source={require('@assets/images/Search/Search.png')} />
        <TitleFlatListEmpty>
          Você ainda não testou seus conhecimentos nesta categoria!
        </TitleFlatListEmpty>
        <SubtitleFlatListEmpty>Que tal começar agora?</SubtitleFlatListEmpty>
        <ButtonAction
          title='acessar quizes'
          onPress={() => navigation.navigate('categories')}
          disabled={false}
        />
      </BoxFlatListEmpty>
    );
  }

  function getFormatedDateTime(dateTime: string): string {
    const dataHora = new Date(parseInt(dateTime));
    return format(dataHora, 'dd/MM/yyyy HH:mm');
  }

  function filterDataByTitle(title: string) {
    const filtered = data.filter(item => item.title === title);
    setFilterData(filtered);
    setFilterTitle(title);
  }

  function fetchCompleted() {
    const response = loadArray('completed-quiz');
    if (response) {
      setData(response);
    }
  }

  useEffect(() => {
    fetchCompleted();
  }, []);

  return (
    <GradientContainer>
      <Container>
        <Wrapper>
          <Header onPress={() => navigation.goBack()} title='Progresso' />
          <Title>Progresso</Title>
          <Subtitle>
            Selecione uma categoria para conferir o seu progresso nos quizes
          </Subtitle>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={{height: 40, marginBottom: 30}}>
                <ButtonFilterProgress
                  active={filterTitle === item.title}
                  title={item.title}
                  onPress={() => filterDataByTitle(item.title)}
                />
              </View>
            )}
          />
          {data.length > 0 && filterTitle === 'Todos' ? (
            <>
              <CompletedQuizes>Quizes concluídos</CompletedQuizes>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{height: height - verticalScale(400)}}>
                {data.map(item => (
                  <ProgressListItem
                    key={item.id}
                    title={item.subtitle}
                    dateTime={getFormatedDateTime(item.id)}
                    level={item.level}
                    percentage={item.percentage.toString() + '%'}
                  />
                ))}
              </ScrollView>
            </>
          ) : data.length === 0 && filterTitle === 'Todos' ? (
            flatListEmpty()
          ) : filterData.length > 0 && filterTitle != 'Todos' ? (
            <>
              <CompletedQuizes>Quizes concluídos</CompletedQuizes>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{height: height - verticalScale(400)}}>
                {filterData.map(item => (
                  <ProgressListItem
                    key={item.id}
                    title={item.subtitle}
                    dateTime={getFormatedDateTime(item.id)}
                    level={item.level}
                    percentage={item.percentage.toString() + '%'}
                  />
                ))}
              </ScrollView>
            </>
          ) : (
            flatListEmpty()
          )}
        </Wrapper>
        <BottomNavigation />
      </Container>
    </GradientContainer>
  );
}
