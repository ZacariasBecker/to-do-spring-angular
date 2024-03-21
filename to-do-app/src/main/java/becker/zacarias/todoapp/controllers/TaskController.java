package becker.zacarias.todoapp.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import becker.zacarias.todoapp.models.TaskRequestDTO;
import becker.zacarias.todoapp.models.TaskResponseDTO;
import becker.zacarias.todoapp.repositories.TaskRepository;

@RestController
@RequestMapping("task")
public class TaskController {

	@Autowired
	private TaskRepository taskRepository;

	@GetMapping
	public ResponseEntity<List<TaskResponseDTO>> getAll() {
		List<TaskResponseDTO> tasks = new ArrayList<>();
		tasks = taskRepository.findAll().stream().map(TaskResponseDTO::new).toList();
		return new ResponseEntity<List<TaskResponseDTO>>(tasks, HttpStatus.OK);
	}

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

	@PostMapping
	public ResponseEntity<TaskResponseDTO> save(@RequestBody TaskRequestDTO newData) {

	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Optional<TaskResponseDTO>> deteleById(@PathVariable Integer id) {

	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<TaskResponseDTO> update(@PathVariable Integer id, @RequestBody TaskRequestDTO newData) {

	}
}
