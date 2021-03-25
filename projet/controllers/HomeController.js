class HomeController{
    constructor(){
        this.viewPath = "views/home.html"
    }

    executeAfterDomUpdate(){
        console.log("Home OK")
    }
}

export default HomeController;