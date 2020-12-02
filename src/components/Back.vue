<template>
  <div>
    <router-link class="link" to="/">Back</router-link>
  </div>
</template>

<script>
export default {
  name: "back",
};
</script>

<style lang="scss" scoped>
.link {
  display: inline-block;
  text-decoration: none;
  color: #666;
  margin-bottom: 2rem;
  margin-left: 2rem;
  border: 1px #666 solid;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
}
</style>