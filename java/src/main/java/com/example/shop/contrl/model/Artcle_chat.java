package com.example.shop.contrl.model;

public class Artcle_chat {
    private int id;
    private int annid;
    private int praisenum;
    private int candelete;

    public int getPraisenum() {
        return praisenum;
    }

    public void setPraisenum(int praisenum) {
        this.praisenum = praisenum;
    }

    public int getCandelete() {
        return candelete;
    }

    public void setCandelete(int candelete) {
        this.candelete = candelete;
    }

    public int getParentid() {
        return parentid;
    }

    public void setParentid(int parentid) {
        this.parentid = parentid;
    }

    private int parentid;
    private String commenttime;
    private String firstnickname;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAnnid() {
        return annid;
    }

    public void setAnnid(int annid) {
        this.annid = annid;
    }



    public String getCommenttime() {
        return commenttime;
    }

    public void setCommenttime(String commenttime) {
        this.commenttime = commenttime;
    }

    public String getFirstnickname() {
        return firstnickname;
    }

    public void setFirstnickname(String firstnickname) {
        this.firstnickname = firstnickname;
    }

    public String getIspraise() {
        return ispraise;
    }

    public void setIspraise(String ispraise) {
        this.ispraise = ispraise;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getHeadimg() {
        return headimg;
    }

    public void setHeadimg(String headimg) {
        this.headimg = headimg;
    }

    public String getSecondnickname() {
        return secondnickname;
    }

    public void setSecondnickname(String secondnickname) {
        this.secondnickname = secondnickname;
    }

    private String ispraise;
    private String comment;
    private String headimg;
    private String secondnickname;


}
