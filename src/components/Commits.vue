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
  
<style lang="scss" scoped>
.item {
  background: #999;
  padding: 0.7rem 1rem;
  margin: 0.3rem 0;
  border-radius: 1rem;

  p {
    border-bottom: 1px #333 dashed;
    margin-bottom: 0.6rem;
  }
}

h2 {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2rem;
}

@media (max-width: 800px) {
  .item {
    text-align: center;
  }
}
</style>