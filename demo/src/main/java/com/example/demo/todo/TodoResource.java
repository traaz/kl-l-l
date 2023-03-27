package com.example.demo.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins =  "*")
@RestController
public class TodoResource {

	private TodoHardCodedService todoService;
	
	
	@Autowired
	public TodoResource(TodoHardCodedService todoService) {
		super();
		this.todoService = todoService;
	}




	@GetMapping(path="/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		return todoService.findAll();
	}
	
	@GetMapping(path="/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username, @PathVariable long id){
		return todoService.findById(id);
	}
	
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
		Todo todo = todoService.deleteById(id);
		if(todo !=null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
	
	@PutMapping("/users/{username}/todos/{id}")
		public ResponseEntity<Todo> updateTodo(@PathVariable String username, 
				@PathVariable long id,
				@RequestBody Todo todo){
			Todo todoUpdated =todoService.save(todo);
			return new ResponseEntity<Todo>(todo, HttpStatus.OK);
		}
	
	@PostMapping("/users/{username}/todos")
	public ResponseEntity<Todo> createTodo(@PathVariable String username, 
			
			@RequestBody Todo todo){
		Todo todoCreated =todoService.save(todo);
		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
	}
	
	

}
