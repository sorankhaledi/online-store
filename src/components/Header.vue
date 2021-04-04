<template>
  <header>
    <b-navbar
      :class="headerClass"
      toggleable="lg"
      fixed="top"
      variant="background"
    >
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" @click="change">
        <template>
          <b-icon icon="list"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Pricing</b-nav-item>
          <b-nav-item href="#">About Us</b-nav-item>
          <b-nav-item href="#">More</b-nav-item>
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
  props: ["scrolled"],
  methods: {
    change() {
      this.toggled = !this.toggled;
      this.setClass();
    },
    setClass() {
      if (this.toggled && !this.scrolled) {
        this.headerClass = "scrolled";
      } else {
        this.headerClass = "";
      }
    },
  },
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
        &:focus {
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
        &:focus {
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
        &:focus {
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