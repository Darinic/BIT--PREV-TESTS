import {useState, useEffect} from 'react'

const Demo = () => {
    // useEffect(() => {
    //     return function cleanup() {}
    // }, [syHi])
    const [syHi, setSyHi] = useState('')
    if(syHi.length===0) {
        return(
            <div className="container">
                <button onClick={() =>{setSyHi('Labas')}}>Press me</button>
            </div>
        )
    }else {
        return (
            <div className="container">
                <p>{syHi}</p>
            </div>
        )
    }

}

export default Demo