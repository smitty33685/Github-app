<template>
  <div>
    <h2>Commits</h2>
    <div class="item" v-for="(commit, index) in getCommits" :key="index">
      <p>{{ commit.commit.author.date }}</p>
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
  created: function () {
    this.fetchDataCommit(this.$route.params.index);
  },
};
</script>
  
<style scoped>
.item {
  background: #999;
  margin: auto;
  padding: 0.5rem 1rem;
  margin: 0.3rem 0;
  border-radius: 1rem;
}

h2 {
  text-align: center;
}
</style>