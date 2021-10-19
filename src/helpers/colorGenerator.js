function colorGenerator() {
  const red = Math.floor(Math.random() * (255 - 0)) + 0;
  const green = Math.floor(Math.random() * (255 - 0)) + 0;
  const blue = Math.floor(Math.random() * (255 - 0)) + 0;

  return `rgba(${red}, ${green}, ${blue}, 0.6)`;
}

export default colorGenerator;
