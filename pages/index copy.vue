<template>
  <div class="page">
    <Banner />
    <Environment />
    <Video />
    <Wines />
    <Content />
  </div>
</template>

<script>
import Banner from '../components/HomeBanner.vue';
import Environment from '../components/HomeEnvironment.vue';
import Wines from '../components/HomeWines.vue';
import Content from '../components/HomeContent.vue';
import Promo from '../components/partials/Promo.vue';
import Video from '../components/HomeVideo.vue';

export default {
  components: {
    Banner,
    Environment,
    Wines,
    Content,
    Promo,
    Video,
  },
  head: {
    title: 'Vigneron à Octon, en Languedoc | Veuve Michel',
    description: '',
  },
};
</script>

<style lang="postcss" scoped>
.page {
  overflow: hidden;
}
</style>
