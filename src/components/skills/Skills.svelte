<script lang="ts">
import SkillSection from "./SkillSection.svelte";
import { Skills } from "./skillText";
</script>

{#each Skills as skill}
  <div class="skill-holder">
    <header class="the-thing">
      {#each skill.images as image}
        <img src="{image.src}" alt="{image.alt}" width="{skill.imageWidth}">
      {/each}
    </header>
    <h2>{skill.title}</h2>
    {#each skill.info as info}
      <p>{info}</p>
    {/each}
  </div>
{/each}

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


<style>
.skill-holder{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  padding: 0 20px;
}
 .the-thing{
  
 }

</style>