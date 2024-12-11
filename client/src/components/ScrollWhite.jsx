import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollWhite({text}) {
  return (
    <VelocityScroll
      text={text}
      default_velocity={2}
      className="font-display text-center text-4xl tracking-[-0.02em] text-gray-500 opacity-80 drop-shadow-sm dark:text-white md:text-9xl md:leading-[9rem]"
    />
  );
}
