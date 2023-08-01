"use client";
import useTypingAnimation from "@/lib/typingAnimation";


const Home = () => {
  const texts = { texts: ["Tpgainz", "トーマス", "托马斯"], delay: 30 };

  const {currentText, randomLetter} = useTypingAnimation(texts);

  return (
    <h1 className="-mt-12 xl:text-9xl md:text-8xl text-6xl text-white font-thin tracking-wider uppercase select-none">
      <span className="typing-animation">
        {currentText}
        {randomLetter}
      </span>
    </h1>
  );
};

export default Home;
