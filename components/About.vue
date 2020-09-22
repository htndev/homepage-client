<template>
  <div class="about">
    <xb-container>
      <div class="wrapper">
        <section class="image">
          <img src="@/assets/img/building.jpg" alt="Beatiful building" />
        </section>
        <section class="description">
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque qui reprehenderit modi corrupti distinctio
            tenetur velit quidem dolore ipsum quisquam? Voluptatum maxime laudantium quaerat consectetur est deserunt
            dolorem, culpa modi velit eveniet perspiciatis doloremque labore repellat neque recusandae aliquid
            asperiores ullam provident in itaque quia vitae. Et officia reprehenderit facilis fugiat suscipit possimus
            porro cum obcaecati sequi inventore, reiciendis cumque. Ut explicabo neque quo provident ducimus quidem
            molestias quisquam, sequi iure magnam corporis earum non voluptas, eveniet nam iste? Laudantium, labore ipsa
            quae nobis deserunt repellat quo dolores odit consequuntur culpa officia exercitationem blanditiis nulla
            architecto molestias deleniti animi aut? Reiciendis quod unde praesentium. Saepe unde, inventore nam natus
            eos laboriosam fuga odit sed deserunt minus voluptates iste ad quibusdam praesentium alias labore
            asperiores. Facilis, accusamus nobis quasi nesciunt reiciendis numquam voluptas? Saepe, ab expedita sit
            quisquam animi obcaecati eaque excepturi tenetur impedit aut voluptatem voluptatum aspernatur repellendus
            numquam dolore.
          </p>
        </section>
      </div>
    </xb-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { registerNuxtHooks } from '@/utils/nuxt';
registerNuxtHooks(Component);

@Component
export default class About extends Vue {}
</script>

<style lang="less" scoped>
@import '@/assets/styles/colors.less';

.about {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  /deep/ .wrapper {
    display: flex;

    .description {
      padding-left: 30px;

      h2 {
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 12px;
      }

      p {
        color: @gray;
        line-height: 1.5;
      }
    }

    .image {
      img {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      }
    }
  }
}
</style>
