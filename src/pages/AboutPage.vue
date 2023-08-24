<template>
  <div class="basepage">
    <h1 class="title">О компании</h1>
    <div class="content">
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}

.month-title {
  margin-bottom: 20px;
  color: var(--gray-dark);

  @media (min-width: 1280px) {
    display: block;
  }
}

.list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 45px;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.card {
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  row-gap: 30px;
  background-color: var(--white);

  @media (min-width: 1280px) {
    display: grid;
    flex-direction: initial;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr 1fr;
    padding-right: 20px;
    column-gap: 20px;
    row-gap: 0;
    transition: box-shadow 0.3s ease-in-out;
  }
}

.card:hover {
  box-shadow: 0 1px 14px var(--gray-medium);
}

.card.active:hover {
  box-shadow: 0 1px 14px var(--blue-light);
}

.photo {
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  -webkit-border-radius: 3px 3px 0 0;
  -moz-border-radius: 3px 3px 0 0;
  border-radius: 3px 3px 0 0;

  @media (min-width: 1280px) {
    grid-row-start: 1;
    grid-row-end: 3;
    width: 132px;
    -webkit-border-radius: 3px 0 0 3px;
    -moz-border-radius: 3px 0 0 3px;
    border-radius: 3px 0 0 3px;
  }
}

.photo img {
  object-position: top center;
}

.title {
  font-size: 27px;
  text-align: center;
  color: var(--blue-dark);
}

.subtitle {
  color: var(--gray-dark);
  border-bottom: 1px solid var(--gray-medium);
  padding-bottom: 15px;
  margin-bottom: 20px;
}

.name {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;

  @media (min-width: 1280px) {
    justify-content: flex-start;
    font-size: 18px;
  }
}

.card-footer {
  display: flex;
  align-items: center;
  border-top: 1px solid var(--gray-medium);

  @media (min-width: 1280px) {
    column-gap: 15px;
  }
}

.date {
  display: flex;
  flex: auto;
  justify-content: center;
  font-weight: 700;
  font-size: 27px;
  color: var(--black);
  padding: 10px 0;

  @media (min-width: 1280px) {
    justify-content: flex-start;
    font-size: 18px;
    padding: 0;
  }
}

.active .date {
  color: var(--blue-light);
}

.icon {
  display: none;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background-color: var(--blue-light);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  -webkit-border-radius: 0 3px 0 3px;
  -moz-border-radius: 0 3px 0 3px;
  border-radius: 0 3px 0 3px;

  @media (min-width: 1280px) {
    width: 35px;
    height: 35px;
  }
}

.active .icon {
  display: flex;
}
</style>