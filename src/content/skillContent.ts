import type Content from "../models/content.model"

export const Skills: Content[] = [
  {
    title: 'Devops',
    imageWidth: '60px',
    images: [
      { src: './images/languages/aws.png', alt: 'aws' },
      { src: './images/languages/docker.webp', alt: 'docker' },
      { src: './images/languages/firebase.png', alt: 'firebase' },
    ],
    info: [
      'as good as it gets',
      'I have been using AWS since the beginning of my career',
      'I have been using Docker since the beginning of my career',
    ],
  },
  {
    title: 'Languages',
    imageWidth: '80px',
    images: [
      { src: './images/languages/ts.jpeg', alt: 'ts logo' },
      { src: './images/languages/go.jpeg', alt: 'go logo' },
      { src: './images/languages/php.png', alt: 'php logo' },
      { src: './images/languages/python.png', alt: 'python logo' },
      { src: './images/languages/js.png', alt: 'js logo' },
    ],
    info: ['Proficient in JavaScript, TypeScript, Go, Python, PHP', 'noice'],
  },
  {
    title: 'Databases',
    imageWidth: '80px',
    images: [
      { src: './images/languages/mysql.png', alt: 'mysql logo' },
      { src: './images/languages/postgres.png', alt: 'postgres logo' },
      { src: './images/languages/mongo.webp', alt: 'mongo logo' },
    ],
    info: [
      'Fully created and managed databases for my projects',
    ],
  },
  {
    title: 'Web Frameworks/Libraries',
    imageWidth: '80px',
    images: [
      { src: './images/frameworks/react.png', alt: 'reactjs logo' },
      { src: './images/frameworks/svelte.png', alt: 'sveltejs logo' },
      { src: './images/frameworks/vue.webp', alt: 'vuejs logo' },
    ],
    info: [
      'Experience in many frontend frameworks',
    ],
  },
  {
    title: 'Environments',
    imageWidth: '80px',
    images: [
      { src: './images/languages/manjaro.png', alt: 'manjaro logo' },
      { src: './images/languages/nvim.png', alt: 'nvim logo' },
      { src: './images/languages/i3.png', alt: 'i3 logo' },
      { src: './images/languages/tmux.png', alt: 'tmux logo' },
    ],
    info: [
      'I have configured many environments for my projects',
      'My current setup is Nvim + Tmux + Bash + Manjaro Linux',
    ],
    example: {
      title: 'My current setup',
      image: 'https://media.giphy.com/media/fh6nwbYdOZ18ObiAf8/giphy.gif',
      alt: 'gif of current setup',
    },
  },
];
