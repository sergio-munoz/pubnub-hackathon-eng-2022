<template>
    <div>
        <p>output: {{ output }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import { ref } from 'vue';
import { python, PyClass } from 'pythonia';
export default {
    async setup() {
        console.log("start setup");

        const ppt = await python('./ppt.py')
        console.log("loaded python: ", ppt);

        const sk = process.env.PN_SUBSCRIBE_KEY
        const pk = process.env.PN_PUBLISH_KEY
        const user_id =  process.env.PN_USER_ID

        class PPT extends PyClass {
            constructor() {
                super(ppt.Ppt, [sk, pk, user_id])
                console.log("loaded constructor: ", this);
            }
            async pub(channel, message) {
                const res = this.parent.publish(channel, message)
                console.log("pub");
                console.log(res)
                return res
            }
        }
        //const pn_instance = await new PPT().init().then(v => v.valueOf())
        const pn_instance = await PPT.init()
        console.log("pn_instance: ", pn_instance)
        console.log("loaded pn instance")

        //const ans = await pn_instance.pub("test.channel", "component1").then(v => v.valueOf())
        const ans = await pn_instance.pub("test.channel", "component1")
        console.log("FINISHED")
        console.log("ans:", ans)
        
        //const output = ref(ans)
        //python.exit()
        const output = ans

        // expose to template and other options API hooks
        return  { 
            output
        }
    },

    mounted() {
        //console.log("mounted output: ", this.output)
    },
}
</script>