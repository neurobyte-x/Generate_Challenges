import React from "react"
import { MCQchallenge } from "../challenge/MCQChallenge"
import { useState,useEffect } from "react"


export function HistoryPanel() {
    const [history, setHistory] = useState([]);
    const [isloading, setisLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetchHistory()
    },[])

    const fetchHistory = async () => {
        setisLoading(false);
    }

    if(isloading){
        return <p>History Loading.....</p>
    }
    if(error){
        return (
            <div className="error-message">
                <p>{error}</p>
                <button onClick={fetchHistory}>Retry</button>
            </div>
        )
    }


    return <div className="history-panel">
        <h2>History</h2>
        {history.length === 0 ? <p>No challenge history</p> :
            <div className="history-list">
                {history.map((challenge) => {
                    return <MCQChallenge
                                challenge={challenge}
                                key={challenge.id}
                                showExplanation
                            />
                })}
            </div>
        }
    </div>
}