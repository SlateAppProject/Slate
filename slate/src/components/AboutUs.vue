<template>
  <div>
    <h1 id="room-title">ABOUT TEAM MEH</h1>
    <div id="about-us-view">
      <div class="team-member-cards">
        <img src='../assets/sadie.jpg' class="card-dev-image"  alt="profile-pic"/>
        <div class="card-body">
          <h4 class="card-title">Marisha Hoza</h4>
          <p class="card-text">Be uncommon.</p>
          <a href="https://github.com/MarishaHoza" class="github-link-buttons">
              <img src='../assets/octocat.png' class="github-logo" aria-hidden="true" />@MarishaHoza
          </a>
          <a href="https://https://www.linkedin.com/in/marishahoza" class="github-link-buttons">
            <img src='../assets/linkedin.png' class="linkedin-logo" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div class="team-member-cards">
        <img src='../assets/thanos.jpg' class="card-dev-image"  alt="profile-pic"/>
        <div class="card-body">
          <h4 class="card-title">Brandon Hurrington </h4>
          <p class="card-text">Raconteur. Statesman. Polemicist. Ready to risk it all for one more feature.</p>
          <a href="https://github.com/Kai-ros" class="github-link-buttons">
            <img src='../assets/octocat.png' class="github-logo" aria-hidden="true" />@Kai-ros
          </a>
          <a href="https://www.linkedin.com/in/brandon-hurrington-53b847b7/" class="github-link-buttons">
            <img src='../assets/linkedin.png' class="linkedin-logo" aria-hidden="true" />
          </a>
        </div>
      </div>   
      <div class="team-member-cards">
        <img src='../assets/peter.png' class="card-dev-image"  alt="profile-pic"/>
        <div class="card-body">
          <h4 class="card-title">Peter Le</h4>
          <p class="card-text">Howdy.</p>
          <a href="https://github.com/leepj85" class="github-link-buttons">
            <img src='../assets/octocat.png' class="github-logo" aria-hidden="true" />@leepj85
          </a>
          <a href="https://www.linkedin.com/in/leepj85/" class="github-link-buttons">
            <img src='../assets/linkedin.png' class="linkedin-logo" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div class="team-member-cards">
        <img src='../assets/manish.jpg' class="card-dev-image"  alt="profile-pic"/>
        <div class="card-body">
          <h4 class="card-title">Manish KC</h4>
          <p class="card-text">नमस्ते</p>
          <a href="https://github.com/jManij" class="github-link-buttons">
            <img src='../assets/octocat.png' class="github-logo" aria-hidden="true" />@jManij
          </a>
          <a href="https://www.linkedin.com/in/manish-kc-15a06b127/" class="github-link-buttons">
            <img src='../assets/linkedin.png' class="linkedin-logo" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </div>

  
    
</template>

<script>

export default {
  name: 'AboutUs',
  data() {
      return {

      }
  },
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #about-us-view {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

  }

  #room-title {
    font-weight: bold;
  }

  .team-member-cards {
    border: .05em #2c3e50 solid;
    border-radius: .15em;
    margin: 1em;
    padding: 1em;

  }

  .card-dev-image {
    border: .05em #2c3e50 solid;
    border-radius: .15em;
    height: 25vh;
    width: 100%;
    object-fit: cover;
  }

  .card-body {

  }

  .card-title {
    font-weight: bold;
  }

  .card-text {
    margin: .2em;
    padding: .2em;
  }

  .github-logo {
    height: 10vh;
    width: 5vw;
  }
</style>