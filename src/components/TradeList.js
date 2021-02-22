import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import TradeItem from './TradeItem';

const TradesList = () => {
    let history = useHistory();
    const [data, setData] = useState([]);

    const handleClick = (trade) => {
        return history.push({
            pathname:'/modifyTradeForm',
            state: {trade: trade}
        });
    }

    const listTrades = data.map((trade) => {
        return (
            <TradeItem value={trade} handleClick={()=>handleClick(trade)} key={trade.id.toString()}/>
        )  
    })

    
    useEffect(() => {
        const getData = () => {
            return fetch('http://3a2d47845b10.ngrok.io/api/trades/all')
            .then(res => {
                if(res.ok) {
                    
                    return res.json()
                }
                
            }).then(trades => {
                setData(trades)
            })  
        };
        getData();
    }, [])
    return (
        <section className="row justify-content-center">
            <section className="col-12 col-sm-6 col-md-4">
                <ul className="list-group">
                    {listTrades}
                </ul>
            </section>
        </section>
    )
}

export default TradesList;