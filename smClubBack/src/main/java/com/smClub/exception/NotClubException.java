package com.smClub.exception;

public class NotClubException extends RuntimeException{
    public NotClubException(){
        super("가입 된 클럽이 없음");
    }

    NotClubException(String message){
        super(message);
    }
}
