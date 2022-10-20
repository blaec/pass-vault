package com.blaec.passvault.model.response;

import lombok.Getter;

@Getter
public class Response {
    private final boolean isSuccess;
    private final String message;

    private Response(Builder builder) {
        this.isSuccess = builder.isSuccess;
        this.message = builder.message.toString();
    }

    public static class Builder {
        private boolean isSuccess = true;
        private final StringBuilder message = new StringBuilder();

        private Builder() {
        }

        public static Builder create() {
            return new Builder();
        }


        public Builder setSuccess(String message) {
            this.message.append(message);
            this.isSuccess = true;
            return this;
        }

        public Builder setFailure (String message) {
            this.message.append(message);
            this.isSuccess = false;
            return this;
        }

        public Builder updateMessage(String message, boolean isSuccess) {
            this.message.append(message);
            this.isSuccess = this.isSuccess && isSuccess;
            return  this;
        }

        public Response build() {
            return new Response(this);
        }
    }
}
