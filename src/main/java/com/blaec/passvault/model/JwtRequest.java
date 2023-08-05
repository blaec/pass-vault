package com.blaec.passvault.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@NoArgsConstructor //need default constructor for JSON Parsing
@AllArgsConstructor
@Getter
@Setter
public class JwtRequest implements Serializable {
	private String username;
	private String password;
}