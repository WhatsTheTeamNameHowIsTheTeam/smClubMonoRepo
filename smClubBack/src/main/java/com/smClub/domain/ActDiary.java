
package com.smClub.domain;

public class ActDiary {
    private String actDiaryId;
    private Club club;
    private UserInfo writer;
    private String subject;
    private String content;
    private String img;
    private int memberCnt;
    private boolean viewChk;
    private String actBeginDate;
    private String actEndDate;
    private String createDate;
    private String updateDate;

    public ActDiary() {
    }

    public String getActDiaryId() {
        return this.actDiaryId;
    }

    public void setActDiaryId(String actDiaryId) {
        this.actDiaryId = actDiaryId;
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
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
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

    public boolean isViewChk() {
        return this.viewChk;
    }

    public void setViewChk(boolean viewChk) {
        this.viewChk = viewChk;
    }

    public String getActBeginDate() {
        return this.actBeginDate;
    }

    public void setActBeginDate(String actBeginDate) {
        this.actBeginDate = actBeginDate;
    }

    public String getActEndDate() {
        return this.actEndDate;
    }

    public void setActEndDate(String actEndDate) {
        this.actEndDate = actEndDate;
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
