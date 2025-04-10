package com.example.shop.contrl.model;

public class Announcement {
    private int id;
    private int status;

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    private int userid;
    private String datetime;

    private String detail2;
    private String detail3;
    private String detail4;
    private String tapstr;

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }

    private String keyword;


    public String getDetail2() {
        return detail2;
    }

    public void setDetail2(String detail2) {
        this.detail2 = detail2;
    }

    public String getDetail3() {
        return detail3;
    }

    public void setDetail3(String detail3) {
        this.detail3 = detail3;
    }

    public String getDetail4() {
        return detail4;
    }

    public void setDetail4(String detail4) {
        this.detail4 = detail4;
    }

    public String getTapstr() {
        return tapstr;
    }

    public void setTapstr(String tapstr) {
        this.tapstr = tapstr;
    }

    private String title;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getDatetime() {
        return datetime;
    }

    public void setDatetime(String datetime) {
        this.datetime = datetime;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public String getSubmitbody() {
        return submitbody;
    }

    public void setSubmitbody(String submitbody) {
        this.submitbody = submitbody;
    }

    public String getTrans_pic() {
        return trans_pic;
    }

    public void setTrans_pic(String trans_pic) {
        this.trans_pic = trans_pic;
    }

    private String detail;
    private String submitbody;
    private String trans_pic;
}

