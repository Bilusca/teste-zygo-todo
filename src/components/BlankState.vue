<template>
  <div class="blank-state">
    <v-icon icon="exclamation" class="alert"></v-icon>
    <p>Nenhuma tarefa {{ status }} no momento</p>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class BlankState extends Vue {
  @Prop({ required: true }) private status!: string;
}
</script>
<style scoped lang="scss">
.blank-state {
  width: 100%;
  height: 220px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  border: 1px solid rgba(204, 204, 204, 0.6);
  border-radius: 15px;
  box-shadow: 0px 0px 5px 3px rgba(204, 204, 204, 0.6);

  .alert {
    font-size: 95px;
    color: #ffc107;
    margin-bottom: 15px;
  }

  p {
    font-size: 20px;
    text-align: center;
    font-weight: 600;
    color: #343434;
  }
}
</style>
