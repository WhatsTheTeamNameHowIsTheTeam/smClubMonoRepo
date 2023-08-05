
package com.smClub.domain;

public class Reqstdoc {
    private int qestionNumber;
    private RcritPblanc recruitment;
    private Club club;
    private String qestion;

    public Reqstdoc() {
    }

    public int getQestionNumber() {
        return this.qestionNumber;
    }

    public void setQestionNumber(int qestionNumber) {
        this.qestionNumber = qestionNumber;
    }

    public RcritPblanc getRecruitment() {
        return this.recruitment;
    }

    public void setRecruitment(RcritPblanc recruitment) {
        this.recruitment = recruitment;
    }

    public Club getClub() {
        return this.club;
    }

    public void setClub(Club club) {
        this.club = club;
    }

    public String getQestion() {
        return this.qestion;
    }

    public void setQestion(String qestion) {
        this.qestion = qestion;
    }
}
