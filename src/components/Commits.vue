<template>
  <div>
    <h2>Commits</h2>
    <div class="item" v-for="(commit, index) in getCommits" :key="index">
      <p>
        <strong>Author: {{ commit.commit.author.name }}</strong>
      </p>
      <p>Date: {{ commit.commit.author.date }}</p>
      <p>Message: {{ commit.commit.message }}</p>
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
  padding: 0.7rem 1rem;
  margin: 0.3rem 0;
  border-radius: 1rem;
}

h2 {
  text-align: center;
}

p {
  border-bottom: 1px #333 dashed;
  margin-bottom: 0.6rem;
}
</style>