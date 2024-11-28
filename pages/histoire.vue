<template>
  <div>
    <Banner title="Notre Histoire" class="banner" />
    <Breadcrumb :items="[['Notre histoire']]" />
    <div class="box edito">
      <div>
        <h2>La vigne, une tradition familiale et régionale</h2>
        <p>
          <strong>Philippe Ramond</strong>, responsable de l’exploitation Veuve
          Michel, tient sa culture viticole et son savoir faire de ses études et
          son parcours professionnel, mais aussi de ses grands parents qui lui
          ont transmis leur expérience.
        </p>
        <br />
        <p>
          DEUG de géologie en poche, attiré par le monde viticole, Philippe
          s’oriente vers un diplôme national d’oenologie. Il travaille pendant
          plusieurs années pour diverses sociétés où il apprend les rouages de
          la vinification et développe son style, sa technique, pour élaborer
          les vins qu’il aime partager dans les moments de convivialité, de
          fraternité, de fête.
        </p>
        <br />
        <p>
          C’est en 2003 qu’il reprend l’exploitation de sa grand mère
          maternelle, qui est à l’origine du nom “Veuve Michel”, cette dernière
          ayant, très jeune, perdu son mari. Comme la plupart des exploitations
          viticoles du languedoc du vingtième siècle, la vinification de la
          récolte était confiée au système coopératif, dont le grand père
          maternel de Philippe fût un acteur engagé.
        </p>
        <br />
        <p>
          Depuis son installation, Philippe a fait plusieurs choix qui ont
          transformé l’exploitation. Tout d’abord, celui de s’équiper pour
          vinifier lui-même ses vins. Profondément attaché à la liberté, curieux
          et amoureux de la nature, il croit au métier passionnant de vigneron
          indépendant. De la terre au vin, de l’agriculture à la cave, Philippe
          élève aujourd’hui des cépages méridionaux qualitatifs pour créer des
          vins qui lui correspondent. A travers ce métier, il décide d’être
          libre, et de n’avoir qu’un dirigeant, la météo.
        </p>
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
    title: 'Notre histoire | Veuve Michel',
    description:
      "Découvrez l'histoire du domaine Veuve Michel, implanté à Octon au bord du lac Salagou dans l'Hérault (34)",
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
