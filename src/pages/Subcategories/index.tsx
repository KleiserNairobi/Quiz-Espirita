import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {FlatList} from 'react-native';
//import firestore from '@react-native-firebase/firestore';
import {useTheme} from 'styled-components/native';
import {scale, verticalScale} from 'react-native-size-matters';
import {useNavigation, useRoute} from '@react-navigation/native';
import BottomSheet from '@gorhom/bottom-sheet';
import {Header} from '@components/Header';
import {CardSubcategory} from '@components/CardSubcategory';
import {BottomSheetMessage} from '@components/BottomSheetMessage';
import {CardContinue} from '@components/CardContinue';
import {GradientContainer} from '@components/GradientContainer';
import {Subcategories as DataSubcategories} from '@quizes/Subcategories';
import cat from '@assets/constants/cat.json';
import {HistoryProps} from '@models/History';
import {Subcategory} from '@models/Subcategories';
import {loadArray, saveString} from '@utils/Storage';
import {completedQuizRemove} from '@utils/StorageCompletedQuiz';
import {
  Category,
  Container,
  ContainerModal,
  Continue,
  Description,
  Quizes,
  Scroll,
} from './styles';
import {MessageType} from '@models/Utils';

type RouteParams = {
  idCategory: string;
  titleCategory: string;
  description: string;
};

export function Subcategories() {
  const theme = useTheme();
  const route = useRoute();
  const navigation = useNavigation();
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [idSubcategoryState, setIdSubcategoryState] = useState('');
  const [titleSubcategoryState, setTitleSubcategoryState] = useState('');
  const [quizUncompleted, setQuizUncompleted] = useState<Subcategory[]>([]);
  const [quizCompleted, setQuizCompleted] = useState<Subcategory[]>([]);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => [1, '36%'], []);
  const {idCategory, titleCategory, description} = route.params as RouteParams;
  const Data = DataSubcategories.filter(data => data.idCategory === idCategory);

  const handleSheetChanges = useCallback((index: number) => {
    setBottomSheetOpen(index === 1);
  }, []);

  function goToBack() {
    navigation.goBack();
  }

  function checkAnsweredQuiz(idSubcategory: string, titleSubcategory: string) {
    setIdSubcategoryState(idSubcategory);
    setTitleSubcategoryState(titleSubcategory);
    setQuizAnswered(true);
    setBottomSheetOpen(true);
    bottomSheetRef.current?.expand();
  }

  function goToQuizes(idSubcategory: string, titleSubcategory: string) {
    navigation.navigate('quizes', {
      idCategory: idCategory,
      titleCategory: titleCategory,
      idSubcategory: idSubcategory,
      titleSubcategory: titleSubcategory,
    });
  }

  function handleBottomSheetClose() {
    setQuizAnswered(false);
    setBottomSheetOpen(false);
    bottomSheetRef.current?.close();
  }

  function handleQuizAnswered() {
    setBottomSheetOpen(false);
    bottomSheetRef.current?.close();
    const result = completedQuizRemove(titleCategory, titleSubcategoryState);
    if (result) {
      saveString('update-chart', 'yes');
      goToQuizes(idSubcategoryState, titleSubcategoryState);
    }
  }

  function convertHistoryToSubcategory(historyItem: HistoryProps): Subcategory {
    return {
      id: historyItem.idQuiz.toString(),
      idCategory: cat.ID_CONCEITOS,
      title: historyItem.subtitle,
      subtitle: `Você acertou ${historyItem.points}/${historyItem.questions} questões`,
    };
  }

  function fetchData() {
    const response = loadArray('completed-quiz');
    if (!response) {
      setQuizCompleted([]);
      setQuizUncompleted(Data);
    } else {
      const quizCompleted: HistoryProps[] = response.filter(
        item => item.title === titleCategory,
      );
      const convertedQuizCompleted: Subcategory[] = quizCompleted.map(
        convertHistoryToSubcategory,
      );
      const quizUncompleted = Data.filter(
        quiz =>
          !convertedQuizCompleted.some(
            concluido => quiz.title === concluido.title,
          ),
      );
      setQuizUncompleted(quizUncompleted);
      setQuizCompleted(convertedQuizCompleted);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GradientContainer>
      <Container>
        <Header onPress={goToBack} />
        <Category>{titleCategory}</Category>
        <Description>{description}</Description>

        {/* <Continue>Continue de onde parou</Continue>
          <CardContinue /> */}

        <Scroll>
          {quizUncompleted.length > 0 && (
            <>
              <Quizes>Comece um novo quiz</Quizes>
              <FlatList
                data={quizUncompleted}
                scrollEnabled={false}
                nestedScrollEnabled={true}
                keyExtractor={item => item.id.toString()}
                //contentContainerStyle={{paddingBottom: verticalScale(10)}}
                renderItem={({item}) => (
                  <CardSubcategory
                    title={item.title}
                    subtitle={item.subtitle}
                    onPress={() => goToQuizes(item.id, item.title)}
                  />
                )}
              />
            </>
          )}
          {quizCompleted.length > 0 && (
            <>
              <Quizes>Quizes concluídos</Quizes>
              <FlatList
                data={quizCompleted}
                scrollEnabled={false}
                nestedScrollEnabled={true}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                  <CardSubcategory
                    title={item.title}
                    subtitle={item.subtitle}
                    onPress={() => checkAnsweredQuiz(item.id, item.title)}
                  />
                )}
              />
            </>
          )}
        </Scroll>
      </Container>
      {bottomSheetOpen && <ContainerModal />}
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{backgroundColor: theme.colors.backGradientStart}}
        handleIndicatorStyle={{
          backgroundColor: theme.colors.secondary,
          width: scale(80),
          height: verticalScale(8),
        }}
        onChange={handleSheetChanges}>
        {quizAnswered && (
          <BottomSheetMessage
            type={MessageType.question}
            title='Deseja novamente responder o quiz?'
            subtitle='A pontuação desse quiz será zerada e nova pontuação será contabilizada.'
            onPressSecondary={handleBottomSheetClose}
            onPressPrimary={handleQuizAnswered}
          />
        )}
      </BottomSheet>
    </GradientContainer>
  );
}
