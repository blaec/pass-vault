package com.blaec.passvault.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.io.Serializable;

@AllArgsConstructor
@Getter
public class JwtResponse implements Serializable {
	private final String token;
	private final boolean isProd;
}