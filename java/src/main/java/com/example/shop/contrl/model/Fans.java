package com.example.shop.contrl.model;

public class Fans {
    private int id;
    private int userid;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public int getFansuserid() {
        return fansuserid;
    }

    public void setFansuserid(int fansuserid) {
        this.fansuserid = fansuserid;
    }

    public String getDatetime() {
        return datetime;
    }

    public void setDatetime(String datetime) {
        this.datetime = datetime;
    }

    private int fansuserid;
    private String datetime;

}
