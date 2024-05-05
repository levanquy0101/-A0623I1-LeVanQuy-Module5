import {Link} from "react-router-dom"
import styles from "./Home.module.css"

function Home(){
    return(
        <div className={styles.app}>
            <h1>Home</h1>
            <Link to="/login">Trang login</Link>
        </div>
    )
}
export default Home