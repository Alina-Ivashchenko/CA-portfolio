import { useState, useEffect } from 'react';
import profileImage from '../assets/Me.png'; // Ensure this path is correct
import './Header.css';

const Header = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 300); // Delay fade-in effect slightly

    const texts = [
      "Welcome to my portfolio!",
      "I am a Community Leader and Software Engineer Student.",
      "Passionate about fostering inclusive communities.",
      "Organizing events that bring people together.",
      "Creating solutions to enhance campus life."
    ];

    const handleTyping = () => {
      const currentText = texts[loopNum % texts.length];
      const updatedText = isDeleting
        ? currentText.substring(0, text.length - 1)
        : currentText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 75 : 150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <header className={`header ${fadeIn ? 'fade-in' : ''}`}>
      <img src={profileImage} alt="Your Name" className="profile-image" />
      <div className="intro-text">
        <h1>Alina Ivashchenko</h1>
        <span>{text}</span>
        <span className="cursor">|</span>
      </div>
    </header>
  );
};

export default Header;
