export default {
    template: `
    <div class="flex justify-center items-center">
       <component is="style" v-html="css"></component>
       <div v-if="loading" class="w-16 h-16 lg:h-20 lg:w-20 bg-yellow-600 rounded-full flex justify-center items-center cursor-pointer animation-loading-pulse">
           <svg class="w-8 h-8 lg:w-10 lg:h-10 text-white" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><rect width="14" height="27" x="17" y="4" rx="7"/><path stroke-linecap="round" d="M9 23c0 8.284 6.716 15 15 15c8.284 0 15-6.716 15-15M24 38v6"/></g></svg>
       </div>
       <div v-else-if="!recording" v-on:click="$emit('toggle')" class="w-16 h-16 lg:h-20 lg:w-20 rounded-full flex justify-center items-center cursor-pointer shadow">
           <svg class="w-8 h-8 lg:w-10 lg:h-10 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><rect width="14" height="27" x="17" y="4" rx="7"/><path stroke-linecap="round" d="M9 23c0 8.284 6.716 15 15 15c8.284 0 15-6.716 15-15M24 38v6"/></g></svg>
       </div>
       <div v-else v-on:click="$emit('toggle')" class="w-16 h-16 lg:h-20 lg:w-20 bg-red-600 rounded-full flex justify-center items-center cursor-pointer animation-pulse">
           <svg class="w-8 h-8 lg:w-10 lg:h-10 text-white" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><rect width="14" height="27" x="17" y="4" rx="7"/><path stroke-linecap="round" d="M9 23c0 8.284 6.716 15 15 15c8.284 0 15-6.716 15-15M24 38v6"/></g></svg>
       </div>
   </div>`,
    emits:['toggle'],
    props: { loading:Boolean, recording:Boolean },
    setup(props, { emit }) {
        const css = `
        .animation-pulse {
            animation: pulse 2s infinite;
        }
        @keyframes pulse {
            0% {
                transform: scale(0.8);
                box-shadow: 0 0 0 0 rgba(229, 62, 62, 1);
            }
            70% {
                transform: scale(1);
                box-shadow: 0 0 0 60px rgba(229, 62, 62, 0);
            }
            100% {
                transform: scale(0.8);
            }
        }
        .animation-loading-pulse {
            animation: loading-pulse 2s infinite;
        }
        @keyframes loading-pulse {
            0% {
                transform: scale(0.8);
                box-shadow: 0 0 0 0 rgba(202,138,4, 1);
            }
            70% {
                transform: scale(1);
                box-shadow: 0 0 0 60px rgba(202,138,4, 0);
            }
            100% {
                transform: scale(0.8);
            }
        }`
        return { css }
    }
}
