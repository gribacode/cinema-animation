import { SmoothScroll } from "@/app/layout/SmoothScroll";
import { Header } from "@/widgets/header";
import { Main } from "@/widgets/main";

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <main>
        <Main />
      </main>
    </SmoothScroll>
  );
}
