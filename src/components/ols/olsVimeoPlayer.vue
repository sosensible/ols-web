<template>
  <vue-vimeo-player
    ref="olsVimeoPlayer"
    :video-id="videoID"
    :player-height="height"
    @ready="onReady"
    @pause="onPause"
  />
  <hr />
  <button @click="play_video">Play</button>
  &nbsp;
  <button @click="pause_video">Pause</button>
  &nbsp;
  <button @click="mute_video">Mute</button>
  &nbsp;
  <button @click="unmute_video">un-Mute</button>
  &nbsp;
</template>

<script setup>
import { vueVimeoPlayer } from "vue-vimeo-player";
// import component from '../../../ols_ssr/.nuxt/types/vue-shim';

import { ref, onMounted } from "vue";

const olsVimeoPlayer = ref();
const videoID = ref("238650365");
const height = ref(500);
const options = ref({
  muted: true,
  autoplay: true,
});
const playerReady = ref(false);

function onReady() {
  playerReady.value = true;
  console.log(olsVimeoPlayer);
}

function onPause(event, data, player) {
  playerReady.value = true;
  console.log(event.seconds);
  // event.duration|percent|seconds
  // console.log({ data: data });
  // console.log({ player: player });
}

function play_video() {
  console.log("play");
  olsVimeoPlayer.value.play();
}

function pause_video() {
  console.log("pause");
  olsVimeoPlayer.value.pause();
}

function mute_video() {
  console.log("mute");
  olsVimeoPlayer.value.mute();
}

function unmute_video() {
  console.log("unmute");
  olsVimeoPlayer.value.unmute();
}
</script>
