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
	
	
	public String getActDiaryId() {
		return actDiaryId;
	}
	public void setActDiaryId(String actDiaryId) {
		this.actDiaryId = actDiaryId;
	}
	public Club getClub() {
		return club;
	}
	public void setClub(Club club) {
		this.club = club;
	}
	public UserInfo getWriter() {
		return writer;
	}
	public void setWriter(UserInfo writer) {
		this.writer = writer;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public int getMemberCnt() {
		return memberCnt;
	}
	public void setMemberCnt(int memberCnt) {
		this.memberCnt = memberCnt;
	}
	public boolean isViewChk() {
		return viewChk;
	}
	public void setViewChk(boolean viewChk) {
		this.viewChk = viewChk;
	}
	public String getActBeginDate() {
		return actBeginDate;
	}
	public void setActBeginDate(String actBeginDate) {
		this.actBeginDate = actBeginDate;
	}
	public String getActEndDate() {
		return actEndDate;
	}
	public void setActEndDate(String actEndDate) {
		this.actEndDate = actEndDate;
	}
	public String getCreateDate() {
		return createDate;
	}
	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}
	public String getUpdateDate() {
		return updateDate;
	}
	public void setUpdateDate(String updateDate) {
		this.updateDate = updateDate;
	}
	
	
	
}
