interface Image {
  src: string;
  alt: string;
}

interface Video {
  src: string;
  autoplay: 1 | 0;
  controls: 1 | 0;
}

export default interface Content {
  title: string;
  imageWidth?: string;
  images?: Image[];
  videos?: Video[];
  info: string[];
  example?: {
    title: string;
    image: string;
    alt: string;
  }
}