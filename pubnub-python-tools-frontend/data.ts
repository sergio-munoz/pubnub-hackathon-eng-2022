//import { PubnubPythonTools } from "@/python/ppt"
// /// <reference path="./ppt/index.d.ts" />
//import Ppt from "./ppt";

//const my = new Ppt();
//my.hello("Stack Overflow");

interface LocalInstance {
    user_id: string
    tool: Tool
    presence: boolean
    channel: Channel
    async: boolean
    //pn_instance: PubnubPythonTools
}

export enum Tool {
    SUBSCRIBE = 'Subscribe', 
    PUBLISH = 'Publish', 
    HERENOW = 'HereNow', 
}  

export enum Channel {
    TEST = 'test.channel', 
    SYSTEM = 'system', 
    RANDOM = 'test.Uz#77dD1uG', 
}  

export enum Credentials {
    SK = 'SubscribeKey',
    PK = 'PublishKey',
}

export const instances: LocalInstance[] = [
    {
        user_id: 'UUID',
        tool: Tool.PUBLISH,
        presence: false,
        channel: Channel.TEST,
        async: false,
        //pn_instance: null
    },
    {
        user_id: 'SYSTEM',
        tool: Tool.SUBSCRIBE,
        presence: true,
        channel: Channel.SYSTEM,
        async: false,
        //pn_instance: null
    },
]

interface PythonInstance {
    //instance: PubnubPythonTools
}

export const pythonInstances: PythonInstance[] = [
    // {
    //     instance: pubnub
    // }
]