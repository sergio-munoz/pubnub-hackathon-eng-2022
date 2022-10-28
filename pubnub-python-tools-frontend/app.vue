<script setup lang="ts">
import { Tool, Channel, instances } from "@/data";
import { METHODS } from "http";
import { Publish } from "./.nuxt/components";

interface OptionState {
  user_id: String;
  tool: String;
  presence: Boolean;
  channel: Channel;
  async: Boolean;
 // pn_instance: PPT;
}

const options = reactive<OptionState>({
  user_id: 'UUID',
  tool: Tool.SUBSCRIBE,
  presence: false,
  channel: Channel.TEST,
  async: false,
  //pn_instance: null,
});

const computeSelectedInstances = () => {
  const filteredInstances = instances.filter((instance) => instance.user_id === options.user_id)
  selectedInstances.value = filteredInstances.map((instance) => instance.user_id)
}

const selectedInstances = ref<string[]>([])
const selectedInterfaces = ref<Promise<any>[]>([])

const removeInstance = (index: number) => {
  const filteredInstances = [...selectedInstances.value]
  filteredInstances.splice(index, 1)
  selectedInstances.value = filteredInstances
}

//const publishFromInstances = (channel: Channel, message: string) => {
  //const filteredInterfaces = instances.filter((instance) => instance.user_id === options.user_id)
  //selectedInterfaces.value = filteredInterfaces.map((instance) => instance.pn_instance.pub(channel.toString(),message))
//}

const messages = ref<string[]>(["Jejejeje"])

const optionsArray = [
  {
    title: "1) Choose a tool",
    category: "tool",
    buttons: [Tool.PUBLISH]
  },
  {
    title: "2) Choose your chanel",
    category: "channel",
    buttons: [Channel.TEST, Channel.RANDOM, Channel.SYSTEM]
  },
  {
    title: "3) Type your message",
    category: "message",
    buttons: [Tool.PUBLISH]
  }
]

</script>
<script lang="ts">
export default{
  data() {
    return {
      show: false
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>PubNub Python Tools</h1>
    <p>Quickly interact with PubNub using Python.</p>
    <div class="options-container">
      <Option v-for="option in optionsArray" :key="option.title" :option="option" :options="options" />
      <button class="primary" @click="computeSelectedInstances">Select Instance</button>
    </div>
    <div>
      <!--
      //<button class="primary" @click="publishFromInstances(options.channel, messages[0])">
        Publish
      </button>
      -->
    </div>
    <div class="cards-container">
      <CardName v-for="(user_id, index) in selectedInstances" :key="user_id" :user_id="user_id"
        @remove="() => removeInstance(index)" :index="index" />
    </div>
    {{ selectedInstances }}
    <div>
      <h1>PUBLISH</h1>
      <Publish v-if="show">
        <slot></slot>
        </Publish>
      <button class="primary" v-if="!show" @click="show = true">Publish Python</button>
    </div>
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
