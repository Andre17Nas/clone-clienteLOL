import './login.css'
import { MdHelp, MdSettings } from 'react-icons/md'
import { SiFacebook} from 'react-icons/si'
import { FcGoogle} from 'react-icons/fc'
import { IoLogoApple, IoMdEye } from 'react-icons/io'
import { BsFillEyeSlashFill } from 'react-icons/bs'
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
                    <input type="text" required="required"/><br/>
                    <span>NOME DE USUÁRIO</span>
                    </div>
                    <div className="inputbox">
                        <BsFillEyeSlashFill size={20} id="eyeoff"/>
                        <input type="password" required id="inputpass"/>
                        <span>SENHA</span>
                    </div>
                
                    <div className="login-buttons">
                        <btn id="btn-fb"><SiFacebook size={22}/></btn>
                        <btn id="btn-google"><FcGoogle size={22}/></btn>
                        <btn id="btn-apple"><IoLogoApple size={30}/></btn>
                    </div>
                    
                </form>
                    <div className="checkbox">
                        <input type="checkbox" id="check" name="check"/>               
                        <label for="check">Manter Login</label>
                    </div>
                    <div id="entrar" className="btn-signin">
                        <BiRightArrowAlt size={36}/>
                    </div>
                <p><a href="#">NÃO CONSEGUE INICIAR A SESSÃO?</a> <a href="#">CRIAR CONTA</a></p>
                <div id="version"><a href="#">V27.0.3</a></div>
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
                    <MdSettings size={25} id="settings"/>
                </div>
            </div>
        </div>
    );
}