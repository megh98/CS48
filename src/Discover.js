import React from 'react'

export const Discover = () => <section>   
    <div className="search-box">
        <input className="search-txt" type="text" name="" placeholder="Search by Keyword"/>
        <a className="search-btn" href="#">
            <i class="fas fa-search"></i>
        </a>
    </div>
    <Copyright2/>
</section>

const Copyright2 = () => <footer id="main-footer" style={{position: "absolute", bottom: "0", width: "100%"}}>
  <p>Team SegFault &copy; 2019, All Rights Reserved</p>
</footer>