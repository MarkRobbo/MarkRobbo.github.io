<template>
  <header>
    <div class="headerSection">
      <h1 id="name">Mark Robinson</h1>
      <h2 id="tagline">Software Engineer</h2>
      <ul id="social">
          <li class="first"><a href="https://www.linkedin.com/in/mark-robinson-8b4813109/" target="_blank"><img src="./../assets/linkedin.svg" alt="LinkedIn" width="32" height="32"/></a></li>
          <li><a href="https://github.com/MarkRobbo" target="_blank"><img src="./../assets/github.png" alt="Github" width="32" height="32"/></a></li>
          <li><a href="mailto:me@markrobinson.dev" target="_blank"><img src="./../assets/gmail.svg" alt="Email" width="32" height="32"/></a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
header {
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 100%;
  padding-right: 20px;
  padding-left: 20px;
  top: 0px;
}

h1 {
  font-weight: 500;
  font-size: 48px;
}

h1, h2, h3 {
  padding: 0;
  margin: 0;
}

li.first {
  margin-left: 3px !important;
}

#social {
  list-style-type: none;
  overflow: hidden;
  padding: 0;
}

#social li {
  float: left;
  margin-left: 15px
}

@media only screen and (max-width: 750px) {
  header {
    position: relative;
    width: 100%;
    text-align: center;
    height: auto;
  }

  #social {
    width: 140px;
    margin: 10px auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>