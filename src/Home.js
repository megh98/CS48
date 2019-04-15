import React from 'react'
import './App.css'

export const Home = () => <div>
    <div id="showcase">
        <div class="container">
        <div class="showcase-content">
            <h1> Welcome to <span class="text-primary">UCSB</span></h1>
            <p class="lead">Get Involved! Now is the time to explore your interests and have fun at the same time. There are many opportunities for you to get involved.</p>
        </div>
        </div>
    </div>
    <section id="home-info" class="bg-dark">
    <div class="info-img"></div>
    <div class="info-content">
      <h2><span class="text-primary">What</span> does this app do?</h2>
      <p style={{lineHeight: "2em"}}>
          UCSB Club Recommender is a web application to help incoming college students to select the club(s) that would best match them.
          Unlike similar club searching platforms, this recommender sorts relevant organizations by their ratings and allows for peer reviews.
          Critically, UCSB Club Recommender tailors the results to best fit the students’ unique interests and desires based on personalized queries.
      </p>
    </div>
  </section>
  <section id="features">
    <div class="box bg-light">
      <i class="fas fa-search fa-3x"></i>
      <h3>Search by Keyword</h3>
      <p>Search for Clubs based on Keywords!</p>
    </div>
    <div class="box bg-primary">
        <i class="fas fa-star-half-alt fa-3x"></i>
        <h3>Review System</h3>
        <p>Rate and Give Feedback for a club you have been a part of.</p>
    </div>
    <div class="box bg-light">
        <i class="fas fa-male fa-3x"></i>
        <h3>Best Fit Club</h3>
        <p>Find the best suited club based on personality questions.</p>
    </div>
  </section>
  <div class="clr"></div>
  <Copyright1/>
</div>

const Copyright1 = () => <footer id="main-footer">
  <p>Team SegFault &copy; 2019, All Rights Reserved</p>
</footer>