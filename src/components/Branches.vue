<template>
  <div>
    <h2>Branches</h2>
    <div class="item" v-for="(branch, index) in getBranches" :key="index">
      {{ branch.name }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "branches",
  computed: {
    ...mapGetters(["getBranches"]),
  },
  methods: {
    ...mapActions(["fetchDataBranch"]),
  },
  created() {
    this.fetchDataBranch(this.$route.params.index);
  },
};
</script>

<style scoped>
.item {
  background: #999;
  margin: auto;
  padding: 0.3rem 1rem;
  margin: 0.3rem 0;
  border-radius: 1rem;
}

h2 {
  text-align: center;
}
</style>