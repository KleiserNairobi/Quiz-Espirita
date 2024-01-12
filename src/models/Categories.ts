import {ImageSourcePropType} from 'react-native';

export interface ICategory {
  id: string;
  title: string;
  description: string;
  quizzes: number;
  percentage: number;
  imageBackground: ImageSourcePropType;
}
