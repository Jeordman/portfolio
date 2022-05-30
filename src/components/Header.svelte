<header>
  <section id="dark-bg" />
  <section id="me-image-bg">
    <div id="me-image" />
  </section>
</header>

<style>
  header {
    width: 100%;
    height: 180px;
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
    background-image: url(./images/me.png);
    width: 155px;
    height: 155px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    z-index: 10;
  }
</style>
