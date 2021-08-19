import React from 'react'

export default function Footer() {
    return (
        <div>
            <div class="p-3 mb-2 bg-dark text-white">
            
            <div class="d-flex justify-content-center align-item-center">
                    <div class ="align-self-center">
                            <h1>Emergency is just a tap away</h1>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Tellus commodo id volutpat congue cursus urna, <br/>
                                        pellentesque 
                                        faucibus. Sagittis porttitor pretium, urna elit aliquam.
                                        Ante morbi commodo 
                                    </p>
                            <button className="logoBtn"><img src="./images/app-store.png" alt="app store link" /></button> 
                            <button className="logoBtn"><img src="./images/playstore.png" alt="play store link" /></button> 
                        </div>
                        </div>  
            </div>     
        </div>
    )
}
