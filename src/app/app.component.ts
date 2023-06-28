// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   title = 'authApp';
//   activeId : string;

//   constructor(private route:ActivatedRoute){
//     this.activeId = "login";
//   }
//   ngOnInit(){
//     console.log(this.route);
//     const routeParams = this.route.snapshot;
//     console.log("routeParams",routeParams)
//   }

  
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'authApp';
  activeId: string;
  currentUrl!: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log("app component")
    this.activeId = "login";
  }

  ngOnInit() {
    console.log("path",window.location.pathname)
    this.currentUrl = window.location.pathname;
    if(this.currentUrl === "/register"){
      this.activeId = "register"
    }

  }
}
