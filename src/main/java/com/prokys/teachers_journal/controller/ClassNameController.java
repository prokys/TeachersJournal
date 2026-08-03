package com.prokys.teachers_journal.controller;

import com.prokys.teachers_journal.entity.ClassName;
import com.prokys.teachers_journal.service.ClassNameService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/classnames")
public class ClassNameController {

    private final ClassNameService classNameService;

    public ClassNameController(ClassNameService classNameService) {
        this.classNameService = classNameService;
    }

    @GetMapping
    public List<ClassName> getUsers() {
        return classNameService.getAllUsers();
    }
}
