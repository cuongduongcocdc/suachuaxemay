package com.grokonez.jwtauthentication.controller;

import com.grokonez.jwtauthentication.model.Task;
import com.grokonez.jwtauthentication.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/task")
public class TaskController {

    @Autowired
    TaskRepository taskRepository;

    @GetMapping("/getaLl")
    public List<Task> getAllTask() {

        List<Task> tasks = taskRepository.findAll();
        return tasks;
    }
}
