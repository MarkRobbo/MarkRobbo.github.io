<template>
  <div id="content">
      <h1 id="name">Mark Robinson</h1>
      <h2 id="tagline">Software Engineer</h2>
      <ul id="social">
          <li class="first"><a href="https://www.linkedin.com/in/mark-robinson-8b4813109/" target="_blank"><img src="./assets/linkedin.svg" alt="LinkedIn" width="32" height="32"/></a></li>
          <li><a href="https://www.github.com/MarkRobbo" target="_blank"><img src="./assets/github.png" alt="Github" width="32" height="32"/></a></li>
          <li><a href="mailto:me@markrobinson.dev" target="_blank"><img src="./assets/gmail.svg" alt="Email" width="32" height="32"/></a></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

* {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  background-color: #f9f9f9;
  overflow-y: hidden;
}

h1 {
  font-weight: 500;
  font-size: 48px;
}

h1, h2 {
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

#content {
  width: 375px;
  height: 200px;
  padding: 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>