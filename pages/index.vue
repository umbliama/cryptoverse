<template>
  <div class="body">
    <section class="bg model">
      <header class="header">
        <div class="header-outer">
          <div class="header-menu">
            <div class="header-menu-logo">
              <a href="/"><img src="~/static/CRYPTOVERSE.svg" /></a>
            </div>
            <div class="header-menu-nav">
              <li class="header-menu-nav-item">
                <a href="" class="header-menu-nav-item__link link">MAIN</a>
              </li>
              <li class="header-menu-nav-item">
                <a href="" class="header-menu-nav-item__link link">HISTORY</a>
              </li>
              <li class="header-menu-nav-item">
                <a href="" class="header-menu-nav-item__link link">SPECS</a>
              </li>
              <li class="header-menu-nav-item">
                <a href="" class="header-menu-nav-item__link link">ROADMAP</a>
              </li>
              <li class="header-menu-nav-item">
                <a href="" class="header-menu-nav-item__link link active"
                  >CHARACTERS</a
                >
              </li>
              <li class="header-menu-nav-item">
                <a href="" class="header-menu-nav-item__link link">TEAM</a>
              </li>
            </div>
            <div class="header-menu-nav">
              <li class="header-menu-nav-item">
                <a href="" class="link">GALLERY</a>
              </li>
              <li class="header-menu-nav-item">
                <a href="" class="buy-btn">BUY </a>
              </li>
            </div>
          </div>
        </div>
        <Footer
          :heading="'choose your hero'"
          :pageNum="'4'"
          :pageName="'CHARACTERS'"
        />
      </header>
      <div class="model-inner inner">
        <div class="model-inner-characters">
          <div class="model-inner-characters-list">
            <h3 class="model-inner-characters-list__heading">
              Characters opened (1/4)
            </h3>
            <ul class="model-inner-characters-list">
              <li class="model-inner-characters-list-item">
                <a href="" class="model-inner-characters-list-item-link"
                  ><img
                    src="~/static/list-spike.png"
                    alt=""
                    class="model-inner-characters-list-item-link__img"
                /></a>
              </li>
              <li class="model-inner-characters-list-item">
                <a href="" class="model-inner-characters-list-item-link"
                  ><img
                    src="~/static/hero-unknown.png"
                    alt=""
                    class="model-inner-characters-list-item-link__img"
                /></a>
              </li>
              <li class="model-inner-characters-list-item">
                <a href="" class="model-inner-characters-list-item-link"
                  ><img
                    src="~/static/hero-unknown.png"
                    alt=""
                    class="model-inner-characters-list-item-link__img"
                /></a>
              </li>
              <li class="model-inner-characters-list-item">
                <a href="" class="model-inner-characters-list-item-link"
                  ><img
                    src="~/static/hero-unknown.png"
                    alt=""
                    class="model-inner-characters-list-item-link__img"
                /></a>
              </li>
            </ul>
            <div class="model-inner-characters-list-controls">
              <div
                class="
                  model-inner-characters-list-controls-item
                  model-inner-characters-list-controls-spin
                "
              >
                <img
                  class="model-inner-characters-list-controls-item__img"
                  src="~/static/spin.png"
                  alt=""
                />
                <p>Spin</p>
              </div>
              <div
                class="
                  model-inner-characters-list-controls-item
                  model-inner-characters-list-controls-zoom
                "
              >
                <img
                  class="model-inner-characters-list-controls-item__img"
                  src="~/static/zoom.png"
                  alt=""
                />
                <p>Zoom in/out</p>
              </div>
            </div>
          </div>
        </div>
        <model-gltf
          id="noScroll"
          @wheel.prevent
          @touchmove.prevent
          @scroll.prevent
          :width="300"
          :height="500"
          :backgroundColor="'#000'"
          :backgroundAlpha="0"
          src="models/glb/Z_lp_textrs.glb"
        ></model-gltf>
        <div class="model-inner-desc">
          <div class="model-inner-desc-main">
            <div class="model-inner-desc-main-pfp">
              <img
                src="~/static/spike-pfp.png"
                alt=""
                class="model-inner-desc-main-pfp__img"
              />
            </div>
            <div class="model-inner-desc-main-controls">
              <h3 class="model-inner-desc-main-controls__name">Spike</h3>
              <a
                v-if="historyOpen"
                @click.prevent="this.historyOpen = true"
                href="#"
                class="model-inner-desc-main-controls__history-btn"
                >CLOSE HISTORY</a
              >
              <a
                v-if="!historyOpen"
                @click.prevent="this.historyOpen = true"
                href="#"
                class="model-inner-desc-main-controls__history-btn"
                >HISTORY</a
              >
            </div>
          </div>
          <div v-if="!historyOpen" class="model-inner-desc-preferences">
            <ul class="model-inner-desc-preferences-list">
              <li class="model-inner-desc-preferences-list-item">
                <div class="model-inner-desc-preferences-list-item-wrapper">
                  <img
                    src="~/static/kind.svg"
                    alt=""
                    class="model-inner-desc-preferences-list-item__img"
                  />
                </div>
              </li>
              <h3 class="model-inner-desc-preferences-list-item__key">Kind</h3>
              <span class="model-inner-desc-preferences-list-item__value"
                >Hybrid</span
              >
              <li class="model-inner-desc-preferences-list-item">
                <div class="model-inner-desc-preferences-list-item-wrapper">
                  <img
                    src="~/static/icon-swords.svg"
                    alt=""
                    class="model-inner-desc-preferences-list-item__img"
                  />
                </div>
              </li>
              <h3 class="model-inner-desc-preferences-list-item__key">
                Weapon type
              </h3>
              <span class="model-inner-desc-preferences-list-item__value"
                >Kusarigama</span
              >
              <li class="model-inner-desc-preferences-list-item">
                <div class="model-inner-desc-preferences-list-item-wrapper">
                  <img
                    src="~/static/icon-bag.svg"
                    alt=""
                    class="model-inner-desc-preferences-list-item__img"
                  />
                </div>
              </li>
              <h3 class="model-inner-desc-preferences-list-item__key">Job</h3>
              <span class="model-inner-desc-preferences-list-item__value"
                >Asassin</span
              >
            </ul>
            <ul class="model-inner-desc-preferences-list">
              <li class="model-inner-desc-preferences-list-item">
                <div class="model-inner-desc-preferences-list-item-wrapper">
                  <img
                    src="~/static/icon-hearts.svg"
                    alt=""
                    class="model-inner-desc-preferences-list-item__img"
                  />
                </div>
              </li>
              <h3>Preferences</h3>
              <span>Japanese culture, extreme sports, writes music</span>
              <li class="model-inner-desc-preferences-list-item">
                <div class="model-inner-desc-preferences-list-item-wrapper">
                  <img
                    src="~/static/icon-martial.svg"
                    alt=""
                    class="model-inner-desc-preferences-list-item__img"
                  />
                </div>
              </li>
              <h3 class="model-inner-desc-preferences-list-item__key">
                Martial arts
              </h3>
              <span class="model-inner-desc-preferences-list-item__value"
                >Taekwando, Wing Chun, Muay Thai
              </span>
              <li class="model-inner-desc-preferences-list-item">
                <div class="model-inner-desc-preferences-list-item-wrapper">
                  <img
                    src="~/static/icon-employer.svg"
                    alt=""
                    class="model-inner-desc-preferences-list-item__img"
                  />
                </div>
              </li>
              <h3 class="model-inner-desc-preferences-list-item__key">
                Employer
              </h3>
              <span class="model-inner-desc-preferences-list-item__value"
                >Red Planet Confederation
              </span>
            </ul>
          </div>
          <div v-if="historyOpen" class="model-inner-desc-history">
            <p class="model-inner-desc-history__text">
              He was a teenager when he was detained for attempting to steal a
              motorcycle from a military moon patrol. They offered to
              participate in the experiment in exchange for release. The
              experiment was top secret, secretly from society, only the highest
              ranks knew about it. He became one of the first surviving hybrids,
              since many during the experiment lost their minds, went crazy, or
              people turned into total mutants, which went beyond the desired
              result. Dozens of years have passed since then, the world has
              changed. Hybrids ceased to be a curiosity and people began to
              voluntarily change their genome. Spike didn't understand them, but
              he resigned himself to his body. He liked the fact that he now
              developed a keen hearing. He began composing music and was
              extremely successful with his band. Someday we will introduce you
              to his music ...
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped>
.model {
  &-inner {
    & div {
      &:nth-child(2) {
        flex: 1;
      }
    }
    &-characters {
      &-list {
        display: flex;
        flex-direction: column;
        padding: 0;
        list-style-type: none;
        align-items: flex-start;
        &-controls {
          margin: 98px 0 0 0;
          &-spin {
            display: flex;
            align-items: flex-start;
          }
          &-zoom {
            display: flex;
            align-items: flex-start;
          }
          &-item {
            margin: 0 0 24px 0;

            &__img {
              margin: 0 14px 0 0;
            }
          }
        }
        &-item {
          &:nth-child(1) {
            padding: 0;
            margin: 0;
          }
        }
      }
    }
    &-desc {
      &-main {
        display: flex;
        align-items: center;
        &-pfp {
          background: rgba(246, 246, 243, 0.4);
          border-radius: 4px;
          &__img {
            margin: -20px 0 0 0;
          }
        }
        &-controls {
          margin: 0 0 0 16px;
          &__name {
            margin: 0 0 16px 0;
          }
          &__history-btn {
            text-decoration: none;
            color: #fff;
            border: 1px solid rgba(246, 246, 243, 0.4);
            box-sizing: border-box;
            border-radius: 4px;
            padding: 8px 16px;
          }
        }
      }
      &-preferences {
        display: flex;
        &-list {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0;
          list-style-type: none;
          margin: 40px 168px 0 0;
          &:nth-child(2) {
            margin: 40px 0 0 0;
          }

          &-item {
            margin: 48px 0 0 0;
            &:nth-child(1) {
              margin: 0;
            }
            &-wrapper {
              background: rgba(246, 246, 243, 0.4);
              border-radius: 4px;
              padding: 8px;
            }
          }
        }
      }
    }
  }
}
</style>

<script>
import { ModelGltf } from "vue-3d-model";
export default {
  components: {
    "model-gltf": ModelGltf,
  },
  data() {
    return {
      historyOpen: false,
    };
  },
  methods: {
    openHistory() {
      // this.historyOpen = true;
      console.log(this.historyOpen);
    },
    closeHistory() {
      this.historyOpen = false;
    },
    stopScroll() {
      return false;
    },
  },
  mounted() {
    var div = document.getElementById("noScroll");
    div.onmousewheel = this.stopScroll;
  },
};
</script>