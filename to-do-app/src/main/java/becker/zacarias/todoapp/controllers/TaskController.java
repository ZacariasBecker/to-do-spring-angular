package becker.zacarias.todoapp.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import becker.zacarias.todoapp.models.Task;
import becker.zacarias.todoapp.models.TaskRequestDTO;
import becker.zacarias.todoapp.models.TaskResponseDTO;
import becker.zacarias.todoapp.repositories.TaskRepository;

@RestController
@RequestMapping("task")
public class TaskController {

	@Autowired
	private TaskRepository taskRepository;

	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping
	public ResponseEntity<List<TaskResponseDTO>> getAll() {
		List<TaskResponseDTO> tasks = new ArrayList<>();
		tasks = taskRepository.findAll().stream().map(TaskResponseDTO::new).toList();
		return new ResponseEntity<List<TaskResponseDTO>>(tasks, HttpStatus.OK);
	}

	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping(path = "/{id}")
	public ResponseEntity<Optional<TaskResponseDTO>> getById(@PathVariable String id) {
		Optional<TaskResponseDTO> task;
		try {
			task = taskRepository.findById(id).map(TaskResponseDTO::new);
			return new ResponseEntity<Optional<TaskResponseDTO>>(task, HttpStatus.OK);
		} catch (NoSuchElementException nsee) {
			return new ResponseEntity<Optional<TaskResponseDTO>>(HttpStatus.NOT_FOUND);
		}
	}

	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping
	public ResponseEntity<TaskResponseDTO> save(@RequestBody TaskRequestDTO data) {
		Task taskData = new Task(data);
		taskRepository.save(taskData);
		return new ResponseEntity<TaskResponseDTO>(new TaskResponseDTO(taskData), HttpStatus.OK);
	}

	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Optional<TaskResponseDTO>> deteleById(@PathVariable String id) {
		try {
			taskRepository.deleteById(id);
			return new ResponseEntity<Optional<TaskResponseDTO>>(HttpStatus.OK);
		} catch (NoSuchElementException nsee) {
			return new ResponseEntity<Optional<TaskResponseDTO>>(HttpStatus.NOT_FOUND);
		}
	}

	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PutMapping(value = "/{id}")
	public ResponseEntity<TaskResponseDTO> update(@PathVariable String id, @RequestBody TaskRequestDTO newData) {
		return taskRepository.findById(id).map(task -> {
			task.setName(new Task(newData).getName());
			task.setDescription(new Task(newData).getDescription());
			task.setOpenedDate(new Task(newData).getOpenedDate());
			task.setClosedDate(new Task(newData).getClosedDate());
			task.setCompleted(new Task(newData).getCompleted());
			Task taskUpdated = taskRepository.save(task);
			return ResponseEntity.ok().body(new TaskResponseDTO(taskUpdated));
		}).orElse(ResponseEntity.notFound().build());
	}
}
