const formattedDate = () => {
  const year = new Date().getFullYear();
  const month = () => {
    const raw = new Date().getMonth() + 1;
    return raw > 9 ? raw : '0' + raw;
  }
  const day = () => {
    const raw = new Date().getDate();
    return raw > 9 ? raw : '0' + raw;
  }
  return `${year}-${month()}-${day()}`;
}

export { formattedDate };
