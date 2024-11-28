<template>
  <div class="container">
    <Breadcrumb border :items="[['Nos vins']]" />
    <h1><span>Nos Vins</span><span> - </span><span>Boutique en ligne</span></h1>
    
    <!-- <div class="box bundles">
      <div>
        <div>
          <h2>Coffret <span>Fraîcheur</span></h2>
          <strong><span>42€</span><strong>40€</strong></strong>
          <img src="/coffret-apero.jpg" />
          <p>6 bouteilles :<br />3 blanc <em>Viognier et Grenache</em><br />+ 3 rosé <em>Œillade et Grenache</em></p>
          <p>+ 1 code promo -5% * !</p>
          <Button
            :id="`AddToCartBundleDiscovery`"
            class="snipcart-add-item"
            :data-item-quantity="1"
            :data-item-id="`BUNDLE02`"
            :data-item-price="40"
            :data-item-url="`${baseUrl}vins`"
            data-item-name="Coffret FRAÎCHEUR"
            data-item-image="/coffret-apero.jpg"
            :data-item-has-taxes-included="true"
            :data-item-weight="6"
            text="Ajouter au panier"
          />
        </div>
        <div>
          <h2>Coffret <span>découverte</span></h2>
          <strong><span>57€</span><strong>55€</strong></strong>
          <img src="/coffret-decouverte.jpg" />
          <p>6 bouteilles :<br />3 rouge <em>Syrah et Carignan</em> (2015, 2016 et 2019)<br />+ 1 rouge <em>Vieille Syrah</em> + 1 blanc + 1 rosé</p>
          <p>+ 1 code promo -5% * !</p>
          <Button
            :id="`AddToCartBundleDiscovery`"
            class="snipcart-add-item"
            :data-item-quantity="1"
            :data-item-id="`BUNDLE01`"
            :data-item-price="55"
            :data-item-url="`${baseUrl}vins`"
            data-item-name="Coffret DECOUVERTE"
            data-item-image="/coffret-decouverte.jpg"
            :data-item-has-taxes-included="true"
            :data-item-weight="6"
            text="Ajouter au panier"
          />
        </div>
        <div>
          <h2>Coffret <span>Intense</span></h2>
          <strong><span>69€</span><strong>66€</strong></strong>
          <img src="/coffret-intense.jpg" />
          <p>6 bouteilles :<br />3 rouge <em>Vieille Syrah</em><br />+ 3 rouges <em>Syrah et Carignan</em> (2015, 1016, 2019)</p>
          <p>+ 1 code promo -5% * !</p>
          <Button
            :id="`AddToCartBundleDiscovery`"
            class="snipcart-add-item"
            :data-item-quantity="1"
            :data-item-id="`BUNDLE03`"
            :data-item-price="66"
            :data-item-url="`${baseUrl}vins`"
            data-item-name="Coffret INTENSE"
            data-item-image="/coffret-intense.jpg"
            :data-item-has-taxes-included="true"
            :data-item-weight="6"
            text="Ajouter au panier"
          />
        </div>
      </div>
      <small>* Code promo à utiliser sur une prochaine commande (usage unique), non utilisable sur les coffrets, valable pour une durée de 4 mois pour une commande de 6 bouteilles minimum.</small>
    </div>
    <Promo /> -->
    <div class="box products">
      <div>
        <Product
          v-for="(p, index) in activeProducts"
          :key="index"
          :productInfo="p"
        />
      </div>
      <div>
        <div class="video">
          <div>
            <iframe
              src="https://www.youtube.com/embed/7fTLy7qkZQg"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
        <div class="delivery">
          <p><strong>Où trouver nos vins ?</strong></p>
          <p>
            Vous pouvez acheter nos bouteilles <a href="https://www.monvinfrancais.com/domaines/veuve-michel/">sur le site Mon Vin Français</a>.
          </p>
          <p>
            Et bien sûr, nous vous recevons avec plaisir à notre caveau de dégustation à Octon. Appelez-nous au <a :href="`tel:${tel}`">{{ tel }}</a> pour prendre rendez-vous !
          </p>
          <!-- <p><strong>Commandes en France et en Europe</strong></p>
          <p class="ups">
            <UPS />Profitez de nos tarifs négociés chez UPS. Les commandes sont
            expédiées chaque mercredi. Compter ensuite 2 à 3 jours
            d'acheminement jusqu'à chez vous.
          </p>
          <p><strong>Derniers avis clients sur la livraison</strong></p>
          <ul>
            <li>
              <span>Manuela <span>(Hérault)</span></span
              ><span><SmileyHappy /> Très bien</span>
            </li>
            <li>
              <span>Philippe <span>(Belgique)</span></span
              ><span><SmileyHappy /> Très bien</span>
            </li>
            <li>
              <span>Joachim <span>(Bretagne)</span></span
              ><span><SmileyHappy /> Très bien</span>
            </li>
          </ul> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import products from '../data/products.json';

