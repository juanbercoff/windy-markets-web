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
            return fetch('http://f8d0c169b759.ngrok.io/api/trades/all')
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
        <div class="row d-flex justify-content-center mt-100 mb-100 trade-list-container">
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body text-center">
                        <h4 class="card-title m-b-0">Current Trades</h4>
                    </div>
                    <section className="row justify-content-center">
                        <section className="col" >
                            <ul className="list-group">
                                {listTrades}
                            </ul>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default TradesList;