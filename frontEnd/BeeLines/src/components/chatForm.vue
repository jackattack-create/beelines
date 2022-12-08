

<script>

    export default {
        data () {
            return {
                ChatLogItem: '',
                ChatLog: []
            }
        },
        methods: {
            addLog: function(item) {
                console.log(item)
                this.ChatLog.push(item)
            }
        }
    }

</script>


<template>
    <div v-for="message in ChatLog" id="messageLog">
        <h1>{{message}}</h1>

    </div>
    <form 
        v-on:submit="(event) => {
            event.preventDefault(); 
            addLog(ChatLogItem)
        }"
    >
        <div id="chatInput">
            <input 
                type="text" 
                placeholder="Ask me anything!" 
                v-model="ChatLogItem"
                v-on:change="(event) => {
                    console.log(event.target.value)
                }" 
                @submit="(event) => {
                    ChatLogItem = event.target.value
                   
                }"
            />
        </div>
    </form>
</template>

<style >
    #chatInput {
        height: 100px;
    }

    #messageLog {
        height: 100px;
    }
    input {
        text-decoration: none;
        border: none;
        border-bottom: 2px solid #333;
        width: 100%;
        margin: 10px;
        padding-bottom: 5px;
        font-size: 22px;
        box-shadow: none;
    }

    input:focus {
        outline: none;
    }
</style>