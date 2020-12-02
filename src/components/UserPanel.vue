<template>
  <!-- <div class="home"> -->
  <div class="user-panel">
    <div class="user-nick">
      <h2>{{ user.login }}</h2>
    </div>
    <div class="user-name">
      <p>{{ user.name }}</p>
    </div>
    <div class="user-company">
      <p>{{ user.company }}</p>
    </div>
    <div class="user-repos">
      <p>Repos: {{ user.repos }}</p>
    </div>
  </div>
  <!-- </div> -->
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

<style lang="scss" scoped>
.user-panel {
  padding: 2rem;
  background: #163172;
  color: #f4f4f4;
  border-radius: 2rem;
  text-align: center;
  margin: 0 1rem 2rem;

  .user-nick {
    font-size: 2.5rem;
    text-transform: uppercase;
  }

  p {
    margin-bottom: 0.3rem;
  }
}
</style>