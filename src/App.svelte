<script lang="ts">
  import ContentMapper from './components/ContentMapper.svelte';
  import Footer from './components/Footer.svelte';
  import Header from './components/Header.svelte';

  import { Skills } from './content/skillContent';
  import { Experience } from './content/experienceContent';
  import { Activism } from './content/activismContent';
  import { AboutMe } from './content/aboutMeContent';
</script>

<Header />
<ContentMapper contentList={Skills} />
<ContentMapper contentList={Experience} darkBg={true} />
<ContentMapper contentList={Activism} />
<ContentMapper contentList={AboutMe} darkBg={true} />
<Footer />
