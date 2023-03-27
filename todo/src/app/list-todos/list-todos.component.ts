import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
export class  Todo{
  constructor(
    public id:number,
    public description: string,
    public done : boolean,
    public targetDate: Date
  ){

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos : Todo[] = [];
  message : string = ''

  constructor(private service : TodoDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.refreshTodos();
  }
  deleteTodo(id : number){
    this.service.deleteTodo('ali', id).subscribe(
      data => {
        this.message = `Delete of Todo ${id} Succesful`;
        this.refreshTodos();
      }
    )
  }
  refreshTodos(){
    this.service.retrieveAllTodos('ali').subscribe(
      data => {
        this.todos = data ;
      }
    )
  }

  updateTodo(id : number){
    this.router.navigate(['todos', id])
  }

  addTodo(){
    this.router.navigate(['todos', -1])
  }

}
