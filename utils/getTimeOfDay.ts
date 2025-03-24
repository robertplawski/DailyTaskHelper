export const getTimeOfDay = (): string => {
  const hour = new Date().getHours();
  if (hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour <= 16) {
    return "afternoon";
  } else {
    return "evening";
  }
};
