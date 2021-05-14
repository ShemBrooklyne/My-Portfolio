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
      name: 'Pizza-Waver Web App', 
      image: 'assets/projects/onlinepizza.jpg', 
      desc: 'Developed using Basic Html,CSS,Bootstrap and Javascript, ' +
        'I made this web application as an educational project while at in Moringa School. ' + ' Initially, the main purpose of the application was to therefore assist both the customers and pizza palace attendance to have an easy time while processing orders and ' +
        'use.', 
        demo: 'https://shembrooklyne.github.io/PIZZA-WAVER/', 
        source: 'https://github.com/ShemBrooklyne/PIZZA-WAVER'
    },
    {
      name: 'Post Fire', 
      image: 'assets/projects/postfire.jpg', 
      desc: 'This is an Angular web mini gallery project that allows one to upload and caption images to a cloud gallery powered by firebase realtime-database and it\'s cloud storage as well. Feel free to post fire pics to the gallery, I made content author as anonymous!.', 
      demo: 'https://github.com/ShemBrooklyne/POSTFIRE', 
      source: 'https://shembrooklyne.github.io/POSTFIRE/'
    },
    {
      name: 'News Portal Api', image: 'assets/projects/newsportalapi.png', desc: 'This is a JSON Api created using Java|Spark. This Api can ' +
        'generate Scoped News and information within an organization. ',
      demo: 'https://orgnewsportal.herokuapp.com/', source: 'https://github.com/ShemBrooklyne/News-Portal'
    },
    {
      name: 'Expense Tracker', image: 'assets/projects/expensetracker.jpg', 
      desc: 'This is a full-featured expense management app. It tracks and categorizes all the expenses you make, simply day to day spending. The app creates a chart indicating your weekly cash flow and breaking down your monthly expenses. In addition, the app can help you with financial planning and provide an investment check-up. It is an android mobile app.',
      demo: '', source: 'https://github.com/ShemBrooklyne/Expense-Tracker-App'
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
