package com.prokys.teachers_journal.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.OffsetDateTime;

@Entity
@Getter
@Setter
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String description;
    private OffsetDateTime deadline;
    private String priority;
    private String status;
    private OffsetDateTime createdAt;
    private OffsetDateTime updatedAt;
    private long userId;
    private long classId;
    private long subjectId;

}
