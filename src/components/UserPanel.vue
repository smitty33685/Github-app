<template>
  <div class="home">
    <div class="user-panel">
      <div class="user-nick">{{ user.login }}</div>
      <div class="user-name">{{ user.name }}</div>
      <div class="user-company">{{ user.company }}</div>
      <div class="user-repos">Repos: {{ user.repos }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style scoped>
.user-panel {
  padding: 2rem;
  /* background: #4700b3; */
  /* background: #163172; */
  background: #163172;
  color: #f4f4f4;
  border-radius: 2rem;
  text-align: center;
  margin-bottom: 2rem;
}

.user-nick {
  font-size: 2.5rem;
  text-transform: uppercase;
}
</style>