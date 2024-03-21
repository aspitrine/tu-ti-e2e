class LocalStorage {
  static getItem<T>(key: string) {
    const item = localStorage.getItem(key);
    if (!item) {
      return null;
    }

    return JSON.parse(item) as T;
  }

  static setItem<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export default LocalStorage;
