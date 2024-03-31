const images: Widgets.Model.Image[] = [
  { url: "/images/car.jpg", title: "Путешествие по России" },
  { url: "/images/kitchen.jpg", title: "Рецепт счастья" },
  { url: "/images/man.jpg", title: "Прохожий" },
  { url: "/images/mountain.jpg", title: "Загадочное место" },
  { url: "/images/movie.jpg", title: "Кино в деталях" },
  { url: "/images/stone.jpg", title: "Путешествие" },
  { url: "/images/street.jpg", title: "Уличная фотография" },
  { url: "/images/train.jpg", title: "Долгий путь" },
];

const randomImagesFirstSet = [...images]
  .sort(() => Math.random() - 0.5)
  .concat([...images].sort(() => Math.random() - 0.5))
  .concat([...images].sort(() => Math.random() - 0.5));

const randomImagesSecondSet = [...images]
  .sort(() => Math.random() - 0.5)
  .concat([...images].sort(() => Math.random() - 0.5))
  .concat([...images].sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);

export { images, randomImagesFirstSet, randomImagesSecondSet };
