import React from 'react';
import './style.css';

function SlotMachine() {
    return (
        <div>
            <div className="slotMachineContainer" id="machine">
                <div className="slotMachine" id="lucky-Machine-Title">
                    <h2>Wild Cherry's</h2>
                </div>
                <div className="slotMachine" id="lucky-Machine">
                    <div className="reel" id="reel-1">
                        <div id="top-reel-1">
                            <p>🍒</p>
                        </div>
                        <div id="center-reel-1">
                            <p>🍒</p>
                        </div>
                        <div id="bottom-reel-1">
                            <p>🍒</p>
                        </div>
                    </div>
                    <div className="reel" id="reel-2">
                        <div id="top-reel-2">
                            <p>🍒</p>
                        </div>
                        <div id="center-reel-2">
                            <p>🍒</p>
                        </div>
                        <div id="bottom-reel-2">
                            <p>🍒</p>
                        </div>
                    </div>
                    <div className="reel" id="reel-3">
                        <div id="top-reel-3">
                            <p>🍒</p>
                        </div>
                        <div id="center-reel-3">
                            <p>🍒</p>
                        </div>
                        <div id="bottom-reel-3">
                            <p>🍒</p>
                        </div>
                    </div>
                </div>
                <div className="slotMachine" id="lucky-Machine-Sats">
                    <div className="slotMachineStats">
                        <h2>Credits: </h2>
                            <h2 id="credits">1000</h2>
                    </div>
                    <div className="slotMachineStats">
                        <h2>Payout: </h2>
                        <h2 id="pay">0</h2>
                    </div>
                    <div className="slotMachineStats">
                        <div className="slotMachineStats">
                            <span className="button bet betButtonSize" >Bet 1 (1X)</span>
                            <span className="button bet betButtonSize" >Bet 2 (2X)</span>
                            <span className="button bet betButtonSize" >Bet 3 (3X)</span>
                            <span className="button bet betButtonSize" >Bet Max (4X)</span>
                        </div>
                        <div className="button bet spinButtonSize" >
                            <h2>BET</h2>
                            <p id="betAmount">25</p>
                        </div>
                    </div>
                </div>
            </div>
            <table id="payout">
                <thead>
                    <tr>
                        <th>Symbol</th> 
                        <th>Payout (Max)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>🍒🍒🍒</td>
                        <td>50,000</td>
                    </tr>
                    <tr>
                        <td>(777) (777) (777)</td>
                        <td>25,000</td>
                    </tr>
                    <tr>
                        <td>(77) (77) (77)</td>
                        <td>10,000</td>
                    </tr>
                    <tr>
                        <td>🍒🍒</td>
                        <td>2,500</td>
                    </tr>
                    <tr>
                        <td>7 7 7</td>
                        <td>1,000</td>
                    </tr>
                    <tr>
                        <td>A A A</td>
                        <td>500</td>
                    </tr>
                    <tr>
                        <td>K K K</td>
                        <td>200</td>
                    </tr>
                    <tr>
                        <td>Q Q Q</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>J J J</td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <td>🍒</td>
                        <td>25</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SlotMachine;