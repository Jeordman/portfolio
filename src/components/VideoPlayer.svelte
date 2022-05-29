<script lang="ts">
  import YouTube from 'svelte-youtube';

  export let source;
  export let controls: 0 | 1 = 0;
  export let autoplay: 0 | 1 = 0;
</script>

{#if  source}
  <YouTube
    options={{
      playerVars: {
        autoplay,
        controls,
        showinfo: 0,
        rel: 0,
        modestbranding: 1,
        playsinline: 1,
      },
    }}
    videoId={source}
  />
{/if}