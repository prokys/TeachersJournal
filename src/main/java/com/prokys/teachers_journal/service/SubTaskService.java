package com.prokys.teachers_journal.service;

import com.prokys.teachers_journal.entity.SubTask;
import com.prokys.teachers_journal.repository.SubTaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubTaskService {

    private final SubTaskRepository subTaskRepository;

    public SubTaskService(SubTaskRepository subTaskRepository) {
        this.subTaskRepository = subTaskRepository;
    }

    public List<SubTask> getAllUsers() {
        return subTaskRepository.findAll();
    }
}
