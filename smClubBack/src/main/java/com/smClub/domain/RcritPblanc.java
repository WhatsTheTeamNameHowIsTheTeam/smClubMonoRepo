
package com.smClub.domain;

public class RcritPblanc {
    private String notificationNumber;
    private Club club;
    private UserInfo writer;
    private String subject;
    private String Content;
    private String img;
    private int memberCnt;
    private int views;
    private boolean RCRIT;
    private String RCRITBeginDate;
    private String RCRITEndDate;
    private String pullupDate;
    private String createDate;
    private String updateDate;

    public RcritPblanc() {
    }

    public String getNotificationNumber() {
        return this.notificationNumber;
    }

    public void setNotificationNumber(String notificationNumber) {
        this.notificationNumber = notificationNumber;
    }

    public Club getClub() {
        return this.club;
    }

    public void setClub(Club club) {
        this.club = club;
    }

    public UserInfo getWriter() {
        return this.writer;
    }

    public void setWriter(UserInfo writer) {
        this.writer = writer;
    }

    public String getSubject() {
        return this.subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getContent() {
        return this.Content;
    }

    public void setContent(String content) {
        this.Content = content;
    }

    public String getImg() {
        return this.img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public int getMemberCnt() {
        return this.memberCnt;
    }

    public void setMemberCnt(int memberCnt) {
        this.memberCnt = memberCnt;
    }

    public int getViews() {
        return this.views;
    }

    public void setViews(int views) {
        this.views = views;
    }

    public boolean isRCRIT() {
        return this.RCRIT;
    }

    public void setRCRIT(boolean rCRIT) {
        this.RCRIT = rCRIT;
    }

    public String getRCRITBeginDate() {
        return this.RCRITBeginDate;
    }

    public void setRCRITBeginDate(String rCRITBeginDate) {
        this.RCRITBeginDate = rCRITBeginDate;
    }

    public String getRCRITEndDate() {
        return this.RCRITEndDate;
    }

    public void setRCRITEndDate(String rCRITEndDate) {
        this.RCRITEndDate = rCRITEndDate;
    }

    public String getPullupDate() {
        return this.pullupDate;
    }

    public void setPullupDate(String pullupDate) {
        this.pullupDate = pullupDate;
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
