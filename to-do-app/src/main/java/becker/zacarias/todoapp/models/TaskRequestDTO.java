package becker.zacarias.todoapp.models;

public record TaskRequestDTO(String name, String description, String openedDate, String closedDate, Boolean completed) {

}
