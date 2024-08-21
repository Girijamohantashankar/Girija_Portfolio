"use client";
import '../../../styles/socialcount.css';
import { useSpring, animated } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faCodepen, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';

export default function SocialPage() {
    const [hasAnimated, setHasAnimated] = useState(false);

    const { number } = useSpring({
        from: { number: 0 },
        number: hasAnimated ? 100 : 0,
        config: { duration: 2000 },
        reset: false
    });
    const { number1 } = useSpring({
        from: { number1: 0 },
        number1: hasAnimated ? 1200 : 0,
        config: { duration: 2000 },
        reset: false
    });
    const { number2 } = useSpring({
        from: { number2: 0 },
        number2: hasAnimated ? 250 : 0,
        config: { duration: 2000 },
        reset: false
    });
    const { number3 } = useSpring({
        from: { number3: 0 },
        number3: hasAnimated ? 50 : 0,
        config: { duration: 2000 },
        reset: false
    });
    useEffect(() => {
        setHasAnimated(true);
    }, []);

    return (
        <div className='social_count_container'>
            <div className='social_cards'>
                <div className='social_card'>
                    <div className='social_img'>
                        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className='social_font_icon' />
                        </a>
                    </div>
                    <div className='social_text'>
                        <h2>Project Repositories</h2>
                        <animated.h1>{number.to(n => `${Math.floor(n)}+`)}</animated.h1>
                    </div>
                </div>

                <div className='social_card'>
                    <div className='social_img'>
                        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className='social_font_icon' />
                        </a>
                    </div>
                    <div className='social_text'>
                        <h2>LinkedIn Followers</h2>
                        <animated.h1>{number1.to(n => `${Math.floor(n)}+`)}</animated.h1>
                    </div>
                </div>

                <div className='social_card'>
                    <div className='social_img'>
                        <a href="https://codepen.io/your-profile" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faCodepen} className='social_font_icon' />
                        </a>
                    </div>
                    <div className='social_text'>
                        <h2>Total Pens</h2>
                        <animated.h1>{number2.to(n => `${Math.floor(n)}+`)}</animated.h1>
                    </div>
                </div>

                <div className='social_card'>
                    <div className='social_img'>
                        <a href="https://stackoverflow.com/users/your-id" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faStackOverflow} className='social_font_icon' />
                        </a>
                    </div>
                    <div className='social_text'>
                        <h2>Total Contributions</h2>
                        <animated.h1>{number3.to(n => `${Math.floor(n)}+`)}</animated.h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
