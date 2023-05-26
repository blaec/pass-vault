SSL certification installation (required for copy to clipboard):

1. Install Chocolatey (used cmd option)
[link](https://docs.chocolatey.org/en-us/choco/setup#non-administrative-install)
2. Install mkcert
3. Create locally trusted CA + generate SSL certificate
4. React - follow [link](https://blog.bitsrc.io/using-https-for-local-development-for-react-angular-and-node-fdfaf69693cd)

   a. Update `package.json` and define path to certificate

   b. Probably it is optional create .env file and put in it `HTTPS=true`
5. Java [link](https://meticulousengineer.com/how-to-configure-spring-boot-with-pem-certificates-for-tls-ssl-communication)

   a. Update `application.yaml` file
```yaml
server:
  ssl:
    certificate-private-key: <path_to_file>/privkey.pem
    certificate: <path_to_file>/fullchain.pem
```