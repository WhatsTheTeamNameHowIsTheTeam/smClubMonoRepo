package com.smClub.exception;

public class ClubNotFoundException extends RuntimeException{
    public ClubNotFoundException(){
        super("가입 된 클럽이 없음");
    }

    ClubNotFoundException(String message){
        super(message);
    }
}
