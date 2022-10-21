<script setup lang="ts">
import { Tool, Channel, instances } from "@/data";

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
  selectedInstances.value = filteredInstances.map(instance => instance.user_id)
}

const selectedInstances = ref<string[]>([])

</script>

<template>
  <div class="container">
    <h1>PubNub Python Tools</h1>
    <p>Quickly interact with PubNub using Python.</p>
    <div class="options-container">
      <div class="option-container">
        <h4>1) Choose a tool</h4>
        <div class="option-buttons"> 
          <button class="option option-left"
          :class="options.tool === Tool.SUBSCRIBE && 'option-active'"
          @click="options.tool = Tool.SUBSCRIBE"
          >Subscribe</button>
          <button class="option"
          :class="options.tool === Tool.PUBLISH && 'option-active'"
          @click="options.tool = Tool.PUBLISH"
          >Publish</button>
          <button class="option option-right" 
          :class="options.tool === Tool.HERENOW && 'option-active'" 
          @click="options.tool = Tool.HERENOW"
          >Herenow</button>

        </div>
      </div>
      <div class="option-container">
        <h4>2) Add Presence</h4>
        <div class="option-buttons"> 
          <button class="option option-left"
          :class="options.presence === true && 'option-active'"
          @click="options.presence = true"
          >Yes</button>
          <button class="option option-right"
          :class="options.presence === false && 'option-active'"
          @click="options.presence = false"
          >No</button>
        </div>
      </div>
      <div class="option-container">
        <h4>3) Choose your channel</h4>
        <div class="option-buttons"> 
          <button class="option option-left"
          :class="options.channel === Channel.TEST && 'option-active'"
          @click="options.channel = Channel.TEST"
          >test.channel</button>
          <button class="option"
          :class="options.channel === Channel.RANDOM && 'option-active'"
          @click="options.channel = Channel.RANDOM"
          >random_channel</button>
          <button class="option option-right"
          :class="options.channel === Channel.SYSTEM && 'option-active'"
          @click="options.channel = Channel.SYSTEM"
          >system</button>
        </div>
      </div>
      <button class="primary" @click="computeSelectedInstances">Find Instance</button>
    </div>
    <div class="cards-container">
      <div v-for="instance in selectedInstances" :key="user_id" class="card">
        <h4>{{ user_id }}</h4>
        <p>x</p>
      </div>
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

.option-container {
  margin-bottom: 2rem;
}

.option {
  background: white;
  outline: 0.15rem solid rgb(149,87,89);
  border: none;
  padding: 0.75rem;
  width: 12rem;
  font-size: 1rem;
  color: rgb(5,5,38);
  cursor: pointer;
  font-weight: 200;
}

.option-left {
  border-radius: 1rem 0 0 1rem;
}

.option-right {
  border-radius: 0 1rem 1rem 0;
}

.option-active {
  background-color: rgb(249,87,89);
  color: white;
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

