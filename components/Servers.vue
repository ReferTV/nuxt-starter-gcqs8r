<template>
  <a
    v-for="serwer in props.servers"
    :key="serwer.ip"
    :href="'server/' + serwer.ip"
  >
    <div class="flex mb-4 text-xs sm:text-xl">
      <img
        :src="serwer ? serwer.favicon : serverImage"
        class="mr-4 w-24 h-24"
        :alt="serwer.ip"
        height="100" width="100"
      />
      <div class="overflow-hidden">
        <h2 class="font-bold text-white">{{ serwer.ip }}</h2>
        <p
          class="text-white"
          style="white-space: pre"
          v-html="serwer.description"
        ></p>
      </div>
      <div
        style="text-align: right"
        class="ml-auto text-white flex flex-col text-start justify-end"
      >
        <div class="flex items-center justify-end">
          <div class="mr-2">
            {{ serwer.onlineplayers }}/{{ serwer.maxplayers }}
          </div>
          <img :src="pingIcon" height="16" width="20" alt="Ping icon" />
        </div>
        <div class="text-bold">
          {{ serwer.votes }}
          <Icon style="color: hsl(0, 56%, 51%)" :name="heartIcon"></Icon>
        </div>
        <div v-if="serwer.vip_status === true" class="text-bold">
          {{ daysUntilExpiration(serwer.vip_expiration_date) }}
          <Icon style="color: hsl(60, 88%, 38%)" :name="vipIcon"></Icon>
        </div>
      </div>
    </div>
    <template v-if="!serwer">
      <div class="flex">
        <img class="mr-4 w-24 h-24" :src="serverImage" alt="Avatar" />
        <div class="">
          <h2 class="font-bold text-white">{{ serwer.ip }}</h2>
          <p class="text-white" style="white-space: pre">
            Ten serwer jest offline
          </p>
        </div>
      </div>
    </template>
  </a>
</template>

<script setup>
const serverImage =
  "https://res.cloudinary.com/ddyvtk5yh/image/upload/v1676911931/unknown_server_1_s19oss.webp";
const heartIcon = "material-symbols:favorite-rounded";
const vipIcon = "mingcute:vip-2-fill";
const pingIcon =
  "https://res.cloudinary.com/ddyvtk5yh/image/upload/v1689622065/m292x0orumfbxcbodobo.png";

function daysUntilExpiration(expirationDate) {
  const today = new Date();
  const expiration = new Date(expirationDate);
  const difference = expiration - today;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  return days;
}

const props = defineProps({
  servers: {
    type: [Array],
    required: true,
  },
});
</script>
