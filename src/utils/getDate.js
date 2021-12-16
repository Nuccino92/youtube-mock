export const getDate = (date) => {
  const convertDate = new Date(date);

  const day = convertDate.toLocaleDateString("default", { day: "numeric" });
  const month = convertDate.toLocaleDateString("default", { month: "short" });
  const year = convertDate.toLocaleDateString("default", { year: "numeric" });

  // return ` ${month} ${day}, ${convertDate.getFullYear()}`;
  return `${month} ${day}, ${year}`;
};
