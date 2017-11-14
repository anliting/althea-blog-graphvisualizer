import{dom,load as coreLoad}from'/lib/core.static.js'
let
    url='https://gitcdn.link/cdn/anliting/graphvisualizer/a2c8418417d9a07e2f69a19c1b8cb9eb1bdd26dc/src',
    Graph,
    loaded
function load(){
    if(loaded)
        return loaded
    return loaded=(async()=>{
        let module=await coreLoad.module()
        await Promise.all([
            (async()=>{
                Graph=await module.moduleByPath(`${url}/Graph.js`)
            })(),
            (async()=>{
                dom.head(dom.style(
                    await module.get(`${url}/visualizer.css`)
                ))
            })(),
        ])
    })()
}
async function plugin(div){
    let a=[...div.getElementsByClassName('graphvisualizer')]
    if(!a.length)
        return
    await load()
    a.forEach(e=>{
        Graph.visualize(e)
    })
}
export default plugin
