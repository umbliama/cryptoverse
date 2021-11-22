<template>
  <section class="bg team">
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
              <a href="" class="header-menu-nav-item__link link">CHARACTERS</a>
            </li>
            <li class="header-menu-nav-item">
              <a href="" class="header-menu-nav-item__link link active">TEAM</a>
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
        :heading="'WRITE FUTURE WITH US'"
        :pageNum="'6'"
        :pageName="'THE TEAM'"
      />
    </header>
    <div class="team-inner inner">
      <div class="team-inner-wrapper">
        <h2 class="team-inner-wrapper__heading">Team in Twitter</h2>
        <div class="team-inner-founders">
          <div class="team-inner-founders-item">
            <img
              src="~/static/cvfounder.png"
              alt=""
              class="team-inner-founders-item__img"
            />
            <a class="team-inner-founders-item__link" href="">@cvfounder</a>
          </div>
          <div class="team-inner-founders-item">
            <img
              src="~/static/neoner.png"
              alt=""
              class="team-inner-founders-item__img"
            />
            <a class="team-inner-founders-item__link" href=""
              >@cvfounderneoner</a
            >
          </div>
        </div>
      </div>
      <div class="team-inner-wrapper team-inner-wrapper--collection">
        <h2 class="team-inner-wrapper__heading">Collection in Twitter</h2>
        <div class="team-inner-founders">
          <div class="team-inner-founders-item">
            <img
              src="~/static/twitter-team.png"
              alt=""
              class="team-inner-founders-item__img"
            />
            <a class="team-inner-founders-item__link" href="">@cvflat</a>
          </div>
        </div>
      </div>
    </div>
    <div class="team-inner inner">
      <div class="team-inner-wrapper">
        <h2 class="team-inner-network__heading">Networks</h2>
        <div class="team-inner-network">
          <div class="team-inner-network-item">
            <img
              src="~/static/discord-logo.png"
              alt=""
              class="team-inner-network-item__img"
            />
            <a class="team-inner-network-item__link" href="">/CRYPTOVERSE</a>
          </div>
          <div class="team-inner-network-item">
            <img
              src="~/static/insta-logo.png"
              alt=""
              class="team-inner-network-item__img"
            />
            <a class="team-inner-network-item__link" href="">CRYPTOVERSE</a>
          </div>
          <div class="team-inner-network-item">
            <img
              src="~/static/os-logo.png"
              alt=""
              class="team-inner-network-item__img"
            />
            <a class="team-inner-network-item__link" href="">CRYPTOVERSE</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.team {
  background: url("~/static/bg.png") no-repeat;
  background-position: 100% 100%;
  height: 100vh;
  position: relative;
  background-size: cover;
  overflow: auto;
  &-inner {
    @media (max-width: 320px) {
      flex-direction: column;
    }
    &-wrapper {
      &__heading {
        margin: 0 0 44px 0;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
      }
      &--collection {
        margin: 0 0 0 96px;
      }
    }
    &-founders {
      display: flex;
      align-items: center;
      @media (max-width: 320px) {
        flex-direction: column;
        align-items: flex-start;
      }

      &-item {
        display: flex;
        align-items: center;
        margin: 0 0 0 34px;
        @media (max-width: 320px) {
          margin: 0;
        }
        &:nth-child(1) {
          margin: 0;
        }
        &__link {
          text-decoration: none;
          margin: 0 0 0 16px;
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          text-transform: uppercase;

          color: #fff;
        }
      }
    }
    &-network {
      display: flex;
      &__heading {
        margin: 0 0 40px 0;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        /* identical to box height, or 133% */

        /* white */

        color: #f7f6f3;
      }
      &-item {
        align-items: center;
        display: flex;
        margin: 0 0 0 32px;
        &:nth-child(1) {
          margin: 0;
        }
        &__link {
          margin: 0 0 0 16px;
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
          /* identical to box height, or 150% */
          text-decoration: none;
          letter-spacing: 0.1em;
          text-transform: uppercase;

          /* white */

          color: #f7f6f3;

          &:nth-child(1) {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>