import {Subcategories} from './Subcategories';
import {ICategory} from '@models/Categories';
import cat from '@assets/constants/cat.json';

function getSubcategoryCount(categoryId: string) {
  const subcategories = Subcategories.filter(
    subcat => subcat.idCategory === categoryId,
  );
  return subcategories.length;
}

export const DataCategories: ICategory[] = [
  {
    id: cat.ID_CONCEITOS,
    title: 'Conceitos',
    quizzes: getSubcategoryCount(cat.ID_CONCEITOS),
    percentage: 0,
    imageBackground: require('@assets/images/Categories/Concepts.png'),
    description:
      'Teste seus conhecimentos sobre os ensinamentos do Espiritismo, abordando evolução espiritual, reencarnação, etc.',
  },
  {
    id: cat.ID_PERSONAGENS,
    title: 'Personagens',
    quizzes: getSubcategoryCount(cat.ID_PERSONAGENS),
    percentage: 0,
    imageBackground: require('@assets/images/Categories/Characters.png'),
    description:
      'Teste seus conhecimentos sobre importantes figuras do Espiritismo que ajudaram na divulgação e desenvolvimento da Doutrina.',
  },
  {
    id: cat.ID_LIVROS,
    title: 'Livros',
    quizzes: getSubcategoryCount(cat.ID_LIVROS),
    percentage: 0,
    imageBackground: require('@assets/images/Categories/Books.png'),
    description:
      'Teste seus conhecimentos sobre os principais livros da literatura espírita, bem como outras contribuições importantes.',
  },
  {
    id: cat.ID_FILMES,
    title: 'Filmes',
    quizzes: getSubcategoryCount(cat.ID_FILMES),
    percentage: 0,
    imageBackground: require('@assets/images/Categories/Films.png'),
    description:
      'Teste seus conhecimentos sobre produções cinematográficas que oferecem reflexões sobre a vida e a imortalidade da alma.',
  },
  {
    id: cat.ID_ESPIRITOS,
    title: 'Espíritos',
    quizzes: getSubcategoryCount(cat.ID_ESPIRITOS),
    percentage: 0,
    imageBackground: require('@assets/images/Categories/Spirits.png'),
    description:
      'Teste seus conhecimentos sobre os espíritos que contribuíram com a codificação da doutrina espírita e os que estão presentes desde então até a atualidade.',
  },
  {
    id: cat.ID_HISTORIAS,
    title: 'Histórias',
    quizzes: getSubcategoryCount(cat.ID_HISTORIAS),
    percentage: 0,
    imageBackground: require('@assets/images/Categories/Stories.png'),
    description:
      'Teste seus conhecimentos sobre as histórias e casos da vida de pessoas que contribuíram com a doutrina espírita.',
  },
];
