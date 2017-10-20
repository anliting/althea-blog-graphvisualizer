import{moduleLoader}from'/lib/core.static.js'
export default async blog=>{
    let module=await moduleLoader()
    module.scriptByPath('https://gitcdn.link/cdn/anliting/graphvisualizer/9f7c4b53cf2d24e1362dc609b63816238ac2fa88/visualizer.js').then(()=>{
        blog.addPagePlugin(div=>{
            graphvisualize_all(div)
        })
    })
    module.styleByPath('https://gitcdn.link/cdn/anliting/graphvisualizer/9f7c4b53cf2d24e1362dc609b63816238ac2fa88/visualizer.css').then(main=>
        document.head.appendChild(main)
    )
}
