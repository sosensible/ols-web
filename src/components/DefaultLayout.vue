<script setup lang="ts"></script>

<template>
  <Header>
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
