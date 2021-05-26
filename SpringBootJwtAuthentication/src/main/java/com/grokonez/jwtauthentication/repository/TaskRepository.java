package com.grokonez.jwtauthentication.repository;

import com.grokonez.jwtauthentication.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task,Long> {
}
