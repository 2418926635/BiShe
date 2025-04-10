package com.example.shop.contrl.model;

import java.util.List;

public class Artcle {
    private int id;
    private String descstr;
    private String status;
    private List ids;

    public List getIds() {
        return ids;
    }

    public void setIds(List ids) {
        this.ids = ids;
    }

    private String goodstatus;

    public String getGoodstatus() {
        return goodstatus;
    }

    public void setGoodstatus(String goodstatus) {
        this.goodstatus = goodstatus;
    }

    public String getTapstr() {
        return tapstr;
    }

    public void setTapstr(String tapstr) {
        this.tapstr = tapstr;
    }

    private String tapstr;

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public String getTypetext() {
        return typetext;
    }

    public void setTypetext(String typetext) {
        this.typetext = typetext;
    }

    private int userid;

    private String typetext;

    private String keyword;

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescstr() {
        return descstr;
    }

    public void setDescstr(String descstr) {
        this.descstr = descstr;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public String getTrans_pic() {
        return trans_pic;
    }

    public void setTrans_pic(String trans_pic) {
        this.trans_pic = trans_pic;
    }

    public String getDatetime() {
        return datetime;
    }

    public void setDatetime(String datetime) {
        this.datetime = datetime;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUsericon() {
        return usericon;
    }

    public void setUsericon(String usericon) {
        this.usericon = usericon;
    }

    private String detail;
    private String trans_pic;


    private String datetime;
    private String username;
    private String usericon;
}
