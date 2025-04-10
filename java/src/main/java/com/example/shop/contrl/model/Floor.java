package com.example.shop.contrl.model;

public class Floor {
    private int id;
    private String datetime;
    private String title;

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }

    private String keyword;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getTrans_pic() {
        return trans_pic;
    }

    public void setTrans_pic(String trans_pic) {
        this.trans_pic = trans_pic;
    }

    private String detail;
    private String submitbody;
    private String status;
    private String trans_pic;
}
