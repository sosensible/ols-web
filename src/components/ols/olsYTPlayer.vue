<template>
  <div>
    <div ref="olsYTPlayer" :id="playerid"></div>
    <hr />
    <button @click="stop_video">Stop</button>
    &nbsp;
    <button @click="play_video">Play</button>
    &nbsp;
    <button @click="pause_video">Pause</button>
    &nbsp;
    <button @click="mute_video">Mute</button>
    &nbsp;
    <button @click="unmute_video">un-Mute</button>
    &nbsp;
  </div>
</template>

<script setup lang="ts">
import YoutubePlayer from "youtube-player";
import shortid from "shortid";

import { ref, onMounted, defineEmits } from "vue";

const props = defineProps({
  height: {
    type: Number,
    default: 390,
  },
  width: {
    type: Number,
    default: 640,
  },
  videoid: String,
  volume: {
    type: Number,
    default: 75,
  },
});
const emit = defineEmits(["cued", "ended", "paused", "played"]);

const olsYTPlayer = ref();
let videoPlayer = {};
const playerid = "ols-video-yt-" + shortid.generate();
const volume = ref(props.volume);

/* current available functions *
'cueVideoById', 'loadVideoById', 'cueVideoByUrl', 'loadVideoByUrl', 'playVideo', 'pauseVideo', 'stopVideo', 'getVideoLoadedFraction', 'cuePlaylist', 'loadPlaylist', 'nextVideo', 'previousVideo', 'playVideoAt', 'setShuffle', 'setLoop', 'getPlaylist', 'getPlaylistIndex', 'setOption', 'mute', 'unMute', 'isMuted', 'setVolume', 'getVolume', 'seekTo', 'getPlayerState', 'getPlaybackRate', 'setPlaybackRate', 'getAvailablePlaybackRates', 'getPlaybackQuality', 'setPlaybackQuality', 'getAvailableQualityLevels', 'getCurrentTime', 'getDuration', 'removeEventListener', 'getVideoUrl', 'getVideoEmbedCode', 'getOptions', 'getOption', 'addEventListener', 'destroy', 'setSize', 'getIframe'
*/

function pause_video() {
  videoPlayer.pauseVideo();
  let currentTime = videoPlayer.getCurrentTime().then(
    function (value) {
      console.log({ value: value });
    },
    function (error) {
      console.log({ error: error });
    }
  );
}
function play_video() {
  videoPlayer.playVideo();
  let duration = videoPlayer.getDuration().then(
    function (value) {
      console.log({ value: value });
    },
    function (error) {
      console.log({ error: error });
    }
  );
  let volume = videoPlayer.getVolume().then(
    function (value) {
      console.log({ value: value });
    },
    function (error) {
      console.log({ error: error });
    }
  );
}
function mute_video() {
  videoPlayer.mute();
}
function stop_video() {
  videoPlayer.stopVideo();
}
function unmute_video() {
  videoPlayer.unMute();
}

onMounted(() => {
  videoPlayer = new YoutubePlayer(playerid, {
    height: props.height,
    width: props.width,
    videoId: props.videoid,
    playerVars: {
      playsinline: 1,
    },
  });
  videoPlayer.setVolume(props.volume);
  videoPlayer.on("stateChange", (e) => {
    if (e.data === window.YT.PlayerState.ENDED) {
      emit("ended");
    } else if (e.data === window.YT.PlayerState.PAUSED) {
      emit("paused");
    } else if (e.data === window.YT.PlayerState.PLAYING) {
      emit("played");
    } else if (e.data === window.YT.PlayerState.CUED) {
      emit("cued");
    }
  });
});
</script>
