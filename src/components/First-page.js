import React from 'react'

export default function Firstpage() {
    return (
        <div>
            <div className="sidebar">
                <div className="sidebar_icon">
                    {/* <img src="" alt="" /> */}
                </div>  
                <div className="sidebar_content">
                    <div className="sidebar_profile">
                        <div className="profile">
                            {/* <img src="" alt="" /> */}
                        </div>
                        <div className="info">
                            <h3 className="fl">Uchicha Madara</h3>
                            {/* <h3 className="info_active fl">.</h3> */}
                            <p>ID: 0013778</p>
                        </div>
                    </div>      
                    <select name="" id="">
                        <option value="">Diapers</option>
                        <option value="">Diapers</option>
                        <option value="">Diapers</option>
                        <option value="">Diapers</option>
                        <option value="">Diapers</option>
                    </select>
                    <input type="" placeholder="Input product" id="input" /> 
                    <input type="submit" value="Analyse" id="analyse" />
                    <div className="sidebar_container">
                        <span>Recent Products</span>
                    <div className="recent_products">
                        <a href="/"><p className="product_one"><img src="Project Icons/purchase flat.png" alt="" /> Plaster from Paris</p></a>
                    <a href="/"> <p className="product_two"><img src="Project Icons/purchase flat.png" alt="" /> Measuring Tape</p></a>
                    </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}
