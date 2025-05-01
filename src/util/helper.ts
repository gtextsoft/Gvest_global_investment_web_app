export const getTimeGreeting = (): string => {
  const hours = new Date().getHours();

  if (hours >= 0 && hours < 12) return "Good morning!";
  if (hours >= 12 && hours < 17) return "Good afternoon!";
  return "Good evening!";
};
