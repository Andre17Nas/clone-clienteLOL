import { GrClose } from 'react-icons/gr'
import './config.css'

export default function Config(){

    function closePanel(){
        //document.querySelector('.box-settings').setAttribute('display', 'none');
        document.getElementById('box-settings').style.display = 'none';
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
                <select id="select">
                    <option id="option">LIVE(BR)</option>
                </select>
                <label>PATCHLINE ATUAL</label>
                <select id="select">
                    <option id="option">Português</option>
                </select>
            </div>
        </div>

        <div className="close-container">
            <div id="btn-close-settings" onClick={()=>closePanel()}>
                <GrClose size={40} id="grclose"/>
            </div>
        </div>
        
    </div>
 );
}