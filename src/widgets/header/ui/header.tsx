"use client";

import Link from "next/link";

import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";

export const Header = () => {
  const menuItems: string[] = ["Главное", "Мое", "Контакты"];

  return (
    <>
      <header className="bg-black-700 text-white relative z-20">
        <Container className="flex items-center min-h-[--header-row-height]">
          <div className="flex items-center justify-center gap-x-10 w-full text-md">
            {menuItems.map((menuItem, index) => (
              <Link
                href="/"
                className="cursor-pointer opacity-80 hover:opacity-100 transition-all duration-200"
                key={index}>
                {menuItem}
              </Link>
            ))}
          </div>
        </Container>
      </header>
      <div className="bg-black-700 text-white sticky top-0 z-20">
        <Container className="flex justify-between min-h-[--header-row-height] items-center">
          <Link href="/" className="text-xl font-semibold">
            Кинолента <span className="sr-only">Вернуться на главную страницу</span>
          </Link>
          <Button size="sm">Смотреть сейчас</Button>
        </Container>
      </div>
    </>
  );
};
