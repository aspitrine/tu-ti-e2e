class LocalStorage {
  static getItem<T>(key: string) {
    if (typeof localStorage === 'undefined') {
      return null;
    }
    const item = localStorage.getItem(key);
    if (!item) {
      return null;
    }

    return JSON.parse(item) as T;
  }

  static setItem<T>(key: string, value: T) {
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export default LocalStorage;
