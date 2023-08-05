
package com.smClub.domain;

public class UserInfo {
    private String studentId;
    private String userName;
    private String userId;
    private String userPw;
    private String img;
    private String major;
    private String phoneNumber;
    private String email;
    private int userAuthor;
    private boolean notification;
    private boolean userAgree;
    private String userAgreeDate;
    private String createDate;
    private String updateDate;

    public UserInfo() {
    }

    public String getStudentId() {
        return this.studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getUserName() {
        return this.userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserId() {
        return this.userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserPw() {
        return this.userPw;
    }

    public void setUserPw(String userPw) {
        this.userPw = userPw;
    }

    public String getImg() {
        return this.img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getMajor() {
        return this.major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public String getPhoneNumber() {
        return this.phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getUserAuthor() {
        return this.userAuthor;
    }

    public void setUserAuthor(int userAuthor) {
        this.userAuthor = userAuthor;
    }

    public boolean isNotification() {
        return this.notification;
    }

    public void setNotification(boolean notification) {
        this.notification = notification;
    }

    public boolean isUserAgree() {
        return this.userAgree;
    }

    public void setUserAgree(boolean userAgree) {
        this.userAgree = userAgree;
    }

    public String getUserAgreeDate() {
        return this.userAgreeDate;
    }

    public void setUserAgreeDate(String userAgreeDate) {
        this.userAgreeDate = userAgreeDate;
    }

    public String getCreateDate() {
        return this.createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    public String getUpdateDate() {
        return this.updateDate;
    }

    public void setUpdateDate(String updateDate) {
        this.updateDate = updateDate;
    }
}
