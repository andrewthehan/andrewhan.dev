export enum GameKey {
  ACHIEVEMENTS = "ACHIEVEMENTS",
  ROCK_COUNT = "ROCK_COUNT",
  GOBLIN_HEALTH = "GOBLIN_HEALTH",
  CHEST_KEY = "CHEST_KEY",
}

export function remove(key: GameKey) {
  localStorage.removeItem(key);
}

export function getJson(key: GameKey, defaultValue: any): any {
  const value = localStorage.getItem(key);
  return value == null ? defaultValue : JSON.parse(value);
}

export function setJson(key: GameKey, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getNumber(key: GameKey, defaultValue: number): number {
  const value = localStorage.getItem(key);
  return value == null ? defaultValue : Number(value);
}

export function setNumber(key: GameKey, value: number) {
  localStorage.setItem(key, String(value));
}
