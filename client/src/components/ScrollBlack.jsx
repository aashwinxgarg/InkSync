import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBlack({text}) {
  return (
    <VelocityScroll
      text={text}
      default_velocity={2}
      className="font-display text-center text-4xl tracking-[-0.02em] text-black opacity-60 drop-shadow-sm dark:text-white md:text-9xl md:leading-[9rem] "
    />
  );
}
