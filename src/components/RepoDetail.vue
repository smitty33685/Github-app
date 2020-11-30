<template>
  <div>
    <UserPanel />
    <!-- <router-link class="link" to="/">Back</router-link> -->
    <!-- <div>{{ $route.params.index }}</div> -->
    <!-- <div v-for="(branch, index) in getBranches" :key="index">
      {{ branch.name }}
    </div> -->
    <div class="grid">
      <Branches />
      <Commits />
    </div>
  </div>
</template>

<script>
import UserPanel from "../components/UserPanel";
import Branches from "../components/Branches";
import Commits from "../components/Commits";
// import { mapActions, mapGetters } from "vuex";

export default {
  name: "repodetail",
  components: {
    UserPanel,
    Branches,
    Commits,
  },
  //   computed: {
  //     ...mapGetters(["getBranches"]),
  //   },
  //   methods: {
  //     ...mapActions(["fetchDataBranch"]),
  //   },
  //   created() {
  //     this.fetchDataBranch(this.$route.params.index);
  //   },
};
</script>

<style scoped>
/* .link {
  text-decoration: none;
  color: #333;
  margin-left: 3rem;
} */
.grid {
  display: grid;
  grid-template-columns: 40% 60%;
}
</style>