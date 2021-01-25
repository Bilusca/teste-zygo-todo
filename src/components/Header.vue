<template>
  <header class="header">
    <h1>Organizador de Tarefas</h1>
  </header>
</template>

<style lang="scss" scoped>
@import "@/styles/mq.scss";

.header {
  padding: 10px;
  border: 1px solid rgba(204, 204, 204, 0.6);
  border-radius: 15px;
  box-shadow: 0px 0px 5px 3px rgba(204, 204, 204, 0.6);
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 0;
    font-size: 25px;
    color: #892cdc;
    text-transform: uppercase;

    @include mq($until: tablet) {
      font-size: 20px;
    }

    @include mq($until: 320px) {
      font-size: 17px;
    }
  }
}
</style>
