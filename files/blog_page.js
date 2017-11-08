import{dom,moduleLoader}from'/lib/core.static.js'
let
    url='https://gitcdn.link/cdn/anliting/graphvisualizer/9f7c4b53cf2d24e1362dc609b63816238ac2fa88',
    loaded
function load(){
    if(loaded)
        return loaded
    return loaded=(async()=>{
        let module=await moduleLoader()
        await Promise.all([
            module.scriptByPath(`${url}/visualizer.js`),
            (async()=>{
                dom.head(dom.style(
                    await module.get(`${url}/visualizer.css`)
                ))
            })(),
        ])
    })()
}
async function plugin(div){
    await load()
    graphvisualize_all(div)
}
export default plugin
