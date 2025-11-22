import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {

        const current = ref(0);

        const increment = () => {
            current.value ++;
        }

        return {
            current,
            increment
        }
    }
});