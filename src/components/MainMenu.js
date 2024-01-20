import { slide as Menu } from 'react-burger-menu'
import styles from "../styles/mainMenu.module.css"
import { useNavigate } from 'react-router-dom'

const MainMenu = () => {
    var menuStyles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '20px',
          height: '20px',
          left: '36px',
          top: '20px'
        },
        bmBurgerBars: {
          background: '#fff'
        },
        bmBurgerBarsHover: {
          background: '#EA698B'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px',
          margin: '18px'
        },
        
        bmCross: {
          background: '#fff',
          height: '24px',
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%'
        },
        bmMenu: {
          background: 'rgba(9, 3, 36, 0.9)',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em',
          backdropFilter: "blur(4px)"

        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#EA698B',
          padding: '0.8em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 14
          
        },
        bmItem: {
            color: '#fff',
            textDecoration: 'none',
        },
        
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
        
    }

    const navigate = useNavigate()
    return ( 
        <Menu styles={menuStyles}>
                <a style={{cursor: "pointer"}} id="home" className={`${styles.menuItem} menu-item`} onClick={() => {navigate("/", { state: { targetId: "bannerSection" } });}}>Home</a>
                <a style={{cursor: "pointer"}} id="announcements" className={`${styles.menuItem} menu-item`} onClick={() => {navigate("/", { state: { targetId: "announcementsSection" } });}}>Announcements</a>
                <a style={{cursor: "pointer"}} id="attractions" className={`${styles.menuItem} menu-item`} onClick={() => {navigate("/", { state: { targetId: "attractionsSection" } });}}>Attractions</a>
                <a id="map" className={`${styles.menuItem} menu-item`} href="/event-map">Event Map</a>
                {/*<a id="schedule" className={`${styles.menuItem} menu-item`} href="/schedule">Stage Schedule</a>*/}
                {/*<a id="leaderboard" className={`${styles.menuItem} menu-item`} href="/leaderboard">Leaderboard</a>*/}
                <a id="quiz" className={`${styles.menuItem} menu-item`} href="/quiz">Character Quiz</a>
                {/*<a id="team" className={`${styles.menuItem} menu-item`} href="/team">Our Team</a>*/}
                <a style={{cursor: "pointer"}} id="attractions" className={`${styles.menuItem} menu-item`} onClick={() => {navigate("/", { state: { targetId: "directionsSection" } });}}>Getting to SUTD</a>
            </Menu>
     );
}
 
export default MainMenu;