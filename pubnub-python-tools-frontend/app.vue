<script setup lang="ts">
import { Tool, Channel, instances} from "@/data";

interface OptionState {
  user_id: String;
  tool: String;
  presence: Boolean;
  channel: String;
  async: Boolean;
}

const options = reactive<OptionState>({
  user_id: 'SYSTEM',
  tool: Tool.SUBSCRIBE,
  presence: false,
  channel: Channel.TEST,
  async: false
});

const computeSelectedInstances = () => {
  const filteredInstances = instances.filter((instance) => instance.user_id === options.user_id)
  selectedInstances.value = filteredInstances.map((instance) => instance.user_id)
}

const selectedInstances = ref<string[]>([])

const optionsArray = [
  {
    title: "1) Choose a tool",
    category: "tool",
    buttons: [Tool.SUBSCRIBE, Tool.PUBLISH, Tool.HERENOW]
  },
  {
    title: "2) Add presence",
    category: "presence",
    buttons: [true,false]
  },
  {
    title: "3) Choose your chanel",
    category: "channel",
    buttons: [Channel.TEST, Channel.RANDOM, Channel.SYSTEM]
  }
]
</script>

<template>
  <div class="container">
    <h1>PubNub Python Tools</h1>
    <p>Quickly interact with PubNub using Python.</p>
    <div class="options-container">
      <Option v-for="option in optionsArray" :key="option.title" :option="option" :options="options" />
      <button class="primary" @click="computeSelectedInstances">Find Instance</button>
    </div>
    <div class="cards-container">
      <CardName v-for="user_id in selectedInstances" :key="user_id" :user_id="user_id" />
    </div>
    {{ selectedInstances }}
  </div>
</template>

<style scope>
.container {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(133, 22, 27);
  max-width: 50 rem;
  margin: 0 auto;
  text-align: center;
}

.container.h1 {
  font-size: 3rem;
  color: rgb(249,87,89);
}

.options-container {
  background-color: rgb(255,238, 236);
  border-radius: 2rem;
  padding: 1rem;
  width: 95%;
  margin: 0 auto;
  margin-top: 4rem;
  position: relative;
}

.primary {
  background-color: rgb(249,87,89);
  color: white;
  border-radius: 6.5 rem;
  border: none;
  padding: 0.75rem 4rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  }

.cards-container {
  display: flex;
  margin-top: 3rem;
  flex-wrap: wrap;
  }
</style>
