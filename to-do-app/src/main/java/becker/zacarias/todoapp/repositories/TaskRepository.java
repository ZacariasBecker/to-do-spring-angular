package becker.zacarias.todoapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import becker.zacarias.todoapp.models.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, String> {

}
