package becker.zacarias.todoapp.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	private String name;

	private String description;

	private String openedDate;

	private String closedDate;

	private Boolean completed;

	public Task(TaskRequestDTO data) {
		this.name = data.name();
		this.description = data.description();
		this.openedDate = data.openedDate();
		this.closedDate = data.closedDate();
		this.completed = data.completed();
	}

}
