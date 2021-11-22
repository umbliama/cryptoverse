<template>
  <header class="header">
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
            <a href="#history" class="header-menu-nav-item__link link"
              >HISTORY</a
            >
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
      :heading="'WELCOME TO YOUR FUTURE'"
      :pageNum="'1'"
      :pageName="'MAIN'"
    />
  </header>
</template>


<style lang="scss" scoped>
.header {
  background: url("~/static/header-bg.png") no-repeat;
  background-position: 100% 100%;
  height: 100vh;
  position: relative;
  background-size: cover;
  &-outer {
    background: rgba(22, 22, 22, 0.5);
    backdrop-filter: blur(10px);
  }
  &-menu {
    display: flex;
    margin: 0 auto;
    max-width: 1280px;
    justify-content: space-between;

    &-logo {
      &__item {
      }
    }
    &-nav {
      display: flex;
      align-items: center;
      @media (max-width: 320px) {
        display: none;
      }
      &-item {
        list-style: none;
        margin: 0 49px 0 0;
        &__link {
        }
      }
    }
  }
}
</style>