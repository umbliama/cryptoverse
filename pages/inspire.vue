<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">First section ...</div>
      <div class="section">Second section ...</div>
    </full-page>
  </div>
</template>
<script>
import { ModelGltf } from "vue-3d-model";
export default {
  components: {
    "model-gltf": ModelGltf,
    VueFullPage: () => import("vue-fullpage.js"),
  },
  data() {
    return {
      options: {
        afterLoad: this.afterLoad,
      },
    };
  },
  methods: {
    afterLoad() {
      console.log("Emitted 'after load' event.");
    },
  },
};
</script>