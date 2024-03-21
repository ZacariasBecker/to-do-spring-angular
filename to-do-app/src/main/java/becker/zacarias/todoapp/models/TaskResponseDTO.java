package becker.zacarias.todoapp.models;

public record TaskResponseDTO(String id, String name, String description, String openedDate, String closedDate,
		Boolean completed) {
	public TaskResponseDTO(Task task) {
		this(task.getId(), task.getName(), task.getDescription(), task.getOpenedDate(), task.getClosedDate(),
				task.getCompleted());
	}
}
