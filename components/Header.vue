<template>
  <div class="header-outer">
    <div class="header-menu">
      <div class="header-menu-logo">
        <a href="/"><img src="~/static/CRYPTOVERSE.svg" /></a>
      </div>
      <div class="header-menu-nav">
        <li class="header-menu-nav-item">
          <a href="" class="header-menu-nav-item__link link active">MAIN</a>
        </li>
        <li class="header-menu-nav-item">
          <a href="#history" class="header-menu-nav-item__link link">HISTORY</a>
        </li>
        <li class="header-menu-nav-item">
          <a href="#specs" class="header-menu-nav-item__link link">SPECS</a>
        </li>

        <li class="header-menu-nav-item">
          <a href="#roadmap" class="header-menu-nav-item__link link">ROADMAP</a>
        </li>
        <li class="header-menu-nav-item">
          <a href="#team" class="header-menu-nav-item__link link">TEAM</a>
        </li>
        <li class="header-menu-nav-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="header-menu-nav-item__link link"
            href="https://discord.gg/CryptoVerse"
            ><img
              class="header-menu-nav-item__img"
              src="~/static/discord.svg"
              alt=""
          /></a>
        </li>
        <li class="header-menu-nav-item">
          <a
            class="header-menu-nav-item__link link"
            href="https://twitter.com/CryptoVersehome"
            ><img
              class="
                header-menu-nav-item__img header-menu-nav-item__img--twitter
              "
              src="~/static/twitter.svg"
              alt=""
          /></a>
        </li>
      </div>
      <div class="header-menu-nav header-menu-nav--buy">
        <li class="header-menu-nav-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://opensea.io/collection/cryptoversespike"
            class="buy-btn"
            >OPENSEA
          </a>
        </li>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.header {
  &-outer {
    background: rgba(22, 22, 22, 0.5);
    backdrop-filter: blur(10px);
    top: 0;
    // position: fixed;
    position: absolute;
    width: 100%;
    z-index: 100;
  }
  &-menu {
    display: flex;
    margin: 0 auto;
    max-width: 1280px;
    justify-content: space-between;
    @include for-phone-only {
      width: 100%;
    }

    &-nav {
      display: flex;
      align-items: center;
      @include for-desktop-up {
        display: flex !important;
      }
      @include for-tablet-portrait-up {
        display: none;
      }
      @include for-phone-only {
        display: none;
      }
      &--buy {
        @include for-desktop-up {
          display: flex;
          flex-direction: row !important;
        }
        @include for-tablet-portrait-up {
          display: flex;
          flex-direction: row;
          padding: 0 0 0 25px;
          justify-content: center;
        }
        @include for-phone-only {
          display: flex;
          flex-direction: column;
          padding: 0 0 0 25px;
          justify-content: center;
        }
      }
      &-link {
        &--gallery {
          // @include for-tablet-portrait-up {
          //   display: none;
          // }
          @include for-phone-only {
            display: none;
          }
        }
      }
      &-item {
        list-style: none;
        margin: 0 49px 0 0;
        &__img {
          width: 24px;
          margin: 5px 0 0 0;
          &--twitter {
            width: 32px;
          }
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "header",
  props: ["activeLink"],
};
</script>