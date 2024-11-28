<template>
  <div>
    <Banner title="Nos vignes, notre travail" class="banner" />
    <Breadcrumb :items="[['Nos vignes, notre travail']]" />
    <div class="box edito">
      <div class="imgleft">
        <h2>
          Artisans du vin dans un écrin de biodiverstité
        </h2>
        <p>
          Octon se situe dans le sud de la france, à 40 km au nord de
          Montpellier au bord du lac du Salagou. Le vignoble est constitué de 10
          hectares de vignes à une altitude de 150 mètres, en bordure immédiate
          du lac du Salagou, sur des coteaux et petites terrasses alluvionnaires
          balayées par la tramontane, le vent dominant de notre région.
        </p>
        <img src="/vignes/paysage-salagou.jpg" />
      </div>
      <div class="imgright">
        <p>
          Les vignes bénéficient ainsi, grâce à ce vent qui chasse l’humidité,
          d’un allié naturel contre le mildiou. Le soleil, abondant, assure la
          concentration des fruits. La ruffe, cette fameuse terre rouge du
          Permien caractéristique de la région du Salagou, emmagasine la chaleur
          en journée et la restitue le soir, offrant au raisin des conditions de
          maturité optimales.
        </p>
        <img src="/vignes/parcelle-vigne.jpg" />
      </div>
      <div class="imgleft">
        <h2>
          Des cépages méridionaux pour des vins caractéristiques du Languedoc
        </h2>
        <p>
          Les cépages que nous utilisons sont la Syrah et le Carignan pour les
          rouges, l’Oeillade et le Grenache pour le rosé, le Viognier et
          Grenache blanc pour les blancs. Parfaitement adaptés à la région, nous
          avons sélectionnés ces cépages méridionaux pour leurs caractères
          complémentaires en assemblage.
        </p>
        <img src="/vignes/rangee-vigne.jpg" />
      </div>
      <div class="imgright">
        <p>
          La préservation de l’environnement est une préoccupation forte qui
          anime la population environnante du lac. Les parcelles de vigne sont
          en partie situées sur la zone de protection spéciale du Salagou pour
          la conservation de la faune et de la flore spécifique à cette vallée.
          Nous sommes engagés depuis plusieurs années dans des mesures
          agro-environnementales et climatiques (MAEC) qui favorisent
          l'enherbement pour limiter l'érosion, ainsi que l'entretien des haies
          qui jouxtent nos parcelles. Nous portons un soin particulier pour
          assurer la cohabitation de notre activité et de l’écosystème dans
          lequel nous exerçons.
        </p>
        <img src="/vignes/gros-plan-fleur-sauvage.jpg" />
      </div>
      <div class="imgleft">
        <p>
          Les vendanges s’effectuent toujours en nocturne pour préserver la
          fraîcheur des raisins. Le raisin passe ensuite sur une table de tri.
          La technique de vinification est un mélange de traditions et de
          modernité. Certains rouges effectuent un passage en barrique pour
          assouplir et arrondir leurs tanins.
        </p>
        <img src="/vignes/colline-salagou.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '../components/PageBanner.vue';
import Breadcrumb from '../components/partials/Breadcrumb.vue';

export default {
  components: {
    Banner,
    Breadcrumb,
  },
  head: {
    title: 'Nos vignes, notre travail | Veuve Michel',
    description:
      "Découvrez notre terroir singulier en bordure du lac du Salagou dans l'Hérault, Languedoc.",
  },
};
</script>

<style lang="postcss" scoped>
.banner {
  background-image: url('/banner/vignes/cover.jpg');
  @media screen and (--phone) {
    background-image: url('/banner/vignes/cover-mobile.jpg');
  }
  @media screen and (--tablet) {
    background-image: url('/banner/vignes/cover-desktop.jpg');
  }
  @media screen and (--largeDesktop) {
    background-image: url('/banner/vignes/cover-large-desktop.jpg');
  }
  background-size: cover;
  pabckgroud-position: center center;
}
</style>
