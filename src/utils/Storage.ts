import {MMKVLoader} from 'react-native-mmkv-storage';
import {HistoryProps} from '@models/History';

const storage = new MMKVLoader().withInstanceID('@quiz').initialize();

export function load(key: string): any | null {
  try {
    let result = storage.getString(key);
    return result ? JSON.parse(result) : null;
  } catch {
    return null;
  }
}

export async function loadAsync(key: string): Promise<any | null> {
  try {
    const result = await storage.getStringAsync(key);
    return result ? JSON.parse(result) : null;
  } catch {
    return null;
  }
}

export function loadString(key: string): string | undefined | null {
  try {
    return storage.getString(key);
  } catch {
    return null;
  }
}

export async function loadStringAsync(
  key: string,
): Promise<string | undefined | null> {
  try {
    return await storage.getStringAsync(key);
  } catch {
    return null;
  }
}

export function loadBoolean(key: string): boolean | undefined {
  try {
    return storage.getBool(key);
  } catch {
    return undefined;
  }
}

export function saveBoolean(key: string, value: boolean): boolean {
  try {
    return storage.setBool(key, value);
  } catch {
    return false;
  }
}

export function loadArray(key: string): HistoryProps[] {
  try {
    return storage.getArray(key);
  } catch {
    return [];
  }
}

export async function loadArrayOfObjectsAsync(key: string): Promise<any[]> {
  try {
    const storedArray = await storage.getArrayAsync(key);
    return Array.isArray(storedArray) ? storedArray : [];
  } catch {
    return [];
  }
}

export function save(key: string, value: any): boolean {
  try {
    saveString(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export async function saveAsync(key: string, value: any): Promise<boolean> {
  try {
    await saveStringAsync(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function saveString(key: string, value: string): boolean {
  try {
    storage.setString(key, value);
    return true;
  } catch {
    return false;
  }
}

export async function saveStringAsync(
  key: string,
  value: string,
): Promise<boolean> {
  try {
    await storage.setStringAsync(key, value);
    return true;
  } catch {
    return false;
  }
}

export function saveArray(key: string, value: HistoryProps[]): boolean {
  try {
    storage.setArray(key, value);
    return true;
  } catch {
    return false;
  }
}

export async function saveArrayAsync(
  key: string,
  value: object[],
): Promise<boolean> {
  try {
    await storage.setArrayAsync(key, value);
    return true;
  } catch {
    return false;
  }
}

export function remove(key: string): void {
  try {
    storage.removeItem(key);
  } catch {}
}

export function clear(): void {
  try {
    storage.clearStore();
  } catch {}
}
