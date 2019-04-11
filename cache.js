

 export function saveCache(name, obj)
{
    obj.date = Date.now()
    let obje = JSON.stringify(obj)
    localStorage.setItem(name, obje)

}

export function loadCache(name)
{
    let obj = JSON.parse(localStorage.getItem(name))
    return obj

}