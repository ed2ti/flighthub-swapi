<template>
  <topnavbar>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="img/star-wars-logo.png" alt="..." height="36">
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/">
                <img class="img" height="36" src="img/people.png" data-bs-toggle="tooltip" data-bs-placement="bottom"
                  title="People">
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/starships">
                <img class="img" height="36" src="img/starships.png"  data-bs-toggle="tooltip" data-bs-placement="bottom"
                  title="StarShips">
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/planets">
                <img class="img" height="36" src="img/planets.png"  data-bs-toggle="tooltip" data-bs-placement="bottom"
                  title="Planets">
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </topnavbar>
</template>
<style></style>
