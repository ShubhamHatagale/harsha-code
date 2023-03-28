import React, {useState, useEffect, setState} from 'react'
import ReactLoading from 'react-loading';
import './Component.css';

export default function Preloader() {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])


    return (
        <div className="loader">
            <div >
            {
            !loading ? <ReactLoading type={'balls'} color={'red'} height={100} width={100} />:
            <ul></ul>
            }
            </div>
        </div>
    )
}
