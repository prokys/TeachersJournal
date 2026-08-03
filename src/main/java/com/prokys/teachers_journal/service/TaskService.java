package com.prokys.teachers_journal.service;

import com.prokys.teachers_journal.entity.Task;
import com.prokys.teachers_journal.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getAllUsers() {
        return taskRepository.findAll();
    }
}
