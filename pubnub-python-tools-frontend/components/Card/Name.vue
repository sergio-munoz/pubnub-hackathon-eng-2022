<script setup lang="ts">
interface InstanceProps {
  user_id: string;
  index: number;
}
const props = defineProps<InstanceProps>();

const emit = defineEmits(["remove"])
const removeInstance = () => {
  emit("remove", props.index)
}
</script>

<template>
    <div class="card">
        <h4>{{ user_id }}</h4>
        <p @click="removeInstance">x</p>
    </div>
</template>
<style scoped>
.card {
  background-color: rgb(27,60,138);
  width: 28%;
  color: white;
  border-radius: 1rem;
  padding: 0.75rem;
  margin-right: 0.5 rem;
  margin-bottom: 1rem;
  position: relative;
}

.card p{
  position: absolute;
  top: -28%;
  left: 92.5%;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.178);
}
</style>