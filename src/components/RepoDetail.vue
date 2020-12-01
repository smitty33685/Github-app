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

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 40% 60%;
  grid-gap: 2rem;
}
</style>