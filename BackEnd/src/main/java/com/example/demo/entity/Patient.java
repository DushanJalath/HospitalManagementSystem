package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Patient {

    public void setId(String id) {
        this.id = id;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public void setGardienName(String gardienName) {
        this.gardienName = gardienName;
    }

    public void setGardienContact(String gardienContact) {
        this.gardienContact = gardienContact;
    }

    @Id
    private String id;
    private String password;
    private String name;
    private String contact;
    private String gardienName;
    private String gardienContact;

}
