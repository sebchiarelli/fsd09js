class AboutController{
    constructor(){
        this.viewPath = "views/about.html"
    }

    executeAfterDomUpdate(){
        console.log("About OK")
    }
}

export default AboutController;