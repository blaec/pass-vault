package com.blaec.passvault.utils;

import lombok.experimental.UtilityClass;

import javax.crypto.Cipher;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;
import java.util.Base64;

/**
 * This util allows to encrypt and decrypt plain text, but it is resource consuming
 */
@UtilityClass
public class AESUtils {
    private static final Cipher cipher;

    static {
        try {
            cipher = Cipher.getInstance("AES");
        } catch (NoSuchAlgorithmException | NoSuchPaddingException e) {
            throw new RuntimeException(e);
        }
    }

//    public static void main(String[] args) throws Exception {
//        String plainText = "EP4J}v0vvgtkgF2hef#";
//        System.out.println("Plain Text Before Encryption: " + plainText);
//
//        String encryptedText = encrypt(plainText, "test", "1234");
//        System.out.println("Encrypted Text After Encryption: " + encryptedText);
//
//        String decryptedText = decrypt(encryptedText, "test", "1234");
//        System.out.println("Decrypted Text After Decryption: " + decryptedText);
//    }

    public static String encrypt(String plainText, String password, String salt) throws Exception {
        byte[] plainTextByte = plainText.getBytes();
        SecretKey secretKey = getKeyFromPassword(password, salt);
        cipher.init(Cipher.ENCRYPT_MODE, secretKey);
        byte[] encryptedByte = cipher.doFinal(plainTextByte);
        Base64.Encoder encoder = Base64.getEncoder();

        return encoder.encodeToString(encryptedByte);
    }

    public static String decrypt(String encryptedText, String password, String salt) throws Exception {
        Base64.Decoder decoder = Base64.getDecoder();
        byte[] encryptedTextByte = decoder.decode(encryptedText);
        SecretKey secretKey = getKeyFromPassword(password, salt);
        cipher.init(Cipher.DECRYPT_MODE, secretKey);
        byte[] decryptedByte = cipher.doFinal(encryptedTextByte);

        return new String(decryptedByte);
    }

    private static SecretKey getKeyFromPassword(String password, String salt) throws NoSuchAlgorithmException, InvalidKeySpecException {
        SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");
        KeySpec spec = new PBEKeySpec(password.toCharArray(), salt.getBytes(), 65536, 256);

        return new SecretKeySpec(factory.generateSecret(spec).getEncoded(), "AES");
    }
}
