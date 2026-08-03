package com.prokys.teachers_journal.repository;

import com.prokys.teachers_journal.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
