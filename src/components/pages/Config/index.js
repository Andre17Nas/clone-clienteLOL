import { MdClose } from 'react-icons/md'
import { MdArrowDropUp, MdArrowDropDown} from 'react-icons/md'
import {React, useEffect, useState} from 'react'
import './config.css'

export default function Config(){

    const [drop, setDrop] = useState(0)
    const [text, setText] = useState('LIVE (BR)')
    /*
        0 = false
        1 = true
    */

    function closePanel(){
        //document.querySelector('.box-settings').setAttribute('display', 'none');
        document.getElementById('box-settings').style.display = 'none';
    }

    function dropMenu(){
        if(drop === 1){
            setDrop(0)
            
            document.getElementById("select").style.backgroundColor = "#FFF"
            document.getElementById("drop").style.visibility = "visible"
            document.getElementById("drop-choose").style.color = "#111"

            document.getElementById("drop-icon-up").style.display = "flex"
            document.getElementById("drop-icon-down").style.display = "none"
        }else if(drop === 0){
            setDrop(1)                   
            document.getElementById("drop-choose").style.color = "#FFF"
            document.getElementById("select").style.backgroundColor = "#232323"
            document.getElementById("drop").style.visibility = "hidden"

            document.getElementById("drop-icon-up").style.display = "none"
            document.getElementById("drop-icon-down").style.display = "flex"
            
        }

    }

 return(
    <div className="box-settings" id="box-settings">
        <div className="box">
            <div id="footer">
                <p id="p1">TERCEIROS</p>
                <p id="p2">V27.0.3</p>
            </div>
            <div className="content">
                <h1>CONFIGURAÇÕES</h1>
                <label>PATCHLINE ATUAL</label>
                <div id="select" onClick={()=>dropMenu()}>
                    <label id="drop-choose">LIVE (BR)</label><MdArrowDropDown size={30} id="drop-icon-down"/><MdArrowDropUp size={30} id="drop-icon-up"/>
                </div>
                <div id="drop">
                    <div id="item">
                        <label for="live" id="option1" onClick={()=>setText('LIVE (BR)')} >LIVE (BR)</label>
                    </div>
                    <div id="item">
                        <label for="pbe" id="option2" onClick={()=>setText('PBE')} >PBE</label>
                    </div>
                </div>
                <label>IDIOMA DO JOGO</label>
                <div id="select">
                    <label>Português</label><MdArrowDropDown size={30}/>
                </div>
            </div>
        </div>

        <div className="close-container">
            <div id="btn-close-settings" onClick={()=>closePanel()}>
                <MdClose size={30} id="grclose"/>
            </div>
        </div>
        {
            useEffect(()=>{

                function setSelect(){

                    document.getElementById("drop-choose").innerText = text
                    
                    if(document.getElementById("drop-choose").innerText === document.getElementById('option1').innerText){
                        document.getElementById('option1').style.color = 'rgb(209, 54, 57)'
                    }else{
                        document.getElementById('option1').style.color = 'rgb(126, 126, 126)'
                    }

                    if(document.getElementById("drop-choose").innerText === document.getElementById('option2').innerText){
                        document.getElementById('option2').style.color = 'rgb(209, 54, 57)'
                    }else{
                        document.getElementById('option2').style.color = 'rgb(126, 126, 126)'
                    }

                    dropMenu()
                }

                 setSelect()   

            }, [text])
        }
    </div>
 );
}