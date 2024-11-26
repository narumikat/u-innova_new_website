import React, { useEffect, useState } from 'react';

const ReplaceMe = ({ words, speed = 2000, animation = 'fadeIn', loopCount = 'infinite' }) => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loop, setLoop] = useState(0);

    useEffect(() => {
        if (loopCount !== 'infinite' && loop >= loopCount) return;

        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % words.length;
            setCurrentWord(words[nextIndex]);
            setCurrentIndex(nextIndex);

            if (nextIndex === 0) setLoop((prevLoop) => prevLoop + 1);
        }, speed);

        return () => clearInterval(interval);
    }, [currentIndex, loop, loopCount, speed, words]);

    return (
        <span
            className={`animated ${animation}`}
            style={{ display: 'inline-block', animationDuration: `${speed / 1000}s` }}
        >
      {currentWord}
    </span>
    );
};

export default ReplaceMe;
