export const stringAdapter = (string) =>{
    return string.toLowerCase().replace(/^\w/, (c) => c.toUpperCase()).split('_').join(' ')
}