package becker.zacarias.todoapp.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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

	}

	@GetMapping(path = "/{id}")
	public ResponseEntity<Optional<TaskResponseDTO>> getById(@PathVariable Integer id) {

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
