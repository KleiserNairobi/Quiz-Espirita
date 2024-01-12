import {load, save} from './Storage';
import {HistoryProps} from '@models/History';

export function historyGettAll() {
  try {
    const storage = load('history');
    const history: HistoryProps[] = storage ? JSON.parse(storage) : [];
    return history;
  } catch (error) {
    return [];
  }
}

export function historyAdd(history: HistoryProps) {
  try {
    const response = historyGettAll();
    const storageHistory = response ? response : [];
    const storage = JSON.stringify([...storageHistory, history]);
    save('history', storage);
  } catch (error) {
    throw error;
  }
}

export function historyRemove(id: string) {
  try {
    const storage = historyGettAll();
    const filtered = storage.filter(history => history.id !== id);
    const histories = JSON.stringify(filtered);
    save('history', histories);
  } catch (error) {
    throw error;
  }
}
