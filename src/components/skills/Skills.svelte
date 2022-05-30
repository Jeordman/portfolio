<script lang="ts">
  import { Skills } from './skillText';
</script>

<section id="skills">
  {#each Skills as skill}
    <div class="skill-holder">
      <header class="the-thing">
        {#each skill.images as image}
          <img src={image.src} alt={image.alt} width={skill.imageWidth} />
        {/each}
      </header>
      <h2>{skill.title}</h2>
      {#each skill.info as info}
        <p>{info}</p>
      {/each}
      {#if skill.example}
        <h3>{skill.example.title}</h3>
        <img src={skill.example.image} alt={skill.example.alt} />
      {/if}
    </div>
  {/each}
</section>

<style>
  #skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
  }
  .skill-holder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 35px;
    width: 100%;
    max-width: 500px;
    padding: 0 20px;
  }

  .the-thing {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>
