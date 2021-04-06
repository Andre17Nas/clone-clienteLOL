import './login.css'
import { MdHelp, MdSettings } from 'react-icons/md'
import { SiFacebook} from 'react-icons/si'
import { FcGoogle} from 'react-icons/fc'
import { IoLogoApple } from 'react-icons/io'
import { BiRightArrowAlt} from 'react-icons/bi'

export default function Login(){
    return(
        <div className="container">
            <div className="container-form">
            <div id="help"><MdHelp size={15} id="btn-help"/></div>
            <div id="logo"></div>
            <div id="login">Fazer Login</div>
                <form>
                    <div className="inputbox">
                    <input type="text" require="required"/>
                    <span>NOME DE USUÁRIO</span>
                    </div>
                    <div className="inputbox">
                    <input type="password" require="required"/>
                    <span>SENHA</span>
                    </div>
                
                    <div className="login-buttons">
                        <btn id="btn-fb"><SiFacebook size={22}/></btn>
                        <btn id="btn-google"><FcGoogle size={22}/></btn>
                        <btn id="btn-apple"><IoLogoApple size={30}/></btn>
                    </div>
                    
                </form>
                    <div className="checkbox">
                        <input type="checkbox" id="check"/>               
                        <label>Manter Login</label>
                    </div>
                    <div id="entrar">
                        <BiRightArrowAlt size={36}/>
                    </div>
                <p>NÃO CONSEGUE INICIAR A SESSÃO? CRIAR CONTA</p>
                <div id="version">V27.0.3</div>
            </div>
            <div className="container-background">
                <nav>
                    <ul>
                        <li>-</li>
                        <li>?</li>
                        <li id="close">X</li>
                    </ul>
                </nav>
                <div id="btn-info">
                    <div id="info">!</div>
                </div>
                <div className="container-settings">
                    <MdSettings size={16} id="settings"/>
                </div>
            </div>
        </div>
    );
}