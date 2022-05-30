<script lang="ts">
  import * as animateScroll from 'svelte-scrollto';
  import ContentMapper from './components/ContentMapper.svelte';
  import Activism from './components/Activism.svelte';
  import AboutMe from './components/AboutMe.svelte';
  import Footer from './components/Footer.svelte';
  import Header from './components//header.svelte';

  import { Skills } from './content/skillContent';
  import { Experience, darkBg } from './content/experienceContent';
</script>

<Header />
<ContentMapper contentList={Skills} />
<ContentMapper contentList={Experience} {darkBg} />
<Activism />
<AboutMe />
<Footer />