import Breadcrumb from '../components/partials/Breadcrumb.vue';
import Product from '../components/Product.vue';
import Button from '../components/Button.vue';
import Promo from '../components/partials/Promo.vue';
// eslint-disable-next-line import/no-unresolved
import SmileyHappy from '../assets/svg/smileyHappy.svg?inline';
// eslint-disable-next-line import/no-unresolved
import UPS from '../assets/svg/ups.svg?inline';

export default {
  components: {
    Breadcrumb,
    Product,
    SmileyHappy,
    UPS,
    Button,
    Promo,
  },
  data() {
    return {
      tel: '##.##.##.##.##',
    }
  },
  computed: {
    activeProducts() {
      return products.filter((p) => p.active);
    },
  },
  head: {
    title: 'Boutique vin en ligne | Veuve Michel',
    description:
      "Vins rouges (Syrah, Carignan), vin blanc (Viognier, Grenache) et rosé (Grenache) produits à Octon dans l'Hérault, Languedoc",
  },
  mounted() {
    setTimeout(() => {
      this.tel = '06.65.58.62.06';
    }, 100);
  },
};
</script>

<style lang="postcss" scoped>
.container {
  & > h1 {
    text-align: center;
    padding: 50px 30px 20px;
    line-height: 1.2em;
    font-size: 1.5em;
    font-weight: 600;
    @media screen and (--phone) {
      font-size: 2em;
    }
    & > span {
      display: block;
      &:nth-child(2) {
        display: none;
      }
      @media screen and (--tablet) {
        display: inline;
        &:nth-child(2) {
          display: inline;
        }
      }
    }
  }
  
  .bundles {
    margin-top: 60px;
    margin-bottom: 30px;
    & > div {
      @media screen and (--largeDesktop) {
        display: flex;
      }
      & > div {
        position: relative;
        border: 1px solid #ccc;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        text-align: center;
        padding: 50px 20px 110px;
        margin: 0 0 50px 0;
        @media screen and (--phone) {
          padding: 30px 20px 110px;
          margin: 0 0 20px 0;
        }
        @media screen and (--largeDesktop) {
          flex: 1 1 33.33%;
          margin: 0 20px;
        }
        & > h2 {
          font-family: 'Raleway';
          margin-bottom: 20px;
          font-size: 1.2em;
          & > span {
            text-transform: uppercase;
            font-weight: bold;
          }
        }
        & > strong {
          position: absolute;
          top: -25px;
          right: -20px;
          width: 80px;
          height: 80px;
          background: #eecf00;
          text-align: center;
          border-radius: 100%;
          @media screen and (--phone) {
            top: -10px;
            right: -15px;
          }
          & > span {
            text-decoration: line-through;
            display: block;
            line-height: 1.5em;
          }
          & > strong {
            display: block;
            font-size: 2em;
            line-height: 0.8em;
          }
        }
        & > p {
          &:first-of-type {
            margin-top: 10px;
          }
          &:last-of-type {
            font-weight: bold;
          }
        }
        & > button {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    & > small {
      display: block;
      text-align: center;
      margin-top: 10px;
    }
  }
  .products {
    padding-top: 50px;
    padding-bottom: 30px;
    @media screen and (--tablet) {
      padding-bottom: 70px;
    }
    &::after {
      content: '';
      display: block;
      clear: both;
    }
    & > div {
      &:first-child {
        @media screen and (--desktop) {
          float: left;
          width: calc(66.66% - 40px);
        }
      }
      &:last-child {
        border-top: 1px solid #eee;
        @media screen and (--desktop) {
          float: right;
          width: calc(33.33% - 40px);
          position: relative;
          border: none;
          &::before {
            content: '';
            display: block;
            width: 1px;
            height: 100%;
            background: #eee;
            position: absolute;
            left: -40px;
            top: 40px;
          }
        }
      }
    }
  }
}
.video {
  margin-top: 40px;
  width: 100%;
  position: relative;
  & > div {
    padding: 0 0 56% 0;
    & > iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
.delivery {
  margin-top: 40px;
  border-top: 1px solid #eee;
  padding-top: 25px;
  & > p {
    &:not(:first-child) {
      margin-top: 20px;
    }
    &.ups {
      padding: 0 0 0 60px;
      position: relative;
      & > svg {
        position: absolute;
        top: 5px;
        left: 0;
        width: 50px;
        height: 62px;
      }
    }
  }
  & > ul {
    border: 1px solid #ddd;
    list-style-type: none;
    padding: 0;
    margin: 20px 0 0 0;
    & > li {
      padding: 5px;
      &:nth-child(odd) {
        background: rgba(0, 0, 0, 0.02);
      }
      & > span {
        display: block;
        &:first-child {
        }
        &:nth-child(2) {
          font-style: italic;
          & > svg {
            position: relative;
            top: 4px;
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
}
</style>
