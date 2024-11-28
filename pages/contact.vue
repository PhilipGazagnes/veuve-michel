<template>
  <div>
    <Banner
      title="Contact"
      noBackground
    />
    <Breadcrumb :items="[['Contact']]" />
    <!-- <form v-if="!submitted" ref="form" class="form">
      <label>Nom <input v-model="name" type="text" name="name" /></label>
      <label>Email <input v-model="email" type="email" name="email" /></label>
      <label>Téléphone <input v-model="tel" type="tel" name="tel" /></label>
      <label>Message <textarea v-model="message" name="message" /></label>
      <label class="checkbox">
        <input v-model="newsletter" type="checkbox" />
        <span>
          Je m'inscris à la newsletter de Veuve Michel
          <small>
            3 à 4 emails / an
          </small>
        </span>
      </label>
    </form>
    <div class="submit">
      <Button v-if="!submitted" text="Envoyer" arrow @click="submitForm" />
      <div v-else>
        <span>Merci pour votre message</span>
        <span>Nous en prendrons connaissance rapidement.</span>
        <button @click="reinit">Réafficher le formulaire</button>
      </div>
    </div> -->
    <div class="contact">
      Téléphone : <a :href="`tel:${tel}`">{{ tel }}</a><br />
      Email : <a :href="`mailto:${email}`">{{ email }}</a><br />
    </div>
  </div>
</template>

<script>
import Banner from '../components/PageBanner.vue';
import Button from '../components/Button.vue';
import Breadcrumb from '../components/partials/Breadcrumb.vue';

export default {
  components: {
    Banner,
    Button,
    Breadcrumb,
  },
  data() {
    return {
      submitted: false,
      name: '',
      email: '',
      tel: '',
      message: '',
      newsletter: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.tel = '06.65.58.62.06';
      this.email = 'pramond163@orange.fr';
    }, 100);
  },
  methods: {
    submitForm() {
      const promises = [this.sendMessage()];
      if (this.newsletter) {
        promises.push(this.subscribeToNewsletter());
      }
      Promise.all(promises).then(() => {
        const formTop = this.$refs.form.offsetTop;
        this.submitted = true;
        window.scrollTo(0, formTop - 50);
      });
    },
    subscribeToNewsletter() {
      return new Promise((resolve) => {
        fetch('/.netlify/functions/subscribe-to-newsletter', {
          method: 'post',
          body: JSON.stringify({
            email: this.email,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            resolve(data);
          });
      });
    },
    sendMessage() {
      return new Promise((resolve) => {
        fetch('/.netlify/functions/send-message', {
          method: 'post',
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            tel: this.tel,
            message: this.message,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            resolve(data);
          });
      });
    },
    reinit() {
      this.submitted = false;
      this.name = '';
      this.email = '';
      this.tel = '';
      this.message = '';
      this.newsletter = false;
    },
  },
  head: {
    title: 'Contact | Veuve Michel',
  },
};
</script>

<style lang="postcss" scoped>
.contact {
  text-align: center;
  padding: 100px 0;
  font-size: 1.5em;
  line-height: 1.5em;
}
.form {
  padding: 30px 20px;
  @media screen and (--phone) {
    padding: 50px 30px;
  }
  @media screen and (--tablet) {
    width: 700px;
    margin: 0 auto;
    padding: 70px 0 50px;
  }
  & > label {
    display: block;
    &:not(:first-child) {
      margin-top: 20px;
    }
    &.checkbox {
      margin: 25px 0 0 0;
      position: relative;
      cursor: pointer;
      & > span {
        display: block;
        padding: 0 0 0 32px;
        & > small {
          display: block;
          opacity: 0.7;
          padding-left: 5px;
        }
      }
    }
    & > input[type='text'],
    & > input[type='email'],
    & > input[type='tel'],
    & > textarea {
      font-family: inherit;
      font-size: 0.9em;
      line-height: 1.5em;
      color: #666;
      display: block;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 3px;
      margin-top: 5px;
    }
    & > textarea {
      height: 200px;
    }
    & > input[type='checkbox'] {
      position: absolute;
      margin: 0;
      top: 2px;
      left: 0;
      &::before {
        content: '';
        width: 20px;
        height: 20px;
        background: white;
        border: 1px solid #ccc;
        border-radius: 3px;
        position: absolute;
        top: 0;
        left: 0;
      }
      &:checked {
        &::before {
          box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
        }
        &::after {
          content: '✔';
          font-size: 2em;
          color: #4c0000;
          position: absolute;
          top: -12px;
          left: 2px;
        }
      }
    }
  }
}
.submit {
  text-align: center;
  padding: 0 20px 100px;
  @media screen and (--phone) {
    padding: 0 30px 100px;
  }
  @media screen and (--tablet) {
    width: 700px;
    margin: 0 auto;
    padding: 0 0 100px 0;
  }
  & > button {
    padding-left: 80px;
    padding-right: 80px;
  }
  & > div {
    background: var(--successColor);
    padding: 50px 20px;
    border-radius: 3px;
    color: white;
    margin-top: 30px;
    @media screen and (--phone) {
      margin-top: 50px;
    }
    @media screen and (--tablet) {
      margin-top: 70px;
    }
    & > span {
      display: block;
      &:first-child {
        font-size: 1.5em;
      }
      &:nth-child(2) {
        padding: 20px 0 40px;
      }
    }
    & > button {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 3px;
      color: white;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
    }
  }
}
</style>
