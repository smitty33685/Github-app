<template>
  <div>
    <!-- <router-link class="link" to="/">Back</router-link> -->
    <!-- <div>{{ $route.params.index }}</div> -->
    <div v-for="(commit, index) in getCommits" :key="index">
      {{ commit.commit.message }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "commits",
  computed: {
    ...mapGetters(["getCommits"]),
  },
  methods: {
    ...mapActions(["fetchDataCommit"]),
  },
  created() {
    this.fetchDataCommit(this.$route.params.index);
  },
};
</script>

<style scoped>
/* .link {
  text-decoration: none;
  color: #333;
  margin-left: 3rem;
} */
</style>