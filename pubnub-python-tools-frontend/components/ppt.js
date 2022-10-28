"use strict";
import { python, PyClass } from 'pythonia'
const ppt = await python('./ppt.py')

const sk = process.env.PN_SUBSCRIBE_KEY
const pk = process.env.PN_PUBLISH_KEY
const user_id =  process.env.PN_USER_ID

class PPT extends PyClass {
  constructor() {
    // The second is an array of positional ... `true` maps to degrees. A third arg allows us to specify named arguments.
    // we could also do `super(calc.Calc, null, { degrees: true, integers: false })`
    // super(ppt.Instance, [true], { integers: false })
    // super(ppt.Instance, [sk, pk, user_id], { sk: sk, pk: pk, user_id: user_id })
    super(ppt.Ppt, [sk, pk, user_id])
  }

  async pub(channel, message) {
    const res = this.parent.publish(channel, message)
    return res
  }

  async mul (a, b) { // Multiply the cool way
    let res = a
    for (let i = 1; i < b; i++) {
      res = await this.add(res, b)
    }
    return res
  }

  async div(a, b) {
      // Call the superclass's div()
      const superExample = this.parent.div(a, b)
      return superExample
  }

  stop() {
    python.exit()
  }
}

//export const pubnub = await PubnubPythonTools.init()
//console.log("Published message: ", await pubnub.pub("test.channel", "yo!"))
//console.log('6 / 3 = ', await calculator.div(6, 3)) // 2 !
python.exit()

export default PubnubPythonTools