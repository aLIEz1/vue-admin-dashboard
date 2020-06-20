<template>
    <div class="bubble">
        <div class="message">

        </div>
    </div>
</template>

<script>
    export default {
        name: "Notification"
    }
</script>

<style scoped lang="scss">
.bubble{
    border-radius: 6px;
    position: absolute;
    top: 10%;
    padding: 5px 10px 5px 10px;
    background: $blue;
}
    .message{
    }
</style>