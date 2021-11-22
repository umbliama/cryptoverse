<template>
  <header class="header">
    <div class="header-outer">
      <div class="header-menu">
        <div class="header-menu-logo">
          <h2 class="header-menu-logo__item">CRYPTOVERSE</h2>
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
            <a href="" class="header-menu-nav-item__link link">TEAM</a>
          </li>
        </div>
        <div class="header-menu-nav">
          <li class="header-menu-nav-item">
            <a href="" class="header-menu-nav-item__link link">GALLERY</a>
          </li>
          <li class="header-menu-nav-item">
            <a href="" class="header-menu-nav-item__link link">BUY </a>
          </li>
        </div>
      </div>
    </div>
  </header>
</template>


<style lang="scss" scoped>
.link {
  text-decoration: none;
  font-weight: 400;
  color: rgba($color: #fff, $alpha: 0.4);
  &:hover {
    color: rgba($color: #fff, $alpha: 1);
  }
}
.header {
  background: url("~/static/header-bg.png") no-repeat;
  background-position: 100% 100%;
  height: 100vh;
  margin: 0 auto;

  background-size: cover;
  &-outer {
    background: rgba(22, 22, 22, 0.5);
    backdrop-filter: blur(10px);
  }
  &-menu {
    display: flex;

    &-logo {
      &__item {
      }
    }
    &-nav {
      display: flex;
      align-items: center;
      &-item {
        list-style: none;
        margin: 0 49px 0 49px;

        &__link {
        }
      }
    }
  }
}
</style>