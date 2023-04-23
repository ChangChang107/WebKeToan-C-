<template>

<router-view to="/"></router-view>

</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

@font-face {
  font-family: Roboto;
  src: url('./assets/fonts/Roboto-Regular.ttf');
}

@font-face {
  font-family: Roboto Medium;
  src: url('./assets/fonts/Roboto-Medium.ttf');
}

@font-face {
  font-family: Roboto Bold;
  src: url('./assets/fonts/Roboto-Bold.ttf');
}

body{
    margin: 0px;
    font-family: Roboto, sans-serif;
}

.main{
    display: flex;
    width: 100%;
    height: calc(100vh - 56px);
}
</style>
