package com.example.shop.contrl.model;

public class Submitdata<datetime> {
    private int id;

    private int size;

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public int getCurrent() {
        return current;
    }

    public void setCurrent(int current) {
        this.current = current;
    }

    private int current;
    private String title;

    private double price;
    private int shuliang;

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getShuliang() {
        return shuliang;
    }

    public void setShuliang(int shuliang) {
        this.shuliang = shuliang;
    }

    public String getDatetime() {
        return datetime;
    }

    public void setDatetime(String datetime) {
        this.datetime = datetime;
    }

    private String datetime;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public String getTypetext() {
        return typetext;
    }

    public void setTypetext(String typetext) {
        this.typetext = typetext;
    }

    public String getFankui() {
        return fankui;
    }

    public void setFankui(String fankui) {
        this.fankui = fankui;
    }

    private String detail;
    private String submitbody;
    private String trans_pic;
    private String typetext;
    private String fankui;
}
