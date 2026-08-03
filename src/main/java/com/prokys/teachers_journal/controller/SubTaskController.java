package com.prokys.teachers_journal.controller;

import com.prokys.teachers_journal.entity.SubTask;
import com.prokys.teachers_journal.service.SubTaskService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/subtasks")
public class SubTaskController {

    private final SubTaskService subTaskService;

    public SubTaskController(SubTaskService subTaskService) {
        this.subTaskService = subTaskService;
    }

    @GetMapping
    public List<SubTask> getUsers() {
        return subTaskService.getAllUsers();
    }
}
