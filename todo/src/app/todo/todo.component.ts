import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number = 0;
  todo!: Todo;

  constructor(private service : TodoDataService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());
    console.log(this.id)
    console.log(this.todo.targetDate)
    if(this.id != -1){
    this.service.retrieveTodo('ali', this.id).subscribe(
      data => this.todo = data

    )
  }
  }
  saveTodo(){
    if(this.id === -1){
      this.service.createTodo('ali', this.todo).
      subscribe(
       data => {
        this.router.navigate(['todos'])
       }
      )
    }else{

    this.service.updateTodo('ali', this.id, this.todo)
    .subscribe(
      data => {
        this.router.navigate(['todos'])
      }
    )
  }
  }
}
