export const hasValidData = (data) => {
  return data && Object.values(data).some((item) => item > 0);
};
