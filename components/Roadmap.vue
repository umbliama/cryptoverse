<template>
  <section class="bg roadmap">
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
              <a href="" class="header-menu-nav-item__link link active"
                >ROADMAP</a
              >
            </li>
            <li class="header-menu-nav-item">
              <a href="" class="header-menu-nav-item__link link">CHARACTERS</a>
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
        :heading="'All in your hands'"
        :pageNum="'5'"
        :pageName="'ROADMAP'"
      />
    </header>
    <div class="roadmap-inner inner">
      <div class="roadmap-inner-list">
        <div class="roadmap-inner-list-item active">
          <span class="roadmap-inner-list-item__title">
            10% Welcome to our world
          </span>
        </div>
        <div class="roadmap-inner-list-item">
          <span class="roadmap-inner-list-item__title">
            20% Community building. We start paying for the promotion to our
            favorite holders
          </span>
        </div>
        <div class="roadmap-inner-list-item">
          <span class="roadmap-inner-list-item__title">
            30% First events. Playing games, solving riddles, discussions start
            at a new level
          </span>
        </div>

        <div class="roadmap-inner-list-item">
          <span class="roadmap-inner-list-item__title">
            40% Opening a bank for the community. 5 ETH is spent on prizes in
            community games 10 ETH invested in the development of the next
            character
          </span>
        </div>
        <div class="roadmap-inner-list-item">
          <span class="roadmap-inner-list-item__title">
            50% First space attack. Surprise, shhh
          </span>
        </div>
        <div class="roadmap-inner-list-item">
          <span class="roadmap-inner-list-item__title">
            60% Choose the next character
          </span>
        </div>
        <div class="roadmap-inner-list-item">
          <span class="roadmap-inner-list-item__title">
            70% We open a merchant store. Hoodies, 3D figures, T-shirts, key
            chains, caps and my Mom is embroidering Spike!
          </span>
        </div>
        <div class="roadmap-inner-list-item">
          <span class="roadmap-inner-list-item__title">
            80% Collaborations with other projects. We conduct interviews with
            CEOs, and also invite them to our universe
          </span>
        </div>
        <div class="roadmap-inner-list-item">
          <span class="roadmap-inner-list-item__title">
            90% We start the space liquidity pool
          </span>
        </div>
        <div class="roadmap-inner-list-item">
          <span class="roadmap-inner-list-item__title">
            100% Open the comics
          </span>
        </div>
      </div>
      <div class="roadmap-inner-pic">
        <img class="roadmap-inner-pic__img" src="~/static/roadmap.png" alt="" />

        <div class="roadmap-inner-pic__bg"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.roadmap {
  background: url("~/static/bg.png") no-repeat;
  background-position: 100% 100%;
  height: 100vh;
  position: relative;
  background-size: cover;
  &-inner {
    @media (max-width: 320px) {
      flex-direction: column;
    }
    &-pic {
      margin: 0 0 0 16px;
      &__img {
        height: 100%;
        @media (max-width: 1600px) {
          height: 100%;
        }
      }
      &__bg {
        background: rgba(22, 22, 22, 0.5);
        opacity: 0.4;
        border-radius: 4px;
      }
    }
    &-list {
      &-item {
        background: rgba(22, 22, 22, 0.5);
        border-radius: 4px;
        padding: 8px;
        margin: 16px 0 0 0;
        &.active {
          background: rgba(246, 246, 243, 0.7);
          color: #000;
        }

        &:nth-child(1) {
          margin: 0;
        }
        &__title {
        }
      }
    }
  }
}
</style>