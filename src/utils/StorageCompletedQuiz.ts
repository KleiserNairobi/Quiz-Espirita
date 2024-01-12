import {load, save, saveString} from './Storage';
import {HistoryProps} from '@models/History';

const KEY = 'completed-quiz';

export function completedQuizGettAll() {
  try {
    const storage = load(KEY);
    const history: HistoryProps[] = storage ? storage : [];
    return history;
  } catch (error) {
    return [];
  }
}

export function completedQuizCheckIfObjectExists(
  category: string,
  subcategory: string,
) {
  try {
    const storage = completedQuizGettAll();
    const filtered = storage.filter(
      item => item.title == category && item.subtitle == subcategory,
    );
    return filtered.length > 0;
  } catch {
    return false;
  }
}

export function completedQuizAdd(history: HistoryProps) {
  try {
    const response = completedQuizGettAll();
    const storageHistory = response ? response : [];
    const storage = [...storageHistory, history];
    save(KEY, storage);
  } catch (error) {
    throw error;
  }
}

export function completedQuizRemove(category: string, subcategory: string) {
  try {
    const storage = completedQuizGettAll();
    const filtered = storage.findIndex(
      item => item.title == category && item.subtitle == subcategory,
    );
    if (filtered !== -1) {
      storage.splice(filtered, 1);
      save(KEY, storage);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}
