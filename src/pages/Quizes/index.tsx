import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {GradientContainer} from '@components/GradientContainer';
import BottomSheet from '@gorhom/bottom-sheet';
import {useTheme} from 'styled-components/native';
import {Header} from '@components/Header';
import {ProgressBar} from '@components/ProgressBar';
import {ButtonAction} from '@components/ButtonAction';
import {ButtonActionOutilene} from '@components/ButtonActionOutilene';
import {Question} from '@components/Question';
import {Loading} from '@components/Loading';
import {BottomSheetMessage} from '@components/BottomSheetMessage';
import {Quizes as DataQuizes} from '@quizes/Quizes';
import {HistoryProps} from '@models/History';
import {completedQuizAdd} from '@utils/StorageCompletedQuiz';
import {
  BoxBackButton,
  BoxNextButton,
  ButtonBox,
  Container,
  ContainerModal,
  Quiz,
  Scroll,
  Subcategory,
} from './styles';
import {saveString} from '@utils/Storage';
import {scale, verticalScale} from 'react-native-size-matters';
import firestore from '@react-native-firebase/firestore';
import {IQuizes} from '@models/Quizes';
import {MessageType} from '@models/Utils';

type RouteParams = {
  idCategory: string;
  idSubcategory: string;
  titleCategory: string;
  titleSubcategory: string;
};

export function Quizes() {
  const theme = useTheme();
  const route = useRoute();
  const navigation = useNavigation();
  const [stop, setStop] = useState(false);
  const [next, setNext] = useState(false);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [points, setPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quiz, setQuiz] = useState<IQuizes[]>([]);
  const [alternativeSelected, setAlternativeSelected] = useState<null | number>(
    null,
  );

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => [1, '36%'], []);

  const {idSubcategory, titleCategory, titleSubcategory} =
    route.params as RouteParams;

  const handleSheetChanges = useCallback((index: number) => {
    setBottomSheetOpen(index === 1);
  }, []);

  function calculatePercentage(correctAnswers: number, totalQuestions: number) {
    return Math.floor((correctAnswers / totalQuestions) * 100);
  }

  function getLevel(percentage: number): string {
    if (percentage >= 90) {
      return 'Ótimo';
    } else if (percentage >= 70) {
      return 'Bom';
    } else if (percentage >= 50) {
      return 'Regular';
    } else {
      return 'Fraco';
    }
  }

  function goToBack() {
    if (currentQuestion != 0) {
      handleStop();
    } else {
      navigation.goBack();
    }
  }

  function handleSkipConfirm() {
    setStop(false);
    setNext(true);
    setBottomSheetOpen(true);
    bottomSheetRef.current?.expand();
  }

  function handleFinished() {
    const totalPoints = points > 0 ? points + 1 : points;
    const totalQuestions = quiz[0].questions.length;
    const percentage = calculatePercentage(totalPoints, totalQuestions);
    const level = getLevel(percentage);

    const history: HistoryProps = {
      id: new Date().getTime().toString(),
      idQuiz: quiz[0].idSubcategory,
      title: titleCategory,
      subtitle: titleSubcategory,
      points: totalPoints,
      questions: quiz[0].questions.length,
      percentage: percentage,
      level: level,
    };

    completedQuizAdd(history);
    saveString('update-chart', 'yes');

    navigation.navigate('finish', {
      titleCategory: titleCategory,
      titleSubcategory: titleSubcategory,
      points: totalPoints,
      totalQuestions: totalQuestions,
      percentage: percentage,
      level: level,
    });
  }

  function handleNextQuestion() {
    if (bottomSheetOpen) {
      setStop(false);
      setNext(false);
      setBottomSheetOpen(false);
      bottomSheetRef.current?.close();
    }
    if (currentQuestion < quiz[0].questions.length - 1) {
      setCurrentQuestion(prevState => prevState + 1);
    } else {
      handleFinished();
    }
  }

  function handleConfirm() {
    if (alternativeSelected === null) {
      return handleSkipConfirm();
    }
    if (quiz[0].questions[currentQuestion].correct === alternativeSelected) {
      setPoints(prevState => prevState + 1);
    }
    handleNextQuestion();
    setAlternativeSelected(null);
  }

  function handleStop() {
    setStop(true);
    setNext(false);
    setBottomSheetOpen(true);
    bottomSheetRef.current?.expand();
  }

  function handleBottomSheetPressStop() {
    bottomSheetRef.current?.close();
    navigation.navigate('categories');
  }

  function handleBottomSheetClose() {
    setStop(false);
    setNext(false);
    setBottomSheetOpen(false);
    bottomSheetRef.current?.close();
  }

  async function getQuiz(idSubcategory: string) {
    try {
      const quiz = await firestore()
        .collection('quizes')
        .doc(`QUIZ-${idSubcategory}`)
        .get();
      if (quiz.exists) {
        const quizData = quiz.data() as IQuizes;
        setQuiz([quizData]);
        setIsLoading(false);
      }
    } catch (e) {
      console.log('Ocorreu um erro ao obter os dados:', e);
    }
  }

  useEffect(() => {
    getQuiz(idSubcategory);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <GradientContainer>
      <Container>
        <Header title={titleCategory} onPress={goToBack} />
        <ProgressBar
          current={currentQuestion + 1}
          total={quiz[0].questions.length}
        />
        <Scroll>
          <Subcategory>{titleSubcategory}</Subcategory>
          <Quiz>{quiz[0].questions[currentQuestion].title}</Quiz>

          <Question
            question={quiz[0].questions[currentQuestion]}
            success={
              quiz[0].questions[currentQuestion].correct === alternativeSelected
            }
            alternativeSelected={alternativeSelected}
            setAlternativeSelected={setAlternativeSelected}
          />
          <ButtonBox>
            <BoxBackButton>
              <ButtonActionOutilene title='parar' onPress={handleStop} />
            </BoxBackButton>
            <BoxNextButton>
              <ButtonAction
                disabled={false}
                title='próxima'
                onPress={handleConfirm}
              />
            </BoxNextButton>
          </ButtonBox>
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
        {stop && (
          <BottomSheetMessage
            type={MessageType.question}
            title='Deseja parar o quiz?'
            subtitle='Seu progresso não será contabilizado e você poderá recomeçar quando quiser.'
            //subtitle='Seu progresso será salvo e você poderá retomar de onde parou quando quiser.'
            onPressPrimary={handleBottomSheetPressStop}
            onPressSecondary={handleBottomSheetClose}
          />
        )}
        {next && (
          <BottomSheetMessage
            type={MessageType.question}
            title='Deseja realmente pular a questão?'
            subtitle='Questões não respondidas serão contabilizadas como erros na sua pontuação final.'
            onPressPrimary={handleNextQuestion}
            onPressSecondary={handleBottomSheetClose}
          />
        )}
      </BottomSheet>
    </GradientContainer>
  );
}
