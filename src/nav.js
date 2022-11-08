import React,{useState,useEffect} from 'react'

function Nav() {
    const [theme, setTheme] = useState('light');
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
    <div className='nav'>
        <span>Where in the world?</span>
        <button onClick={toggleTheme}>Dark mode</button>
    </div>
  )
}

export default Nav