import { GiAlienFire } from "react-icons/gi";

type HeaderProps = {
  title: string;
  className?: string;
};

export default function HeaderCaption({
  title,
  className = "",
}: HeaderProps) {
  return (
    <header className={`flex flex-col items-center justify-center md:text-5xl text-3xl font-bold m-6 ${className}`}>
      <div>
        <GiAlienFire />
      </div>
      <h1>{title}</h1>
    </header>
  );
}
