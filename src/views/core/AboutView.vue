<script setup lang="ts">
import { useUserStore } from "@/stores/UserStore";

const user = useUserStore();
</script>

<template>
  <h1>About Page</h1>

  <input v-model="user.name" />
</template>
