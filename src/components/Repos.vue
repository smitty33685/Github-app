<template>
  <ul class="list-repos">
    <!-- <li v-for="(repo, index) in getRepos" :key="index" @click="showName">
      {{ repo.name }} -->
    <router-link
      class="link"
      v-for="(repo, index) in getRepos"
      :key="index"
      :to="`/repos/${repo.name}`"
      >{{ repo.name }}</router-link
    >
    <!-- </li> -->
  </ul>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Repos",
  computed: {
    ...mapGetters(["getRepos"]),
  },
  methods: {
    ...mapActions(["fetchData"]),
  },

  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
.list-repos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  list-style: none;
}

.link {
  text-align: center;
  background: #999;
  padding: 1.3rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

a {
  color: #333;
  text-decoration: none;
}

a:hover {
  transform: scale(1.05);
}
</style>