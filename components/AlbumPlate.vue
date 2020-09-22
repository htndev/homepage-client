<template>
  <figure class="music-plate">
    <template v-if="coverLoaded">
      <div :style="plateStyle" class="plate" title="Click to play">
        <a :href="link">
          <figcaption>
            <h3>{{ artist }}</h3>
            <p>{{ title }}</p>
          </figcaption>
        </a>
      </div>
    </template>
    <template v-else>
      <div class="empty">
        <xb-loader />
      </div>
    </template>
  </figure>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { registerNuxtHooks } from '@/utils/nuxt';
import { Album } from '@/utils/common';
import CONSTANTS from '@/utils/constants';

registerNuxtHooks(Component);

@Component
export default class AlbumPlate extends Vue {
  @Prop({ required: true, type: Album }) album!: Album;

  coverLoaded = false;

  get plateStyle() {
    return {
      backgroundImage: `url(${this.album.cover})`
    };
  }

  get id(): string {
    return this.album.id;
  }

  get title(): string {
    return this.album.title;
  }

  get artist(): string {
    return this.album.artist;
  }

  get cover(): string {
    return this.album.cover;
  }

  get link(): string {
    return `${CONSTANTS.SERVICE.PLAYER}/${this.album.id}`;
  }

  get songTitle(): string {
    return `${this.artist} – ${this.title}`;
  }

  created() {
    if (process.client) {
      const cover = new Image();
      cover.src = this.cover;
      console.log('this.coverLoaded', this.coverLoaded);

      cover.onload = () => {
        this.coverLoaded = true;
        console.log('this.coverLoaded', this.coverLoaded);
      };
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/assets/styles/colors.less';

figure {
  width: 100%;
  height: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  .empty {
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .plate {
    width: inherit;
    height: inherit;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    a {
      text-decoration: none;
      width: 100%;
      height: 100%;

      &:hover figcaption {
        opacity: 1;
      }

      figcaption {
        opacity: 0;
        transition: 0.15s opacity ease-in-out;
        width: inherit;
        height: inherit;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: rgba(0, 0, 0, 0.7);

        h3,
        p {
          text-align: center;
          color: @white;
          line-height: 1.5;
        }

        h3 {
          font-weight: 600;
        }
      }
    }
  }
}
</style>
