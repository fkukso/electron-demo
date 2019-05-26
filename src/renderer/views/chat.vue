<template>
  <div id="chat">
    <el-tabs v-model="activeName">
      <el-tab-pane label="发消息" name="F">
        <send-message></send-message>
      </el-tab-pane>
      <el-tab-pane label="联系人" name="M">
        <chat-list></chat-list>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import SendMessage from '@/components/SendMessage.vue'
import ChatList from "@/components/ChatList.vue";

export default {
  data() {
    return {
      activeName: "M"
    };
  },
  components: {
    'send-message': SendMessage,
    'chat-list': ChatList
  },
};
</script>

<style scoped>
#chat {
  height: 100%;
  margin: 0 8px;
}
</style>
