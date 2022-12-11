import React,{useState,useEffect} from 'react'

function Nav() {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };
    useEffect(() => {
      document.body.className = theme;

    }, [theme]);

  return (
    <header className='nav-header'>
      <div className='nav'>
        <span>Where in the world?</span>
        <button onClick={toggleTheme}><ion-icon name="moon-outline"></ion-icon>Dark mode</button>
    </div>
    </header>

  )
}

export default Nav