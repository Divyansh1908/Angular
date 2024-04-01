import { Component, OnInit } from '@angular/core';
import { todo } from '../../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})

export class TodosComponent implements OnInit {
  todos: todo[];

  constructor(){
    this.todos = [
      {
        sno:3,
        title:"this is ttle",
        desc:"description",
        active:true
      },
      {
        sno:4,
        title:"this is ttle2",
        desc:"description",
        active:true
      },
      {
        sno:5,
        title:"this is ttle3",
        desc:"description",
        active:true
      },
      {
        sno:6,
        title:"this is ttle4",
        desc:"description",
        active:true
      }
    ]
  }

  ngOnInit(): void {
      
  }
}
