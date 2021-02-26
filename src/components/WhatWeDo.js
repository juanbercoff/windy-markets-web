import React from 'react';

function WhatWeDo() {
    return (
        <section className='whatWeDo-container' id="whatWeDo">
            <section className="options">
                <div className="options-text">
                    <p>We buy weekly option contracts in the money chosen by our algorithm.
                    An option contract is a derivative traded in the stock market that trades both bullish and bearish markets.<br/><br/>
                    The price of an option contract in the money is the difference between the underlyining stock price and the strike price of the contract.<br/><br/>
                    The option contract price changes at a higher rate of the underlying stock price.<br/><br/>
                    Example: If AAPL stock is $100 and we are bullish on the stock, we buy a weekly call option with a strike price of $90, paying $10 for the contract. If the stock price increases 3% to $103, our contract value will rise to $13, making a 30% profit.
                    </p>
                </div>
                <div className="options-text">
                    <p>We share our current trades in the <b>Open trades</b> section.<br/>
                    The trading message specifies the underlying stock, if it is a call (bullish) or put (bearish) option, the strike price and the contract expiration date.<br/><br/>
                    Multiply the contract price by 100 to calculate the amount of money invested, as each contract represents 100 stocks.<br/><br/>
                    The money at risk is equivalent to the money spent to buy the contract.
                    There are no margins or collaterals on these trades.
                    Followers may replicate the trades at their brokers.<br/><br/>
                    If you are going to follow us, you should trade <b>right after</b> you receive the message, as market prices change fast.
                    The option contracts are sold before expiration.
                    We send a message to close position and make a profit.</p>
                </div>
            </section>
        </section>
    )
}

export default WhatWeDo;
