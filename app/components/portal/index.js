import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import NavMenu from './Menu'
import SVG from '../svg'

import '../../sass/portal.sass'

export default ({children}) => {
    let [loaded, setLoaded] = useState(false),
    toggleMenu = () => document.body.classList.toggle('menu-open'),
    toggleTheme = (color) => {
        let settings = JSON.parse(localStorage.getItem('portalSettings') || '{"theme": "sunrise"}'),
        theme = color || settings.theme
        document.documentElement.className = theme ? theme+'-theme' : ''
        localStorage.setItem('portalSettings', JSON.stringify(Object.assign(settings,{theme: theme})))
    }

    useEffect(() => {
        setLoaded(true)
        toggleTheme()
    },[])
    
    if (!loaded) return null
    else return (
        <adpt-portal>
            <Head>
                <title>{'AdoptED Online Learning Portal' || process.env.BASE_TITLE}</title>
            </Head>
            {/* <menu onClick={toggleMenu}>
                <NavMenu toggleTheme={toggleTheme}/>
            </menu> */}
            <header>
                {/* <div className="adpt-mobile-menu" onClick={toggleMenu}>
                    <div className="adpt-mobile-menu-icon">
                        <div className="adpt-mobile-menu-icon-lines"></div>
                    </div>
                </div> */}
				<adpt-logo>
					<SVG.AdptLogo/>
				</adpt-logo>
            </header>
            {children}
		</adpt-portal>
    )
}