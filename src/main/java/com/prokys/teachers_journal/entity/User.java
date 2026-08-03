package com.prokys.teachers_journal.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User {

    @GeneratedValue
    @Id
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String login;

}
