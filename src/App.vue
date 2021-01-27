<template>
  <section id="wrapper">
    <div id="content">
      <Header />
      <MainContent />
    </div>
  </section>
</template>

<script>
import Header from './components/Header.vue'
import MainContent from './components/MainContent.vue'

export default {
  name: 'App',
  components: {
    Header,
    MainContent
  }
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
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

#wrapper {
  overflow: scroll;
  height: 100%;
}

#content {
  max-width: 900px;
  padding-top: 10vh;
  padding-bottom: 10vh;
  margin: auto;
}

@media only screen and (max-width: 750px) {
  #content {
    padding-top: 10px;
  }
}
</style>