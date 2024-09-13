const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const formatDate = (givenDate: Date): string => {
  return givenDate.toLocaleDateString("en-US", options);
};
