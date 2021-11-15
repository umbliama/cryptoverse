<template>
  <div class="body">
    <header class="header"></header>
    <section class="model">
      <model-gltf
        :backgroundColor="'#000'"
        :backgroundAlpha="1"
        src="models/glb/LP23.glb"
      ></model-gltf>
    </section>
  </div>
</template>


<style scoped>
.header {
  background: url("~/static/header-bg.png") no-repeat;
  background-position: 100% 100%;
  height: 100vh;
  background-size: cover;
}
</style>

<script>
import { ModelGltf } from "vue-3d-model";

export default {
  components: {
    "model-gltf": ModelGltf,
  },
};
</script>