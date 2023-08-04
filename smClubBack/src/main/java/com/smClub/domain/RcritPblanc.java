package com.smClub.domain;

//모집공고
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
	public String getNotificationNumber() {
		return notificationNumber;
	}
	public void setNotificationNumber(String notificationNumber) {
		this.notificationNumber = notificationNumber;
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
		return Content;
	}
	public void setContent(String content) {
		Content = content;
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
	public int getViews() {
		return views;
	}
	public void setViews(int views) {
		this.views = views;
	}
	public boolean isRCRIT() {
		return RCRIT;
	}
	public void setRCRIT(boolean rCRIT) {
		RCRIT = rCRIT;
	}
	public String getRCRITBeginDate() {
		return RCRITBeginDate;
	}
	public void setRCRITBeginDate(String rCRITBeginDate) {
		RCRITBeginDate = rCRITBeginDate;
	}
	public String getRCRITEndDate() {
		return RCRITEndDate;
	}
	public void setRCRITEndDate(String rCRITEndDate) {
		RCRITEndDate = rCRITEndDate;
	}
	public String getPullupDate() {
		return pullupDate;
	}
	public void setPullupDate(String pullupDate) {
		this.pullupDate = pullupDate;
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
