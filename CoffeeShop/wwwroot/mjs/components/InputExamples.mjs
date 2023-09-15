import { ref } from "vue"

export default {
    template:`
    <div class="text-sm text-gray-600">
        <div class="flex justify-between">
            <div @click="expanded=!expanded" class="flex cursor-pointer items-center text-indigo-600 hover:text-indigo-800 select-none">
                <svg :class="['w-4 h-4 transition', expanded ? 'rotate-90' : '']" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 6a1 1 0 0 1 1.6-.8l8 6a1 1 0 0 1 0 1.6l-8 6A1 1 0 0 1 8 18V6Z"/></svg>
                Examples
            </div>
            <svg v-if="loading" class="h-3 text-slate-300" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <circle cx="15" cy="15" r="15">
                    <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite" />
                    <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite" />
                </circle>
                <circle cx="60" cy="15" r="9" fill-opacity="0.3">
                    <animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite" />
                    <animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite" />
                </circle>
                <circle cx="105" cy="15" r="15">
                    <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite" />
                    <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite" />
                </circle>
            </svg>
        </div>
        <div :class="['mt-4 absolute max-w-lg overflow-hidden bg-white shadow sm:rounded-md transition-transform', expanded ? '' : 'scale-0']">
            <ul role="list" class="divide-y divide-gray-200">
                <li @click="selectInput" v-for="input in inputs" class="px-4 py-4 sm:px-6 cursor-pointer hover:bg-gray-50">
                    {{input}}
                </li>
            </ul>
        </div>
    </div>
    `,
    emits: ['update:modelValue','change'],
    props: { loading:Boolean },
    setup(props, { emit, slots }) {
        const expanded = ref(false)
        const getSlotChildrenText = children => children.map(node => {
            if (!node.children || typeof node.children === 'string') return node.children || ''
            else if (Array.isArray(node.children)) return getSlotChildrenText(node.children)
            else if (node.children.default) return getSlotChildrenText(node.children.default())
        }).join('')
        const slotTexts = slots.default && getSlotChildrenText(slots.default()) || ''
        const inputs = slotTexts.trim().split('\n')

        function selectInput(e) {
            expanded.value = false
            emit('update:modelValue', e.target.innerText)
            emit('change', e.target.innerText)
        }

        return { expanded, inputs, selectInput }
    }
}