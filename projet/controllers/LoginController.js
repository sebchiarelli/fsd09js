class LoginController {
	constructor() {
		this.viewPath = "views/login.html";
	}
	executeAfterDomUpdate() {
		console.log("Login OK");
	}
}
export default LoginController;
