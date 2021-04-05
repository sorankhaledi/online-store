<template>
  <header>
    <b-navbar
      :class="headerClass"
      toggleable="lg"
      fixed="top"
      variant="background"
    >
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" @click="change('b')">
        <template>
          <b-icon icon="list"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="change('n')" to="/" exact>Home</b-nav-item>
          <b-nav-item @click="change('n')" to="/pricing">Pricing</b-nav-item>
          <b-nav-item @click="change('n')" to="/about">About Us</b-nav-item>
          <b-nav-item @click="change('n')" to="/more">More</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  data() {
    return {
      toggled: false,
      headerClass: "",
    };
  },
  methods: {
    change(value) {
      if (value == "b") {
        this.toggled = !this.toggled;
      } else {
        if (this.toggled) {
          this.toggled = false;
        }
      }
      this.setClass();
    },
    setClass() {
      const section1 = document.querySelector(".section1");

      if(section1) {
        if (this.toggled && window.scrollY == 0) {
          this.headerClass = "scrolled";
        } else {
          this.headerClass = "";
        }
      } else {
        this.headerClass = "dark";
      }
    },
  },
  mounted() {
    this.setClass();
  }
};
</script>

<style lang="scss" scoped>
* {
  --color: #f3f3f3;
  --color-inverse: #333;
  --background: transparent;
}

header {
  font-family: "Courier New", Courier, monospace;

  nav {
    padding: 20px 0;
    transition: all 0.8s cubic-bezier(0, 0.5, 0, 1);

    .navbar-brand {
      color: var(--color);
      font-weight: 900;
      font-size: 1rem;
      margin-left: 15px;

      &:hover {
        color: var(--color);
        cursor: text;
      }
    }

    .navbar-toggler {
      border-color: var(--color);
      margin-right: 15px;
      border-radius: 50%;
      height: 40px;
      width: 40px;
      padding: 0;

      &:hover {
        background-color: rgb(63, 56, 56);
      }

      svg {
        fill: var(--color);
      }
    }

    .nav-item {
      margin: 5px 15px;

      .nav-link {
        color: var(--color);
        transition: all 250ms ease;

        &:hover,
        &:active,
        &:focus,
        &.router-link-exact-active {
          background-color: lightgray;
          border-radius: 5px;
          color: var(--color-inverse);
          box-shadow: 0px 1px 5px rgba(255, 255, 255, 0.5);
        }
      }
    }
  }

  .scrolled {
    background-color: var(--color-inverse);
    padding: 10px 0;

    .navbar-toggler {
      margin-right: 15px;

      &:hover {
        background-color: rgb(68, 64, 64);
      }

      svg {
        color: var(--color);
      }
    }

    .nav-item {
      margin: 5px 15px;

      .nav-link {
        color: var(--color);
        transition: all 250ms ease;

        &:hover,
        &:active,
        &:focus,
        &.router-link-exact-active {
          background-color: lightgray;
          border-radius: 5px;
          color: var(--color-inverse);
          box-shadow: 0px 1px 5px rgba(255, 255, 255, 0.5);
        }
      }
    }
  }

  .dark {
    background-color: var(--color);
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
    padding: 10px 0;

    .navbar-toggler {
      margin-right: 15px;
      border-color: var(--color-inverse);

      &:hover {
        background-color: rgb(214, 214, 214);
      }

      svg {
        fill: var(--color-inverse);
      }
    }

    .navbar-brand {
      color: var(--color-inverse);
    }

    .nav-item {
      margin: 5px 15px;

      .nav-link {
        color: var(--color-inverse);
        transition: all 250ms ease;

        &:hover,
        &:active,
        &:focus,
        &.router-link-exact-active {
          background-color: darkgray;
          border-radius: 5px;
          color: white;
          box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
}
</style>