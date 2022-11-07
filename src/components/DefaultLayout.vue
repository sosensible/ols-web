<script setup lang="ts">
import { useUserStore } from "@/stores/UserStore";

const user = useUserStore();
</script>

<template>
  <Header>
    <div style="float: left">Logo</div>
    <div style="float: right">
      <span v-if="user.name.length">{{ user.name }}</span>
      <span v-else><router-link to="/login">Login</router-link></span>
    </div>
    <br />
    <router-link to="/">Home</router-link>
    &nbsp;|&nbsp;
    <router-link to="/about">About Us</router-link>
    &nbsp;|&nbsp;
    <router-link to="/courses">Courses</router-link>
    &nbsp;|&nbsp;
    <router-link to="/creators">Creators</router-link>
  </Header>
  <slot></slot>
  <footer>Footer</footer>
</template>
