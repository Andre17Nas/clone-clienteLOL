import React, {useEffect, useState} from 'react'
import './login.css'
import { MdHelp, MdSettings, MdInfo } from 'react-icons/md'
import { SiFacebook} from 'react-icons/si'
import { FcGoogle} from 'react-icons/fc'
import { IoLogoApple, IoMdEye } from 'react-icons/io'
import { BsFillEyeSlashFill } from 'react-icons/bs'
import { BiRightArrowAlt} from 'react-icons/bi'

import Config from '../Config'

export default function Login(){

    const [inputText, setInputText] = useState('')
    const [inputPass, setInputPass] = useState('')

    //console.log("login: "+inputText+" senha: " + inputPass)

    function clientSettings(){
        document.getElementById('box-settings').style.display = 'grid';
    }

    function validationInput(){
        if(inputText.length<="1"){
            document.getElementById("inputText").style.outline = "none"
            document.getElementById("inputText").style.backgroundColor = "rgb(244, 227, 245)"
            document.getElementById("inputText").style.border = "3px solid rgb(235, 191, 239)"
            document.getElementById("span").style.color = "#be2bcc"

            document.getElementById("h5").style.visibility = "visible"        
            document.getElementById("h5").style.paddingBottom = "30px"            
            document.getElementById("h5").style.marginTop = "0"
        }else{
            document.getElementById("inputText").style.backgroundColor = "rgb(237, 237, 237)"
            document.getElementById("inputText").style.border = "none"
            document.getElementById("inputText").style.color = "rgb(51, 51, 51)"
            document.getElementById("span").style.color = "#999"
                  
            document.getElementById("h5").style.marginTop = "-10px"
            document.getElementById("h5").style.visibility = "hidden"
            document.getElementById("h5").style.paddingBottom = "0"
        }

    }

    return(
        <div className="container">
            
            <Config/>

            <div className="container-form">
            <div id="help"><MdHelp size={15} id="btn-help"/></div>
            <div id="logo"></div>
            <div id="login">Fazer Login</div>
                <form>
                    <div className="inputbox">
                        <input type="text" required id="inputText" onChange={()=>setInputText(document.getElementById('inputText').value)}/><br/>
                        <span id="span">NOME DE USUÁRIO</span>                                          
                    </div>          
                    <h5 id="h5"><MdInfo size={20}/>  DEVE TER PELO MENOS 2 CARACTERES</h5>        
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
                        <label id="label-check" for="check">Manter Login</label>
                    </div>

                    <div id="entrar" className="btn-signin" onClick={()=>{validationInput()}}>
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
                <div className="container-settings" >
                    <MdSettings size={25} id="settings" onClick={()=>clientSettings()}/>
                </div>
            </div>
                { 

                    useEffect(() => {
        
                            function validationButton(){
                                if(inputText !== '' && inputPass !== ''){
                                    document.getElementById('entrar').style.backgroundColor = '#d13639';
                                    document.getElementById('entrar').style.border = '#d13639';
                                    document.getElementById('entrar').style.cursor = "pointer"
                                }else{
                                    document.getElementById('entrar').style.cursor = "auto"
                                    document.getElementById('entrar').style.backgroundColor = 'transparent';                                   
                                    document.getElementById('entrar').style.border = '3px solid #E8E8E8';
                                }
                            }

                            validationButton()

                        }, [inputText, inputPass])

                 }
        </div>
    );
}