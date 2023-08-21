import './App.css';
import * as ocr from '@paddle-js-models/ocr';
import {useEffect, useState} from "react";


function App() {

    const [loading, setLoading] = useState(false)

    useEffect(()=>{

        ocr.init().then((res) => {
            console.log("res", res)
        }).catch((e) => {
            console.log("catch error:", e)
        })


    },[])
    return (
        <div className="App">
            <p>{loading ? "加载模型中" : ""}</p>

            <canvas

            />

        </div>
    );
}

export default App;
