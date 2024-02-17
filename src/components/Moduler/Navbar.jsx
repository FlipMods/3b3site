import styles from './app.module.css';
import { SiMinetest } from 'solid-icons/si'
import { AiOutlineAlignCenter,AiOutlineClose } from 'solid-icons/ai'
import { createSignal } from 'solid-js'
const [count, setCount ] = createSignal(0)
setCount(true)
export default function App() {
    return (
        <div  class={styles.app}>
            <div class={styles.box}>
                <img src="./src/assets/favicon.png" height='48' width='119'> </img>
            </div>
            <div class={styles.menu}>
                <div class={styles.title}>
                    <span></span>
                </div>
                <div class={styles.center}>
                <div>
                <a href="https://realms.gg/kDru6ei8Hh4/">
                <button class={styles.btn}>
                Join Realm      
                </button>
                </a>
                <a href="https://discord.gg/tZz5TXuXt9">
                <button class={styles.btn}>
                Join Discord      
                </button>
                </a>
                </div>

                </div>
                <div class={styles.responsive} >
                    <div>
                    <div id='active' class={styles.active}>
                        <div class={styles.close}>
                        <AiOutlineClose size={32} color="#fff" onClick={
                                () => {
                                    if(setCount(count)) {
                                    document.getElementById('active').style.display = 'flex';
                                        return setCount(false)
                                    } else {
                                        document.getElementById('active').style.display = 'none';
                                        return setCount(true)
                                    }
                                }
                            }/>
                        </div>
                               <div class={styles.resmenu}>
                                   <div class="restext">
                                    <div class={styles.restexti} >
                                        <span>PlaceHolder</span>
                                    </div>
                                    <div  class={styles.restexti}>
                                        <span>PlaceHolder</span>
                                    </div>
                                    <div  class={styles.restexti}>
                                        <span>PlaceHolder</span>
                                    </div>
                                    <div class={styles.restexti}>
                                        <span>PlaceHolder</span>
                                    </div>
                                   </div>
                               
                            </div>
                        </div>
                         <div class={styles.burger}>
                            <AiOutlineAlignCenter size={32} color="#fff" onClick={
                                () => {
                                    if(setCount(count)) {
                                    document.getElementById('active').style.display = 'flex';
                                        return setCount(false)
                                    } else {
                                        document.getElementById('active').style.display = 'none';
                                        return setCount(true)
                                    }
                                }
                            }/>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
