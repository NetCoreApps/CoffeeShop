export default {
    template:`
        <div>
            <svg v-if="!playing" v-on:click="$emit('play')" class="w-10 h-10 text-gray-600 hover:text-gray-800 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>play</title> <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m14.752 11.168l-3.197-2.132A1 1 0 0 0 10 9.87v4.263a1 1 0 0 0 1.555.832l3.197-2.132a1 1 0 0 0 0-1.664Z"/><path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"/></g></svg>
            <svg v-else v-on:click="$emit('pause')" class="w-10 h-10 text-gray-600 hover:text-gray-800 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"/></svg>
        </div>
    `,
    emits: ['play','pause'],
    props: { playing:Boolean }
}