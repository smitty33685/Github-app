<template>
  <div class="home">
    <UserPanel />
    <Repos />
  </div>
</template>

<script>
import UserPanel from "../components/UserPanel";
import Repos from "../components/Repos";

export default {
  name: "Home",
  components: {
    Repos,
    UserPanel,
  },
};
</script>

<style scoped>
</style>
