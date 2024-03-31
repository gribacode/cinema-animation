import { Container } from "@/shared/ui/Container";
import { FadeIn } from "@/shared/ui/FadeIn";

export const Info = () => {
  const infoItems: string[] = [
    "Новинки кино каждый месяц без рекламы.",
    "Смотрите на любом устройстве, используя наше приложение.",
    "Кино и сериалы только в высоком качестве.",
    "Подключите к подписке всю вашу семью.",
  ];

  return (
    <Container className="text-white z-10 relative text-3xl md:text-4xl py-36 font-bold space-y-12 max-w-[692px]">
      {infoItems.map((infoItem, index) => (
        <FadeIn key={index}>
          <p>{infoItem}</p>
        </FadeIn>
      ))}
    </Container>
  );
};
