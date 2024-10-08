//router instance
let Router = function (name, routes) {
    return {
        name,
        routes
    }
};
const routerInstance = new Router('routerInstance', [
    {
        path: "/",
        name: "Root",
        content:'<h1>You are on Home page</h1>\
        ตัวอย่างการทำหน้า SPA ถ้า route ไหนไม่มี middleware จัดการจะไปหน้า index.html เสมอ'
    },
    {
        path: '/about',
        name: "About",
        content: '<h1>About page</h1> \
        หน้า About'
    },
    {
        path: '/test',
        name: "Test",
        content: '<h1>Test API</h1> \
        หน้า APi'
    },
    {
        path: '/fruit',
        name: "fruits",
        content:`<a href="http://localhost:3000/fruits" >click it</a>`
    }

])
export default routerInstance