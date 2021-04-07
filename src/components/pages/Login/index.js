import React, {useEffect, useState} from 'react'
import './login.css'
import { MdHelp, MdSettings } from 'react-icons/md'
import { SiFacebook} from 'react-icons/si'
import { FcGoogle} from 'react-icons/fc'
import { IoLogoApple, IoMdEye } from 'react-icons/io'
import { BsFillEyeSlashFill } from 'react-icons/bs'
import { BiRightArrowAlt} from 'react-icons/bi'

export default function Login(){

    const [inputText, setInputText] = useState('')
    const [inputPass, setInputPass] = useState('')

    console.log("login: "+inputText+" senha: " + inputPass)

    return(
        <div className="container">
            <div className="container-form">
            <div id="help"><MdHelp size={15} id="btn-help"/></div>
            <div id="logo"></div>
            <div id="login">Fazer Login</div>
                <form>
                    <div className="inputbox">
                        <input type="text" required id="inputText" onChange={()=>setInputText(document.getElementById('inputText').value)}/><br/>
                        <span>NOME DE USUÁRIO</span>
                    </div>

                    <div className="inputbox">
                        <BsFillEyeSlashFill size={20} id="eyeoff"/>
                        <input type="password" required id="inputpass" onChange={()=>setInputPass(document.getElementById('inputpass').value)}/>
                        <span>SENHA</span>
                    </div>
                
                    <div className="login-buttons">
                        <button id="btn-fb"><SiFacebook size={22}/></button>
                        <button id="btn-google"><FcGoogle size={22}/></button>
                        <button id="btn-apple"><IoLogoApple size={30}/></button>
                    </div>                  
                
                    <div className="checkbox">
                        <input type="checkbox" id="check" name="check"/>               
                        <label for="check">Manter Login</label>
                    </div>

                    <div id="entrar" className="btn-signin">
                        <BiRightArrowAlt size={36}/>
                    </div>

                </form>
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
                { 

                    useEffect(() => {
        
                            function validationInput(){
                                if(inputText !== '' && inputPass !== ''){
                                    document.getElementById('entrar').style.backgroundColor = '#d13639';
                                    document.getElementById('entrar').style.border = '#d13639';
                                }else{
                                    document.getElementById('entrar').style.backgroundColor = 'transparent';                                   
                                    document.getElementById('entrar').style.border = '3px solid #E8E8E8';
                                }
                            }

                            validationInput()

                        }, [inputText, inputPass])

                 }
        </div>
    );
}