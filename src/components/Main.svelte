<script lang="ts">
  import VideoPlayer from './VideoPlayer.svelte';
  import * as animateScroll from 'svelte-scrollto';
</script>

<button
  on:click={() =>
    animateScroll.scrollTo({ element: '.about-me', duration: 1000 })}
  >Scroll to thing</button
>
  <div>
    devops
    <img src={'./images/languages/aws.png'} width="28px" />
    <img src={'./images/languages/docker.webp'} width="28px" />
    <img src={'./images/languages/firebase.jpeg'} width="28px" />
  </div>

  <div>
    Languages

    <img src={'./images/languages/js.png'} width="28px" />
    <img src={'./images/languages/go.jpeg'} width="28px" />

    <img src={'./images/languages/ts.jpeg'} width="28px" />
    <img src={'./images/languages/python.png'} width="28px" />
    <img src={'./images/languages/php.png'} width="28px" />
  </div>
  <div>
    environment
    <img src={'./images/languages/nvim.png'} width="28px" />
    <img
      src="https://media.giphy.com/media/fh6nwbYdOZ18ObiAf8/giphy.gif"
      width="160px"
    />
  </div>

  <div class="databases">
    databases

    <img src={'./images/languages/mysql.png'} width="28px" />
    <img src={'./images/languages/postgres.png'} width="28px" />
    <img src={'./images/languages/mongo.jpg'} width="28px" />
  </div>

  <div>
    Front end
    <img src={'./images/frameworks/react.png'} width="28px" />
    <img src={'./images/frameworks/svelte.png'} width="28px" />
    <img src={'./images/frameworks/vue.webp'} width="28px" />
  </div>

<div>
  <div>
    Experience whiteboard
    <VideoPlayer source={'lOK4HKDSwMw'} autoplay={1} controls={1} />

    messaging platform
    <VideoPlayer source={'RSe8nAQO-oI'} autoplay={1} controls={1} />
  </div>

  <div>
    Activism
    <img src={'./images/earth-hero.png'} width="200px" />
  </div>
</div>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

<div class="about-me">
  About me // climbing
  <VideoPlayer source={'KBobj5LuJzM'} autoplay={0} controls={0} />
  <VideoPlayer source={'y0opGFau8cI'} autoplay={0} controls={0} />
</div>

  <div>
    socials
    <img
      href="https://www.linkedin.com/in/jeordincallister/"
      src={'./images/linkedin-logo.png'}
      alt="LinkedIn Logo"
      width="50px"
      target="_blank"
    />
    <img src={'./images/github-logo.png'} width="28px" />
  </div>