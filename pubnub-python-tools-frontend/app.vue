<script setup>
  const options = reactive({
    tool: "Subscribe",
    presence: "No",
    channel: "test.channel"
  });
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
          :class="options.tool === 'Subscribe' && 'option-active'"
          >Subscribe</button>
          <button class="option"
          :class="options.tool === 'Publish' && 'option-active'"
          >Publish</button>
          <button class="option option-right" 
          :class="options.tool === 'Herenow' && 'option-active'" 
          >Herenow</button>

        </div>
      </div>
      <div class="option-container">
        <h4>2) Add Presence</h4>
        <div class="option-buttons"> 
          <button class="option option-left"
          :class="options.presence === 'Yes' && 'option-active'"
          >Yes</button>
          <button class="option option-right"
          :class="options.presence === 'No' && 'option-active'"
          >No</button>
        </div>
      </div>
      <div class="option-container">
        <h4>3) Choose your channel</h4>
        <div class="option-buttons"> 
          <button class="option option-left"
          :class="options.channel === 'test.channel' && 'option-active'"
          >test.channel</button>
          <button class="option option-right"
          :class="options.channel === 'random_channel' && 'option-active'"
          >random_channel</button>
        </div>
      </div>
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
  color: rgb(27,60,238);
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
  background-color: rgb(149,87,89);
  color: white;
}

</style>

