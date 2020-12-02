<template>
  <div>
    <UserPanel />
    <Back />
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
import Back from "../components/Back";

export default {
  name: "repodetail",
  components: {
    UserPanel,
    Branches,
    Commits,
    Back,
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 40% 60%;
  margin: 0 1rem;
}

@media (max-width: 800px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>