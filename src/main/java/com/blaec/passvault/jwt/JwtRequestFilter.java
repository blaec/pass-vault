package com.blaec.passvault.jwt;

import com.blaec.passvault.service.JwtUserDetailsService;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.AllArgsConstructor;
import lombok.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@AllArgsConstructor
public class JwtRequestFilter extends OncePerRequestFilter {
	private final JwtUserDetailsService jwtUserDetailsService;
	private final JwtUtil jwtUtil;

	@Override
	protected void doFilterInternal(HttpServletRequest request,
									@NonNull HttpServletResponse response,
									@NonNull FilterChain chain) throws ServletException, IOException {

		final String requestTokenHeader = request.getHeader("Authorization");

		String username = null;
		String jwt = null;
		final String TOKEN_PREFIX = "Bearer ";
		boolean hasJwt = requestTokenHeader != null
				&& requestTokenHeader.startsWith(TOKEN_PREFIX);
		if (hasJwt) {
			jwt = requestTokenHeader.substring(TOKEN_PREFIX.length());
			try {
				username = jwtUtil.getUsernameFromToken(jwt);
			} catch (IllegalArgumentException e) {
				System.out.println("Unable to get JWT");
			} catch (ExpiredJwtException e) {
				System.out.println("JWT has expired");
			}
		} else {
			logger.warn(String.format("JWT does not begin with %sString", TOKEN_PREFIX));
		}

		//Once we get the token validate it.
		SecurityContext securityContext = SecurityContextHolder.getContext();
		boolean canAuthenticateUser = username != null
				&& securityContext.getAuthentication() == null;
		if (canAuthenticateUser) {
			UserDetails userDetails = this.jwtUserDetailsService.loadUserByUsername(username);

			// if token is valid configure Spring Security to manually set authentication
			if (jwtUtil.isTokenValid(jwt, userDetails)) {
				UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
						UsernamePasswordAuthenticationToken.authenticated(userDetails, null, userDetails.getAuthorities());
				usernamePasswordAuthenticationToken
						.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				// After setting the Authentication in the context, we specify
				// that the current user is authenticated. So it passes the Spring Security Configurations successfully.
				securityContext.setAuthentication(usernamePasswordAuthenticationToken);
			}
		}
		chain.doFilter(request, response);
	}
}
