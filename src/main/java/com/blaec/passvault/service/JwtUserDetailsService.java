package com.blaec.passvault.service;

import com.blaec.passvault.configs.Jwt;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@AllArgsConstructor
public class JwtUserDetailsService implements UserDetailsService {
	private final Jwt jwt;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		String secret = jwt.getSecret();
		String password = jwt.getPassword();

		if (secret.equals(username)) {
			return new User(secret, password, new ArrayList<>());
		} else {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
	}
}