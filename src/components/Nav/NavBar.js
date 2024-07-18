import React, {useEffect, useState} from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import './NavBar.css'
import {navigationData} from '../../constants/constants'
import {Link, useLocation} from 'react-router-dom'

const NavigationMenuDemo = () => {
    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);
    const [hoveredPath, setHoveredPath] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <NavigationMenu.Root className="NavigationMenuRoot">
            <NavigationMenu.List className={`NavigationMenuList ${isScrolled ? 'scrolled' : ''}`}>
                {navigationData.map((item) => (
                    <NavigationMenu.Item
                        key={item.title}
                        value={item.path}
                        onMouseEnter={() => setHoveredPath(item.path)}
                        onMouseLeave={() => setHoveredPath(null)}
                        onClick={() => setActivePath(item.path)}
                    >
                        <NavigationMenu.Trigger className="NavigationMenuTrigger">
                            <Link to={item.path}
                                  className={`NavigationMenuLink ${activePath === item.path ? 'active' : ''}`}>
                                {item.title}
                            </Link>
                        </NavigationMenu.Trigger>

                    </NavigationMenu.Item>
                ))}

                {/*<NavigationMenu.Indicator className="NavigationMenuIndicator">*/}
                {/*    <div className={`Highlight ${hoveredPath ? 'hovered' : ''}`} />*/}
                {/*</NavigationMenu.Indicator>*/}
            </NavigationMenu.List>

        </NavigationMenu.Root>
    );
};

export default NavigationMenuDemo;