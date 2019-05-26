
<template>
  <div id="chat-list">
    <div id="item-wrap">
      <div class="item item-2">
        <span>hm</span>
        <small>小白</small>
      </div>
      <div class="item item-1">
        <span>Joe</span>
        <small>自在</small>
      </div>
    </div>
  </div>
</template>

<style scoped>
#chat-list {
  display: flex;
  flex-direction: column;
}

#item-wrap {
  overflow-y: auto;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 44px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}
.item:hover {
  background-color: #eaeaea;
}

.item-1 {
  color: #67c23a;
  background-color: #f0f9eb;
}

.item-2 {
  color: #999;
  background-color: #fff;
}
</style>
