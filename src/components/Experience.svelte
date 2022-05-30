<script lang="ts">
  import VideoPlayer from './VideoPlayer.svelte';
</script>

<section id="experience">
  <div id="experience-holder">
    Experience whiteboard
    <VideoPlayer source={'lOK4HKDSwMw'} autoplay={1} controls={1} />

    messaging platform
    <VideoPlayer source={'RSe8nAQO-oI'} autoplay={1} controls={1} />
  </div>
</section>

<style>
  #experience {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
    background-color: rgb(36, 36, 36);
  }
  #experience-holder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 35px;
    width: 100vw;
    max-width: 500px;
    padding: 0 20px;

    color: #ffffff;
  }
</style>