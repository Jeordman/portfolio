<script lang="ts">
  import type Content from "../models/content.model"
  import VideoPlayer from './VideoPlayer.svelte';

  export let contentList: Content[] | null = null;
  export let darkBg = null;
</script>

<section class={darkBg ? 'all-items-dark' : 'all-items'}>
  {#if contentList.length > 0}
    {#each contentList as content}
      <div class="content-holder">
        <header class="main-content-images">
          {#if content.images}
            {#each content.images as image}
              <img src={image.src} alt={image.alt} width={content.imageWidth} />
            {/each}
          {:else if content.videos}
            {#each content.videos as video}
              <VideoPlayer
                source={video.src}
                autoplay={video.autoplay}
                controls={video.controls}
              />
            {/each}
          {/if}
        </header>
        <h2>{content.title}</h2>
        {#each content.info as info}
          <p>{info}</p>
        {/each}
        {#if content.example}
          <h3>{content.example.title}</h3>
          <img src={content.example.image} alt={content.example.alt} />
        {/if}
      </div>
    {/each}
  {/if}
</section>

<style>
  .all-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
  }
  .all-items-dark {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
    color: #ffffff;
    background-color: rgb(36, 36, 36);
  }

  .content-holder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 35px;
    width: 100%;
    max-width: 500px;
    padding: 0 20px;
  }

  .main-content-images {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>
