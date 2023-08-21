import './App.css';
import * as ocr from '@paddle-js-models/ocr';
import {useEffect, useState} from "react";


function App() {

    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState("")

    useEffect(()=>{

        const cvs=document.getElementById("cvs")
        const img1=document.getElementById("img1")

        setLoading(true)
        ocr.init().then((res) => {

            ocr.recognize(img1,{canvas:cvs}).then((res) => {
                console.log("res", res)
                setResult(JSON.stringify(res.text,null,2))
            }).catch((e) => {
                console.log("catch error:", e)
            })

        }).catch((e) => {
            console.log("catch error:", e)
        }).finally(()=>{
            setLoading(false)
        })


    },[])
    return (
        <div className="App">
            <p style={{color:"#f00",fontSize:18}}>{loading ? "加载模型中" : ""}</p>

            <div style={{display:"flex",flexDirection:"row"}}>
                <div>
                    <p style={{color:"#f00",fontSize:18}}>原始图片：</p>
                    <img  style={{width:540,height:1200}} id="img1" src="/test1.jpg" alt=""/>
                </div>
                <div style={{padding:"0 15px",width:540,}}>
                    <p style={{color:"#f00",fontSize:18}}>识别框：</p>
                    <canvas
                        style={{width:540,height:1200}}
                        id="cvs"
                    />
                </div>
                <pre style={{color: "#f00", fontSize: 18, width: 300}}>识别结果：{result}</pre>
            </div>





        </div>
    );
}

export default App;
