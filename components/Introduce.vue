<template>
  <div class="introduce">
    <xb-container>
      <div class="wrapper">
        <section class="description">
          <h1>{{ $t('slogan') }}</h1>
          <h2>{{ $t('your-friend-in-music-world') }}.</h2>
          <h3>{{ $t('listen-top-charts') }}.</h3>
          <a :href="actionButtonLink" tabindex="1">{{ $t(actionButtonTitle) }}</a>
        </section>
        <section class="plates">
          <main>
            <album-plate v-for="album in albums" :key="album.id" :album="album" />
          </main>
        </section>
      </div>
    </xb-container>
    <!-- <scroll-down /> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ScrollDown from '@/components/ScrollDown.vue';
import AlbumPlate from '@/components/AlbumPlate.vue';
import { UserModule } from '@/store/user';
import { registerNuxtHooks } from '@/utils/nuxt';
import { Album } from '@/utils/common';
import CONSTANTS from '@/utils/constants';

registerNuxtHooks(Component);

@Component({ components: { ScrollDown, AlbumPlate } })
export default class Introduce extends Vue {
  albums = [
    new Album('1', 'Migos', 'Kulture 2', 'https://images-na.ssl-images-amazon.com/images/I/81x0uqnbdUL._SL1200_.jpg'),
    new Album(
      '2',
      'Travis Scott',
      'ASTROWORLD',
      'https://images-na.ssl-images-amazon.com/images/I/71lqI%2BMuHGL._SL1200_.jpg'
    ),
    new Album(
      '3',
      'SQWOZBAB',
      'BODY LANGUAGE',
      'https://images.genius.com/6aea99fb38d7b2b2bdf71a7ab51908c1.1000x1000x1.png'
    ),
    new Album('4', 'ДЕТИ RAVE', 'FANAT', 'https://images.genius.com/0af2a0e083e79cbe2fb42698f0efd5f9.1000x1000x1.jpg'),
    new Album('5', 'Papa Roach', 'Last Resort', 'https://stihi.ru/pics/2010/05/24/3243.jpg'),
    new Album(
      '6',
      'Motionless in White',
      'Graveyard Shift',
      'https://vinyla.com/files/products/5_18.800x800.png?20aaa060846d36972a4e26b5c463118a'
    ),
    new Album(
      '7',
      'Big Baby Tape',
      'ERRDAY',
      'https://images.genius.com/2f90db447f370e0e96140bc6e5ac9943.1000x1000x1.jpg'
    ),
    new Album('8', 'ДЕТИ RAVE', 'УРЫЛ 0$', 'https://api.band.link/img/bandlinks/ERCds_O9uxqDyp_370x370.jpeg'),
    new Album(
      '9',
      'GSPD',
      'Кто сказал мяу?',
      'https://images.genius.com/de5e6328ea0f8416b7e06d08bab10874.1000x998x1.jpg'
    )
  ];
  userStore = UserModule(this.$store);
  created() {
    this.userStore.identify();
  }

  get isAuthorized(): boolean {
    return this.userStore.userAuthorized;
  }

  get actionButtonTitle(): string {
    return this.isAuthorized ? 'go-to-web-player' : 'sign-in';
  }

  get actionButtonLink(): string {
    return this.isAuthorized ? CONSTANTS.CLIENT.PLAYER : `${CONSTANTS.CLIENT.ID}/${this.$i18n.locale}/signin`;
  }
}
</script>

<style lang="less" scoped>
@import '@/assets/styles/variables.less';
@import '@/assets/styles/colors.less';

.introduce {
  height: 100vh;
  display: flex;
  align-items: center;

  /deep/ .wrapper {
    display: flex;

    section {
      &.description {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
          color: @dark-gray;
          font-size: 40px;
          font-weight: 600;
        }

        h2 {
          color: @gray;
          font-size: 24px;
          margin: 15px 0 0;
          font-weight: 400;
        }

        h3 {
          color: @gray;
          font-size: 20px;
          margin: 15px 0;
        }

        a {
          text-decoration: none;
          color: @purple;
          font-size: 16px;
          width: fit-content;
          padding: 8px 16px;
          border: thin solid @purple;
          transition: 0.25s all ease-in;
          border-radius: 4px;
          font-weight: 400;
          outline: none;

          &:hover {
            background: rgba(@purple, 0.1);
          }

          &:active {
            background: rgba(@purple, 0.3);
          }

          &:focus {
            background: rgba(@purple, 0.2);
          }
        }
      }

      &.plates {
        width: 60%;
        display: flex;
        justify-content: flex-end;

        main {
          display: grid;
          grid-template-columns: repeat(3, 200px);
          grid-auto-rows: 200px;
          grid-gap: 10px;
        }

        p.top-charts {
          margin-top: 1em;
          text-align: center;
          font-style: italic;
          color: @gray;
        }
      }
    }
  }
}
</style>
