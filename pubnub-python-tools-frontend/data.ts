interface PN {
    user_id: string
    tool: Tool
    presence: boolean
    channel: Channel
    async: boolean
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
    
export const instances: PN[] = [
    {
        user_id: 'UUID',
        tool: Tool.SUBSCRIBE,
        presence: true,
        channel: Channel.TEST,
        async: false
    },
    {
        user_id: 'SYSTEM',
        tool: Tool.SUBSCRIBE,
        presence: true,
        channel: Channel.SYSTEM,
        async: false
    },
]