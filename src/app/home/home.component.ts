import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Project} from '../models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date: Date = new Date();
  projects: Project[] = [
    {
      name: 'Pizza-Waver Web App', image: 'assets/projects/pizdem.png', desc: 'Developed using Basic Html,CSS,Bootstrap and Javascript, ' +
        'I made this web application as an educational project while at in Moringa School. ' + ' Initially, the main purpose of the application was to therefore assist both the customers and pizza palace attendance to have an easy time while processing orders and ' +
        'use.', demo: 'https://shembrooklyne.github.io/PIZZA-WAVER/', source: 'https://github.com/ShemBrooklyne/PIZZA-WAVER'
    },
    {
      name: 'Github Search', image: 'assets/projects/github.png', desc: 'This is an angular app' +
        ' I was working on. I needed a personalised app whereby I could search for github users and view on their repositories. I went on and requested an access token from Githubs Api' +
        ' The access token from github enabled me to filter data from github to return only users information and repositories.',
      demo: 'https://shembrooklyne.github.io/Github-Search/', source: 'https://github.com/ShemBrooklyne/Github-Search'
    },
    {
      name: 'Heroes App', image: 'assets/projects/heroes.png', desc: 'Developed using Java|Spark. ' +
        'This one I build just for fun. I was looking at some design inspirations on the internet and a lot of designs on comics. ' +
        'This was a really fun project and the result was worth it. HeroSquad app is an app that allows a user to create a new hero and also add new characters to a preferable Squad ', 
      demo: 'https://shemsheroes.herokuapp.com/', source: 'https://github.com/ShemBrooklyne/Hero-Squad'
    },
    {
      name: 'Wild Life Tracker', image: 'assets/projects/wildlife.png', desc: 'This is a simple java application' +
        ' that allows rangers to track wil animals. This web application allows a ranger to register new entries of wild animals sighted to a database. ' +
        'The web application uses PostgreSQL as its main database. Source code is ' +
        'available on my Github.', demo: 'https://wanyamatracker.herokuapp.com/',source: 'https://github.com/ShemBrooklyne/Wild-Life-Tracker'
    },
    {
      name: 'News Portal Api', image: 'assets/projects/newsportalapi.png', desc: 'This is a JSON Api created using Java|Spark. This Api can ' +
        'generate Scoped News and information within an organization. ',
      demo: 'https://orgnewsportal.herokuapp.com/', source: 'https://github.com/ShemBrooklyne/News-Portal'
    },
    // {
    //   name: 'DR Forensic Services', image: 'assets/projects/drforensic.png', desc: 'This project I did for a client. I made this ' +
    //     'static website using TypeScript with Angular Framework. There are some Rotate animation, typewriter animation and some carousels.',
    //   demo: 'https://drforensicservices.com', source: ''
    // },
    {
      name: 'NewsUpdates', image: 'assets/projects/newsupdatesdemo.jpg', desc: 'NewsUpdates App is an android news updater app that ' +
      'scopes the latest news all over via a news Api that will be used to generate news all over. Api News is a JSON format Api that generates live news and blog articles from various sources. ' +
        ' This android app uses retrofit2 as HTTP Client.',
      demo: '', source: 'https://github.com/ShemBrooklyne/NewsUpdate'
    },
  ];

  showScrollButton = false;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    this.showScrollButton = window.pageYOffset > 500;
  }

  moveToTop() {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    window.scroll()
  }
}
