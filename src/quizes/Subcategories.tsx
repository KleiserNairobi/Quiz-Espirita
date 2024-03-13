import { Subcategory } from "@models/Subcategories";
import { Quizes } from "./Quizes";
import cat from "@assets/constants/cat.json";
import sub from "@assets/constants/sub.json";

function getQuestionCount(categoryId: string, subcategoryId: string): number {
  const quiz = Quizes.find(
    (q) => q.idCategory === categoryId && q.idSubcategory === subcategoryId
  );
  if (quiz) {
    return quiz.questions.length;
  }
  return 0;
}

export const Subcategories: Subcategory[] = [
  {
    id: sub.CON_ID_ESPIRITISMO_HISTORIA,
    idCategory: cat.ID_CONCEITOS,
    title: "Espiritismo: história",
    subtitle: `${getQuestionCount(
      cat.ID_CONCEITOS,
      sub.CON_ID_ESPIRITISMO_HISTORIA
    )} questões`,
  },
  {
    id: sub.CON_ID_ESPIRITISMO_DEFINICAO,
    idCategory: cat.ID_CONCEITOS,
    title: "Espiritismo: definição",
    subtitle: `${getQuestionCount(
      cat.ID_CONCEITOS,
      sub.CON_ID_ESPIRITISMO_DEFINICAO
    )} questões`,
  },
  {
    id: sub.CON_ID_DEUS,
    idCategory: cat.ID_CONCEITOS,
    title: "Existência de Deus",
    subtitle: `${getQuestionCount(cat.ID_CONCEITOS, sub.CON_ID_DEUS)} questões`,
  },
  {
    id: sub.PER_ID_CHICO_INFORMACOES,
    idCategory: cat.ID_PERSONAGENS,
    title: "Chico: informações pessoais",
    subtitle: `${getQuestionCount(
      cat.ID_PERSONAGENS,
      sub.PER_ID_CHICO_INFORMACOES
    )} questões`,
  },
  {
    id: sub.PER_ID_CHICO_MEDIUNIDADE,
    idCategory: cat.ID_PERSONAGENS,
    title: "Chico: mediunidade",
    subtitle: `${getQuestionCount(
      cat.ID_PERSONAGENS,
      sub.PER_ID_CHICO_MEDIUNIDADE
    )} questões`,
  },
  {
    id: sub.PER_ID_CHICO_OBRAS_PSICOGRAFADAS,
    idCategory: cat.ID_PERSONAGENS,
    title: "Chico: obras psicografadas",
    subtitle: `${getQuestionCount(
      cat.ID_PERSONAGENS,
      sub.PER_ID_CHICO_OBRAS_PSICOGRAFADAS
    )} questões`,
  },
  {
    id: sub.PER_ID_EURIPEDES_BARSANULFO,
    idCategory: cat.ID_PERSONAGENS,
    title: "Eurípedes Barsanulfo",
    subtitle: `${getQuestionCount(
      cat.ID_PERSONAGENS,
      sub.PER_ID_EURIPEDES_BARSANULFO
    )} questões`,
  },
  {
    id: sub.PER_ID_YVONNE_PEREIRA,
    idCategory: cat.ID_PERSONAGENS,
    title: "Yvonne do Amaral Pereira",
    subtitle: `${getQuestionCount(
      cat.ID_PERSONAGENS,
      sub.PER_ID_YVONNE_PEREIRA
    )} questões`,
  },
  {
    id: sub.PER_ID_DIVALDO,
    idCategory: cat.ID_PERSONAGENS,
    title: "Divaldo Pereira Franco",
    subtitle: `${getQuestionCount(
      cat.ID_PERSONAGENS,
      sub.PER_ID_DIVALDO
    )} questões`,
  },
  {
    id: sub.LIV_ID_BRASIL_CORACAO_MUNDO,
    idCategory: cat.ID_LIVROS,
    title: "Brasil, coração do mundo, pátria do evangelho",
    subtitle: `${getQuestionCount(
      cat.ID_LIVROS,
      sub.LIV_ID_BRASIL_CORACAO_MUNDO
    )} questões`,
  },
  {
    id: sub.ESP_ID_MEIMEI,
    idCategory: cat.ID_ESPIRITOS,
    title: "Meimei",
    subtitle: `${getQuestionCount(
      cat.ID_ESPIRITOS,
      sub.ESP_ID_MEIMEI
    )} questões`,
  },
];
