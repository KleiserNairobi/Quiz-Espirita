export interface IQuizes {
  id: string;
  idCategory: string;
  idSubcategory: string;
  questions: {
    title: string;
    alternatives: string[];
    correct: number;
  }[];
}
