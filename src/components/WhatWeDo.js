import React from 'react';

function WhatWeDo() {
    return (
        <section className='whatWeDo-container' id="whatWeDo">
            <section className="options">
                <div className="options-text">
                    <p>We buy weekly options contracts in-the-money chosen by our algorithm. 
                    An option contract is a derivative traded in the stock market that trades during both bullish and bearish markets. 
                    The price of an option contract in-the-money is the difference between the strike price and the underlying stock price.<br/><br/>
                    Example: If AAPL stock is $100 and we are bullish on the stock, we buy a weekly call option with a strike price of $90, paying $10 for the contract. 
                    If the stock price increases 3% to $103, our contract value will rise to $13, making a 30% profit.<br/><br/>
                    </p>
                </div>
                <div className="options-text">
                    <p>We share our trades by sending messages within the app. 
                    The trading message specifies the underlying stock if it is a call (bullish) or a put (bearish) option, the strike price, and the contract expiration date. 
                    Each contract involves 100 shares, multiplied by the contract price to calculate the amount of money invested. 
                    The money at risk is equivalent to the money spent to buy the contract, as there are no margin calls on these trades.<br/><br/>
                    Followers may replicate the trades at their own discretion with their own personal brokers. 
                    If you are going to follow us, you should initiate the trade(s) immediately after you receive the message, as market prices change fast. 
                    The option contracts are sold before expiration. We send a message to close the position and make a profit.<br/><br/>
                    </p>
                </div>
            </section>
        </section>
    )
}

export default WhatWeDo;
