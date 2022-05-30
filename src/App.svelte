<script lang="ts">
  import * as animateScroll from 'svelte-scrollto';
  import Skills from './components/skills/Skills.svelte';
  import Experience from './components/Experience.svelte';
  import Activism from './components/Activism.svelte';
  import AboutMe from './components/AboutMe.svelte';
  import Footer from './components/Footer.svelte';
  import Header from './components//header.svelte';
</script>

<Header />
<button
  on:click={() =>
    animateScroll.scrollTo({ element: '.about-me', duration: 1000 })}
  >Scroll to thing</button
>
<Skills />
<Experience />
<Activism />
<AboutMe />
<Footer />
