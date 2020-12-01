<template>
  <div>
    <h2>Branches</h2>
    <div class="item" v-for="(branch, index) in getBranches" :key="index">
      <p>{{ branch.name }}</p>
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
  created: function () {
    this.fetchDataBranch(this.$route.params.index);
  },
};
</script>

<style scoped>
.item {
  background: #999;
  margin: auto;
  padding: 0.6rem 1rem;
  margin: 0.3rem 2rem 0.3rem 0;
  border-radius: 1rem;
}

.item:last-child {
  margin-bottom: 2rem;
}

h2 {
  text-align: center;
  margin-bottom: 1rem;
}

@media (max-width: 800px) {
  .item {
    text-align: center;
    margin: 0.3rem 0rem;
  }
}
</style>