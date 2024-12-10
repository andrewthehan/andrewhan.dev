const LOCAL_STORAGE_KEY = "achievements";

function fixed(achievements: Achievement[]): Achievement[] {
  return Array.from(
    new Set(
      achievements.filter((achievement: Achievement) =>
        Object.values(Achievement).includes(achievement),
      ),
    ),
  );
}

function setAchievements(achievements: Achievement[]) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(fixed(achievements)));
}

export function getAchievements(): Achievement[] {
  const value = localStorage.getItem(LOCAL_STORAGE_KEY);
  const achievements = value == null ? [] : JSON.parse(value);
  const validated = fixed(achievements);
  if (validated.length !== achievements.length) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(validated));
  }
  return validated;
}

export function addAchievement(achievement: Achievement) {
  const achievements = getAchievements();
  setAchievements([...achievements, achievement]);
}

export enum Achievement {
  HELLO = "HELLO",
  TREASURE_HUNTER = "TREASURE",
  DIED_TO_MIMIC = "DIED_TO_MIMIC",
}
