<script setup lang="ts">
import { useUserStore } from "@/stores/UserStore";

const user = useUserStore();
</script>

<template>
  Login Page
  <hr />
  <input v-model="user.name" />
  <button>Login</button>
</template>
