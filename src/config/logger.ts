const errorHandler = (err: Error, from: string) => {
  console.error(`Error from ${from}: ${err.message}`);
};
