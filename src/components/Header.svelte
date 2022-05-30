<header>
  <section id="dark-bg" />
  <section id="me-image-bg">
    <div
      id="me-image"
      style="background-image: url('https://bit.ly/3NFY5gi');"
    />
  </section>
</header>
<div id="intro-banner">
  <h1 id="intro-large-text">Hello 👋😄</h1>
  <h3 id="intro-sub-text">Im Jeordin</h3>
  <h3 id="intro-sub-text">a Software Engineer</h3>
</div>

<style>
  header {
    width: 100%;
    height: 165px;
  }

  #dark-bg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100px;
    background-color: rgb(36, 36, 36);
    z-index: -10;
  }

  #me-image-bg {
    margin-left: 18px;
    background-color: white;
    width: 158px;
    height: 158px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #me-image {
    width: 155px;
    height: 155px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    z-index: 10;
  }

  #intro-banner {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #intro-large-text {
    font-size: 40px;
  }

  #intro-sub-text {
    font-size: 28px;
  }
</style>
