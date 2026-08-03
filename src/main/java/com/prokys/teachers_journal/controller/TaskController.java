package com.prokys.teachers_journal.controller;

import com.prokys.teachers_journal.entity.Task;
import com.prokys.teachers_journal.service.TaskService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public List<Task> getUsers() {
        return taskService.getAllUsers();
    }
}
