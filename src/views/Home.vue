<template>
  <div class="home">
    <div class="user-panel">
      <div class="user-nick">{{ user.login }}</div>
      <div class="user-name">{{ user.name }}</div>
      <div class="user-company">{{ user.company }}</div>
      <div class="user-repos">{{ user.repos }}</div>
    </div>

    <div class="repos-panel">
      <Repos />
    </div>
  </div>
</template>

<script>
import Repos from "../components/Repos";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Repos,
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style scoped>
.user-panel {
  padding: 2rem;
  background: #444;
  color: #f4f4f4;
  border-radius: 2rem;
  text-align: center;
  margin-bottom: 2rem;
}
</style>
