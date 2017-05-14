<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Publications</h2>
    <ul>
      <!--<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>-->
      <!--<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>-->
      <!--<li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>-->
      <!--<li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>-->
      <li><a href="https://vuejs.org" target="_blank">Books</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Research Reports</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Case Studies</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Apps</a></li>
      <!--<br>-->
      <!--<li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>-->
    </ul>
    <h2>Client Services</h2>
    <ul>
      <!--<li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>-->
      <!--<li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>-->
      <!--<li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>-->
      <!--<li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>-->
      <li><a href="http://router.vuejs.org/" target="_blank">Publishing</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">Editing</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">Consulting</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">Programming</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Research Publishers LLC'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #3c33ff;
}
</style>
