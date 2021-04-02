<template>
  <header>
    <div class="logo">
      <p>MyShop</p>
    </div>
    <nav class="nav">
      <ul class="navbar">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About Us</a></li>
        <li class="nav-item"><a class="nav-link" href="#">More</a></li>
      </ul>

    </nav>
  </header>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
header {
  --color: #f3f3f3;
  --color-inverse: #333;
  --background: transparent;
  --size: 1rem;
  width: 100%;
  margin: 0;
  padding: 30px 0;
  position: fixed;
  background-color: var(--background);
  color: var(--color);
  font-family: "Courier New", Courier, monospace;
  font-size: 18px;
  display: grid;
  grid-template-columns: 1fr 5fr;
  transition: all 0.8s cubic-bezier(0, 0.5, 0, 1);

    .logo {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        p {
            margin: 0 20px;
            text-align: center;
            font-weight: 200;
            font-size: 22px;
        }
    }
  nav {
    margin: 0 auto;
    width: 100%;
    display: grid;
    justify-content: flex-end;

    .navbar {
      margin: 0 auto;
      list-style: none;
            padding: 15px 0;

      .nav-item {
        .nav-link {
          color: var(--color);
                    margin-left: 10px;
                    padding: 5px 10px;
                    transition: all 0.25s ease-in-out;
        }
      }
    }
  }
}

.scrolled {
    background-color: #333;
    color: #f4f4f4;
    padding: 0;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);

    nav {
        .navbar {
            padding: 15px 0;
            .nav-item {
                .nav-link {
                    margin-left: 10px;
                    padding: 5px 10px;
                    color: #f4f4f4;

                    &:hover {
                        background-color: lightgray;
                        color: #333;
                    }
                }
            }
        }
    }
}

.dark {
    background-color: #f4f4f4;
    color: #333;
    padding: 0;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);

    nav {
        .navbar {
            padding: 15px 0;
            .nav-item {
                .nav-link {
                    margin-left: 10px;
                    padding: 5px 10px;
                    color: #333;
                    transition: all 0.25s ease-in-out;

                    &:hover {
                        background-color: lightgray;
                    }
                }
            }
        }
    }
}


</style>