<template>
  <div class="flex">
    <div class="about">
      <h1>About App</h1>
      <p><span>Created by: </span>{{ user2.name }}</p>
      <p><span>Email: </span>{{ user2.email }}</p>
      <p><span>Phone: </span>{{ user2.phone }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "about",
  computed: mapState(["user2"]),
};
</script>

<style lang="scss" scoped>
.about {
  background: #163172;
  color: #f4f4f4;
  display: inline-block;
  padding: 2rem 8rem 2rem 2rem;
  border-radius: 2rem;
  margin: 0 1rem;

  span {
    font-weight: 900;
  }
  h1 {
    margin-bottom: 1rem;
    font-size: 2.5rem;
  }
}

@media (max-width: 800px) {
  .flex {
    display: flex;
    justify-content: center;
  }
}
</style>
