<template>
  <div>
    <router-link class="link" to="/">Back</router-link>
    <!-- <div>{{ $route.params.index }}</div> -->
    <div v-for="(branch, index) in getBranches" :key="index">
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
.link {
  text-decoration: none;
  color: #333;
  margin-left: 3rem;
}
</style>