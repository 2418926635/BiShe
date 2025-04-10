package com.example.shop.contrl.model;

public class News {
    private int id;
    private int status;
    private String datetime;

    private String fee;
    private String mdd;
    private String jtfs;

    public String getFee() {
        return fee;
    }

    public void setFee(String fee) {
        this.fee = fee;
    }

    public String getMdd() {
        return mdd;
    }

    public void setMdd(String mdd) {
        this.mdd = mdd;
    }

    public String getJtfs() {
        return jtfs;
    }

    public void setJtfs(String jtfs) {
        this.jtfs = jtfs;
    }

    public String getXingcheng() {
        return xingcheng;
    }

    public void setXingcheng(String xingcheng) {
        this.xingcheng = xingcheng;
    }

    public String getZhuyi() {
        return zhuyi;
    }

    public void setZhuyi(String zhuyi) {
        this.zhuyi = zhuyi;
    }

    private String xingcheng;
    private String zhuyi;



    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }

    private String keyword;
    private String title;
    private String detail;
    private String trans_pic;

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

    public String getTrans_pic() {
        return trans_pic;
    }

    public void setTrans_pic(String trans_pic) {
        this.trans_pic = trans_pic;
    }

    public String getSubmitbody() {
        return submitbody;
    }

    public void setSubmitbody(String submitbody) {
        this.submitbody = submitbody;
    }

    public String getKeywordstr() {
        return keywordstr;
    }

    public void setKeywordstr(String keywordstr) {
        this.keywordstr = keywordstr;
    }

    private String submitbody;
    private String keywordstr;

}
