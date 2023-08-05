
package com.smClub.domain;

public class Club {
    private String clubId;
    private UserInfo managerStudentInfo;
    private String clubName;
    private String img;
    private String category;
    private int maxMemberCnt;
    private String introContent;
    private boolean excellence;
    private int excellenceCnt;
    private String createDate;
    private String updateDate;

    public Club() {
    }

    public String getClubId() {
        return this.clubId;
    }

    public void setClubId(String clubId) {
        this.clubId = clubId;
    }

    public UserInfo getManagerStudentInfo() {
        return this.managerStudentInfo;
    }

    public void setManagerStudentInfo(UserInfo managerStudentInfo) {
        this.managerStudentInfo = managerStudentInfo;
    }

    public String getClubName() {
        return this.clubName;
    }

    public void setClubName(String clubName) {
        this.clubName = clubName;
    }

    public String getImg() {
        return this.img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getCategory() {
        return this.category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getMaxMemberCnt() {
        return this.maxMemberCnt;
    }

    public void setMaxMemberCnt(int maxMemberCnt) {
        this.maxMemberCnt = maxMemberCnt;
    }

    public String getIntroContent() {
        return this.introContent;
    }

    public void setIntroContent(String introContent) {
        this.introContent = introContent;
    }

    public boolean isExcellence() {
        return this.excellence;
    }

    public void setExcellence(boolean excellence) {
        this.excellence = excellence;
    }

    public int getExcellenceCnt() {
        return this.excellenceCnt;
    }

    public void setExcellenceCnt(int excellenceCnt) {
        this.excellenceCnt = excellenceCnt;
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
