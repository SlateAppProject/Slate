<template>
  <div >
    FAVORITE ROOMS
    <ul>
        <li v-for="(room, index) in rooms" :key="index"> {{ room }} </li>     
    </ul>
  </div>
</template>

<script>

export default {
    name: 'FavoriteRooms',
    props: {
        rooms: {
            type: Array,
            required: true
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
