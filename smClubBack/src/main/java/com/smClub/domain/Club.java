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
	
	
	public String getClubId() {
		return clubId;
	}
	public void setClubId(String clubId) {
		this.clubId = clubId;
	}
	public UserInfo getManagerStudentInfo() {
		return managerStudentInfo;
	}
	public void setManagerStudentInfo(UserInfo managerStudentInfo) {
		this.managerStudentInfo = managerStudentInfo;
	}
	public String getClubName() {
		return clubName;
	}
	public void setClubName(String clubName) {
		this.clubName = clubName;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public int getMaxMemberCnt() {
		return maxMemberCnt;
	}
	public void setMaxMemberCnt(int maxMemberCnt) {
		this.maxMemberCnt = maxMemberCnt;
	}
	public String getIntroContent() {
		return introContent;
	}
	public void setIntroContent(String introContent) {
		this.introContent = introContent;
	}
	public boolean isExcellence() {
		return excellence;
	}
	public void setExcellence(boolean excellence) {
		this.excellence = excellence;
	}
	public int getExcellenceCnt() {
		return excellenceCnt;
	}
	public void setExcellenceCnt(int excellenceCnt) {
		this.excellenceCnt = excellenceCnt;
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
