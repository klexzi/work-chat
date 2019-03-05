const normalizePhone = phone => {
  if (!phone) {
    return phone;
  }

  const onlyNums = phone.replace(/[^\d]/g, "");
  if (onlyNums.length <= 3) {
    return "+" + onlyNums;
  }
  //   if (onlyNums.length <= 11) {
  //     return `+${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
  //   }
  return `+${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 13)}`;
};

export { normalizePhone as default };
