import { useEffect, useState } from "react";

const randomChars =
  "诶比西迪伊艾吉艾艾杰开艾勒艾马艾娜哦屁吉吾艾儿艾丝提伊吾维豆贝尔维艾克斯吾艾贼德";

interface TypingAnimationProps {
  texts: string[] | string;
  delay: number;
}

const useTypingAnimation = ({ texts, delay }: TypingAnimationProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentText, setCurrentText] = useState("");
  const [randomLetter, setRandomLetter] = useState("");

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        const textToType =
          typeof texts === "string" ? texts : texts[currentIndex];
        let currentIndexToType = currentText.length;

        if (Array.isArray(texts) && currentIndexToType === textToType.length) {
          clearInterval(typingInterval);
          setIsTyping(false);

          setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setIsTyping(true);
            setCurrentText("");
          }, 3000);
        } else if (
          typeof texts === "string" &&
          currentIndexToType === texts.length
        ) {
          clearInterval(typingInterval);
          setIsTyping(false);
        } else {
          const tempText = textToType.slice(0, currentIndexToType + 1);
          setCurrentText(tempText);
        }
      }
    }, delay);

    const randomLetterInterval = setInterval(() => {
      if (!isTyping) return setRandomLetter("");
      setRandomLetter(
        randomChars[Math.floor(Math.random() * randomChars.length)]
      );
    }, delay);

    return () => {
      clearInterval(typingInterval);
      clearInterval(randomLetterInterval);
    };
  }, [currentIndex, isTyping, currentText, texts, delay]);

  return { currentText, randomLetter };
};

export default useTypingAnimation;
