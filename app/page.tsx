import "./motion.css";
import Opening from "./components/Opening";
import Story from "./components/Story";
import Thanksgiving from "./components/Thanksgiving";
import Gifts from "./components/Gifts";
import Closing from "./components/Closing";
import ChapterNav from "./components/ChapterNav";
import ThemeSwitch from "./components/ThemeSwitch";
import Celebration from "./components/Celebration";

export default function Home() {
  return (
    <>
      <main className="overflow-x-clip pb-28">
        <Opening />
        <Story />
        <Thanksgiving />
        <Gifts />
        <Closing />
      </main>
      <ChapterNav />
      <ThemeSwitch />
      <Celebration />
    </>
  );
}
