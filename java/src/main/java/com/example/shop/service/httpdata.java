package com.example.shop.service;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import com.example.shop.contrl.model.*;
import com.example.shop.contrl.model.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.stream.Stream;
import java.util.Collections;
import java.util.Arrays;

import java.util.*;

@RestController
public class httpdata {
    @Autowired
    JdbcTemplate jdbcTemplate;
    private Userdata userdata;
    private Floor floor;
    private Announcement announcement;

    private Collection collection;
    private Submitdata submitdata;

    private Operation operation;

    private Artcle_chat artcle_chat;
    private Artcle artcle;

    private Evaluate evaluate;

    private Gongsimsg gongsimsg;

    private Fans fans;

    private News news;
    private Question question;
    private Activity activity;
    private User_activity user_activity;

    private Chatlist chatlist;

    private Basemsg basemsg;


    // 人员相关
    @PostMapping("/api/addSysUser")
    public Object addSysUser(@RequestBody  Userdata userdata) {
        String trans_pic = userdata.getTrans_pic();
        String empNo = userdata.getEmpNo();
        String userName = userdata.getUserName();
        String email = userdata.getEmail();
        String password = userdata.getPassword();
        String mobile = userdata.getMobile();
        String remark = userdata.getRemark();
        String role = userdata.getRole();
        String tapstr = userdata.getTapstr();
        String taptext = userdata.getTaptext();
        int status = userdata.getStatus();
        int isadmin = userdata.getIsadmin();
        int sex = userdata.getSex();
        int nl = userdata.getNl();
        String stu_pic = userdata.getStu_pic();
        String school = userdata.getSchool();
        jdbcTemplate.update("insert into userdata(sex,nl,stu_pic,school,empNo,taptext,tapstr,trans_pic,userName,email,password,mobile,remark,role,status,isadmin) " +
                "values (?,?,?, ?,?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", sex,nl,stu_pic,school,empNo,taptext,tapstr,trans_pic,userName,email,password,mobile,remark,role,status,isadmin);
        return "ok";

    }


    @PostMapping("/api/updateSysUser")
    public Object updateSysUser(@RequestBody  Userdata userdata) {
        int id = userdata.getId();
        String empNo = userdata.getEmpNo();
        String trans_pic = userdata.getTrans_pic();
        String userName = userdata.getUserName();
        String email = userdata.getEmail();
        String mobile = userdata.getMobile();
        String remark = userdata.getRemark();
        String role = userdata.getRole();
        int status = userdata.getStatus();
        int isadmin = userdata.getIsadmin();
        int sex = userdata.getSex();
        int nl = userdata.getNl();
        String stu_pic = userdata.getStu_pic();
        String school = userdata.getSchool();

        String sql = "UPDATE userdata SET sex=?,nl=?,school=?,stu_pic=?,empNo=?,userName=?,email=?,mobile=?,remark=?,role=?,status=?,isadmin=?,trans_pic=? where id = ?";
        jdbcTemplate.update(sql, sex,nl,school,stu_pic,empNo,userName,email,mobile,remark,role,status,isadmin,trans_pic, id);

        return "ok";
    }





    @PostMapping("/api/updateSysUserext")
    public Object updateSysUserext(@RequestBody Userdata userdata) {
        this.userdata = userdata;
        int id = userdata.getId();
        String empNo = userdata.getEmpNo();
        String password = userdata.getPassword();
        String trans_pic = userdata.getTrans_pic();
        String userName = userdata.getUserName();
        String email = userdata.getEmail();
        String mobile = userdata.getMobile();
        String remark = userdata.getRemark();
        String role = userdata.getRole();
        String taptext = userdata.getTaptext();
        String tapstr = userdata.getTapstr();
        int status = userdata.getStatus();
        int isadmin = userdata.getIsadmin();

        String sql = "update userdata set empNo=?,userName=?,email=?,mobile=?,remark=?,role=?,status=?,isadmin=?,trans_pic=?,tapstr = ?,taptext = ? where id = "
                + id;
        Object[] objects = new Object[11];
        objects[0] = empNo;
        objects[1] = userName;
        objects[2] = email;
        objects[3] = mobile;
        objects[4] = remark;
        objects[5] = role;
        objects[6] = status;
        objects[7] = isadmin;
        objects[8] = trans_pic;
        objects[9] = tapstr;
        objects[10] = taptext;


        jdbcTemplate.update(sql, objects);
        return "ok";
    }

    @PostMapping("/api/userremove")
    public Object userremove(@RequestBody Userdata userdata) {
        this.userdata = userdata;
        int id = userdata.getId();
        String sql = "delete from userdata where id = " + id;
        jdbcTemplate.update(sql);
        return "ok";
    }




    @PostMapping("/api/userQueryList")
    public List<Map<String, Object>> userQueryList(@RequestBody Userdata userdata) {
        this.userdata = userdata;
        int status = userdata.getStatus();
        String sql = "select * from userdata where status = "
                + status;
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql);
        return list_maps;
    }

    @PostMapping("/api/userQueryListbyid")
    public List<Map<String, Object>> userQueryListbyid(@RequestBody Userdata userdata) {
        this.userdata = userdata;
        int id = userdata.getId();
        String sql = "select * from userdata where id = "
                + id;
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql);
        return list_maps;
    }





    // 用户编辑修改状态
    @PostMapping("/api/updateUserstatus")
    public Object updateUserstatus(@RequestBody Userdata userdata) {
        this.userdata = userdata;
        int id = userdata.getId();
        int status = userdata.getStatus();
        String sql = "update userdata set status=? where id = " + id;
        Object[] objects = new Object[1];
        objects[0] = status;
        jdbcTemplate.update(sql, objects);
        return "ok";
    }

    //自己信息修改
    @PostMapping("/api/updateSysUserbyme")
    public Object updateSysUserbyme(@RequestBody Userdata userdata) {
        this.userdata = userdata;
        int id = userdata.getId();
        String userName = userdata.getUserName();
        String email = userdata.getEmail();
        String mobile = userdata.getMobile();
        String sql = "update userdata set userName=?,email=?,mobile=? where id = "
                + id;
        Object[] objects = new Object[3];

        objects[0] = userName;
        objects[1] = email;
        objects[2] = mobile;

        jdbcTemplate.update(sql, objects);
        return "ok";
    }


    @PostMapping("/api/insertpingjia")
    public Object insertpingjia(@RequestBody Evaluate evaluate) {
        this.evaluate = evaluate;
        int userid = evaluate.getUserid();
        int annid = evaluate.getAnnid();
        int score = evaluate.getScore();

        jdbcTemplate.update("insert into evaluate(userid,annid,score) " +
                "values (?, ?, ?)", userid,annid,score);

        return "success";
    }


    @PostMapping("/api/pingjiaquery")
    public List<Map<String, Object>> pingjiaquery(@RequestBody Evaluate evaluate) {
        int userid = evaluate.getUserid();
        int annid = evaluate.getAnnid();
        String sql = "select * from evaluate where userid = ? and annid = ?";
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql, userid, annid);
        return list_maps;
    }


    @PostMapping("/api/pingjiaquerybyannid")
    public List<Map<String, Object>> pingjiaquerybyannid(@RequestBody Evaluate evaluate) {
        int annid = evaluate.getAnnid();
        String sql = "SELECT AVG(score) AS average_score FROM evaluate WHERE annid = ?";
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql, annid);
        return list_maps;
    }




    // 登录
    @PostMapping("/api/login")
    public List<Map<String, Object>> login(@RequestBody Userdata userdata) {
        this.userdata = userdata;
        String empNo = userdata.getEmpNo();
        String password = userdata.getPassword();
        String sql = "select  * from userdata where status = 0 and empNo = " + "'"
                + empNo + "' and password = '" + password + "'";
        System.out.println(sql);
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql);
        return list_maps;
    }

    // 修改用户密码
    @PostMapping("/api/resetPassword")
    public Object resetPassword(@RequestBody Userdata userdata) {
        this.userdata = userdata;
        int id = userdata.getId();
        String password = userdata.getPassword();
        String sql = "update userdata set password=? where id = " + id;
        Object[] objects = new Object[1];
        objects[0] = password;
        jdbcTemplate.update(sql, objects);
        return "ok";
    }

    //
    @PostMapping("/api/addfloor")
    public Object addfloor(@RequestBody Floor floor) {
        this.floor = floor;
        String datetime = floor.getDatetime();
        String title = floor.getTitle();
        String detail = floor.getDetail();
        String submitbody = floor.getSubmitbody();
         String status = floor.getStatus();
        String trans_pic = floor.getTrans_pic();
        jdbcTemplate.update("insert into floor(datetime,status,title,detail,submitbody,trans_pic)"
                + "values ('" + datetime + "', '" + status + "', '" + title + "', '" + detail + "', '" + submitbody + "','" + trans_pic + "')");
        return "ok";
    }

    @PostMapping("/api/updatafloor")
    public Object updatafloor(@RequestBody Floor floor) {
        this.floor = floor;
        int id = floor.getId();
        String title = floor.getTitle();
        String detail = floor.getDetail();
        String submitbody = floor.getSubmitbody();
        String status = floor.getStatus();
        String trans_pic = floor.getTrans_pic();
        String sql = "update floor set title=?,detail=?,submitbody=?,trans_pic=?,status=? where id = " + id;
        Object[] objects = new Object[5];
        objects[0] = title;
        objects[1] = detail;
        objects[2] = submitbody;
        objects[3] = trans_pic;
        objects[4] = status;
        jdbcTemplate.update(sql, objects);
        return "ok";
    }

    @PostMapping("/api/removefloor")
    public Object removefloor(@RequestBody Floor floor) {
        this.floor = floor;
        int id = floor.getId();
        String sql = "delete from floor where id = " + id;
        jdbcTemplate.update(sql);
        return "ok";
    }

    @PostMapping("/api/queryfloor")
    public List<Map<String, Object>> queryfloor(@RequestBody Floor floor) {
        this.floor = floor;
        String sql = "select * from floor";
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql);
        return list_maps;
    }

    @PostMapping("/api/queryfloorbyid")
    public List<Map<String, Object>> queryfloorbyid(@RequestBody Floor floor) {
        this.floor = floor;
        int id = floor.getId();
        String sql = "select * from floor where id = " + id;
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql);
        return list_maps;
    }


    //新增论坛
    @PostMapping("/api/addannouncement")
    public Object addannouncement(@RequestBody Announcement announcement) {
        this.announcement = announcement;
        // username,descstr, detail,trans_pic,datetime
        String datetime = announcement.getDatetime();
        String title = announcement.getTitle();
        String detail = announcement.getDetail();
        String trans_pic = announcement.getTrans_pic();
        String submitbody = announcement.getSubmitbody();
        String detail2 = announcement.getDetail2();
        String detail3 = announcement.getDetail3();
        String detail4 = announcement.getDetail4();
        String tapstr = announcement.getTapstr();
        jdbcTemplate.update("insert into announcement(datetime,detail2,detail3,detail4,tapstr,title, detail,trans_pic,submitbody)"
                + "values ('" + datetime + "', '" + detail2 + "', '" + detail3 + "', '" + detail4 + "', '" + tapstr + "', '" + title + "','" + detail + "','" + trans_pic + "','" + submitbody + "')");
        return "success";
    }

    @PostMapping("/api/updateannouncement")
    public Object updateannouncement(@RequestBody  Announcement announcement) {
        this.announcement = announcement;
        int id = announcement.getId();
        String datetime = announcement.getDatetime();
        String title = announcement.getTitle();
        String detail = announcement.getDetail();
        String trans_pic = announcement.getTrans_pic();
        String detail2 = announcement.getDetail2();
        String detail3 = announcement.getDetail3();
        String detail4 = announcement.getDetail4();
        String tapstr = announcement.getTapstr();
        String sql = "update announcement set datetime=?,title=?,detail=?,trans_pic=?,detail2=?,detail3=?,detail4=?,tapstr=? where id = " + id;
        Object[] objects = new Object[8];
        objects[0] = datetime;
        objects[1] = title;
        objects[2] = detail;
        objects[3] = trans_pic;
        objects[4] = detail2;
        objects[5] = detail3;
        objects[6] = detail4;
        objects[7] = tapstr;


        jdbcTemplate.update(sql, objects);
        return "ok";
    }

    @PostMapping("/api/removeannouncement")
    public Object removeannouncement(@RequestBody  Announcement announcement) {
        this.announcement = announcement;
        int id = announcement.getId();
        String sql = "delete from announcement where id = " + id;
        jdbcTemplate.update(sql);
        return "ok";
    }




    @PostMapping("/api/queryannouncement")
    public List<Map<String, Object>> queryannouncement(@RequestBody Announcement announcement) {
        String keyword = announcement.getKeyword();
        String sql = "select * from announcement where id > 0 ";
        List<Object> params = new ArrayList<>();

        if (keyword != null && !keyword.isEmpty()) {
            sql += " and title LIKE ?";
            params.add("%" + keyword + "%");
        }

        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql, params.toArray());
        return list_maps;
    }

    @PostMapping("/api/queryannouncementbyuser")
    public List<Map<String, Object>> queryannouncementbyuser(@RequestBody Announcement announcement) {
        String submitbody = announcement.getSubmitbody();
        String sql = "select * from announcement where id > 0 ";
        List<Object> params = new ArrayList<>();

        if (submitbody != null && !submitbody.isEmpty()) {
            sql += " and submitbody = ?";
            params.add(submitbody);
        }

        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql, params.toArray());
        return list_maps;
    }

    //查询论坛
    @PostMapping("/api/queryannouncementbyid")
    public List<Map<String, Object>> queryannouncementbyid(@RequestBody Announcement announcement) {
        this.announcement = announcement;
        int id = announcement.getId();
        String sql = "select  * from announcement where id = " + id;
        System.out.println(sql);
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql);
        return list_maps;
    }

    //用户端查询论坛
    @PostMapping("/api/queryannouncementuser")
    public List<Map<String, Object>> queryannouncementuser(@RequestBody Announcement announcement) {
        this.announcement = announcement;
        int userid = announcement.getUserid();
        String sql = "select announcement.id,announcement.datetime,announcement.title,announcement.detail,announcement.submitbody,announcement.trans_pic,collection.userid from announcement left outer join collection on announcement.id=collection.shiwuid and collection.userid = " + userid;
        System.out.println(sql);
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql);
        return list_maps;
    }


    //留言意见反馈
    @PostMapping("/api/insertsubmitdata")
    public Object insertsubmitdata(@RequestBody  Submitdata submitdata) {
        this.submitdata = submitdata;
        String title = submitdata.getTitle();
        String detail = submitdata.getDetail();
        String submitbody = submitdata.getSubmitbody();
        String trans_pic = submitdata.getTrans_pic();
        String typetext = submitdata.getTypetext();
        String datetime = submitdata.getDatetime();
        jdbcTemplate.update("insert into submitdata(title,detail, submitbody,trans_pic,typetext,datetime) "
                + " values ('" + title + "', '" + detail + "','" + submitbody + "','" + trans_pic + "','" + typetext + "','" + datetime + "')");
        return "success";
    }

    @PostMapping("/api/insertsubmitdataext")
    public Object insertsubmitdataext(@RequestBody Submitdata submitdata) {
        String title = submitdata.getTitle();
        String detail = submitdata.getDetail();
        String submitbody = submitdata.getSubmitbody();
        String trans_pic = submitdata.getTrans_pic();
        String typetext = submitdata.getTypetext();
        String datetime = submitdata.getDatetime();
        Double price = submitdata.getPrice();
        int shuliang = submitdata.getShuliang();

        jdbcTemplate.update("insert into submitdata(price,shuliang,title, detail, submitbody, trans_pic, typetext, datetime) " +
                "values (?, ?, ?, ?, ?, ?, ?, ?)", price,shuliang,title, detail, submitbody, trans_pic, typetext, datetime);

        return "success";
    }

    @PostMapping("/api/updatesubmitdataext")
    public Object updatesubmitdataext(@RequestBody Submitdata submitdata) {
        int id = submitdata.getId();
        String title = submitdata.getTitle();
        String detail = submitdata.getDetail();
        String submitbody = submitdata.getSubmitbody();
        String trans_pic = submitdata.getTrans_pic();
        String typetext = submitdata.getTypetext();
        String datetime = submitdata.getDatetime();
        Double price = submitdata.getPrice();
        int shuliang = submitdata.getShuliang();
        String sql = "update submitdata set title=?, detail=?, shuliang=?, price=? where id=?";
        jdbcTemplate.update(sql, title, detail,detail,price, id);

        return "ok";
    }




    @PostMapping("/api/fankuiremoveext")
    public Object fankuiremoveext(@RequestBody Submitdata submitdata) {
        int id = submitdata.getId();
        String sql = "delete from submitdata where id = ?";
        jdbcTemplate.update(sql, id);
        return "ok";
    }

    @PostMapping("/api/fankuiqueryext")
    public List<Map<String, Object>> fankuiqueryext(@RequestBody Submitdata submitdata) {
        int id = submitdata.getId();
        String title = submitdata.getTitle();
        String sql = "select * from submitdata where id = ? and title = ?";
        System.out.println(sql);
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql, id, title);
        return list_maps;
    }

    @PostMapping("/api/fankuiquerylikeext")
    public List<Map<String, Object>> fankuiquerylikeext(@RequestBody Submitdata submitdata) {
        int id = submitdata.getId();
        String title = submitdata.getTitle();
        String sql = "select * from submitdata where id = ? and title LIKE ?";
        System.out.println(sql);
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql, id, "%" + title + "%");
        return list_maps;
    }




    @PostMapping("/api/insertbasemsg")
    public Object insertbasemsg(@RequestBody Basemsg basemsg) {
        int userid = basemsg.getUserid();
        String trans_pic = basemsg.getTrans_pic();
        String result1 = basemsg.getResult1();
        String result2 = basemsg.getResult2();
        String result3 = basemsg.getResult3();
        String result4 = basemsg.getResult4();
        String result5 = basemsg.getResult5();
        String result6 = basemsg.getResult6();
        String result7 = basemsg.getResult7();
        String result8 = basemsg.getResult8();
        String result9 = basemsg.getResult9();
        String result10 = basemsg.getResult10();
        String datetime = basemsg.getDatetime();

        jdbcTemplate.update("insert into basemsg(trans_pic,userid,datetime,result1, result2, result3, result4, result5, result6, result7, result8, result9, result10) " +
                "values (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", trans_pic,userid,datetime,result1, result2, result3, result4, result5, result6, result7, result8, result9, result10);

        return "success";
    }

    @PostMapping("/api/updatebasemsg")
    public Object updatebasemsg(@RequestBody Basemsg basemsg) {
        int id = basemsg.getId();
        int userid = basemsg.getUserid();
        String trans_pic = basemsg.getTrans_pic();
        String result1 = basemsg.getResult1();
        String result2 = basemsg.getResult2();
        String result3 = basemsg.getResult3();
        String result4 = basemsg.getResult4();
        String result5 = basemsg.getResult5();
        String result6 = basemsg.getResult6();
        String result7 = basemsg.getResult7();
        String result8 = basemsg.getResult8();
        String result9 = basemsg.getResult9();
        String result10 = basemsg.getResult10();
        String sql = "update basemsg set trans_pic=?, result1=?, result2=?, result3=?, result4=?, result5=?, result6=?, result7=?, result8=?, result9=?, result10=? where id=?";
        jdbcTemplate.update(sql,trans_pic, result1, result2, result3, result4, result5, result6, result7, result8, result9, result10, id);

        return "ok";
    }

    @PostMapping("/api/updatefkbasemsg")
    public Object updatefkbasemsg(@RequestBody Basemsg basemsg) {
        int id = basemsg.getId();
        String result10 = basemsg.getResult10();
        String sql = "update basemsg set result10=? where id=?";
        jdbcTemplate.update(sql,result10, id);

        return "ok";
    }

    @PostMapping("/api/querybasemsg")
    public List<Map<String, Object>> querybasemsg(@RequestBody Basemsg basemsg) {
        String keyword = basemsg.getKeyword();
        String result1 = basemsg.getResult1();
        String result3 = basemsg.getResult3();
        String result4 = basemsg.getResult4();
        int userid = basemsg.getUserid();
        String sql = "select a.*,b.userName from basemsg a left join userdata b on a.userid = b.id where a.id > 0 ";
        List<Object> params = new ArrayList<>();
        if (keyword != null && !keyword.isEmpty()) {
            sql += " and a.result2 LIKE ?";
            params.add("%" + keyword + "%");
        }

        if (result3 != null && !result3.isEmpty()) {
            sql += " and a.result3 LIKE ?";
            params.add("%" + result3 + "%");
        }

        if (result4 != null && !result4.isEmpty()) {
            sql += " and a.result4 LIKE ?";
            params.add("%" + result4 + "%");
        }


//        if (!typetext.equals("全部帖子") &&(typetext != null && !typetext.isEmpty()) ) {
//            sql += " and typetext = ?";
//            params.add(typetext);
//        }
        if (result1 != null && !result1.isEmpty()) {
            sql += " and a.result1 = ?";
            params.add(result1);
        }
        if (userid != 0) {
            sql += " and a.userid = ?";
            params.add(userid);
        }

        sql += " ORDER BY a.datetime DESC";

        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql, params.toArray());
        return list_maps;
    }


    @PostMapping("/api/updatabasemsg")
    public Object updatabasemsg(@RequestBody Basemsg basemsg) {
        int id = basemsg.getId();
        String result10 = basemsg.getResult10();
        String sql = "update basemsg set result10=? where id = " + id;
        Object[] objects = new Object[1];
        objects[0] = result10;
        jdbcTemplate.update(sql, objects);
        return "success";
    }

    @PostMapping("/api/basemsgremove")
    public Object basemsgremove(@RequestBody Basemsg basemsg) {
        int id = basemsg.getId();
        String sql = "delete from basemsg where id = " + id;
        jdbcTemplate.update(sql);
        return "ok";
    }

    @PostMapping("/api/fankuiquerymoreeext")
    public List<Map<String, Object>> fankuiquerymoreeext(@RequestBody Submitdata submitdata) {
        String title = submitdata.getTitle();
        String detail = submitdata.getDetail();
        String sql = "select * from submitdata where id > 0 ";
        List<Object> params = new ArrayList<>();

        if (title != null && !title.isEmpty()) {
            sql += " and title = ?";
            params.add(title);
        }

        if (detail != null && !detail.isEmpty()) {
            sql += " and detail LIKE ?";
            params.add("%" + detail + "%");
        }

        sql += " ORDER BY datetime DESC";

        System.out.println(sql);
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql, params.toArray());
        return list_maps;
    }


    @PostMapping("/api/fankuiqueryfenyeext")
    public Map<String, Object> fankuiqueryfenyeext(@RequestBody Submitdata submitdata) {
        String title = submitdata.getTitle();
        String detail = submitdata.getDetail();
        int current = submitdata.getCurrent();
        int size = submitdata.getSize();
        int countdata = (current - 1) * size;

        // 查询总记录数
        String countSql = "SELECT COUNT(*) AS total FROM submitdata WHERE id > 0";
        List<Object> countParams = new ArrayList<>();
        if (title != null && !title.isEmpty()) {
            countSql += " AND title = ?";
            countParams.add(title);
        }
        if (detail != null && !detail.isEmpty()) {
            countSql += " AND detail LIKE ?";
            countParams.add("%" + detail + "%");
        }
        int total = jdbcTemplate.queryForObject(countSql, countParams.toArray(), Integer.class);

        // 查询分页数据
        String dataSql = "SELECT * FROM submitdata WHERE id > 0";
        List<Object> dataParams = new ArrayList<>();
        if (title != null && !title.isEmpty()) {
            dataSql += " AND title = ?";
            dataParams.add(title);
        }
        if (detail != null && !detail.isEmpty()) {
            dataSql += " AND detail LIKE ?";
            dataParams.add("%" + detail + "%");
        }
        dataSql += " LIMIT ?, ?";
        dataParams.add(countdata);
        dataParams.add(size);
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(dataSql, dataParams.toArray());

        // 构建结果对象，包含总记录数和分页数据
        Map<String, Object> result = new HashMap<>();
        result.put("total", total);
        result.put("data", list_maps);
        return result;
    }


    // 修改反馈意见
    @PostMapping("/api/updatasubmitdata")
    public Object updatasubmitdata(@RequestBody Submitdata submitdata) {
        this.submitdata = submitdata;
        int id = submitdata.getId();
        String fankui = submitdata.getFankui();
        String sql = "update submitdata set fankui=? where id = " + id;
        Object[] objects = new Object[1];
        objects[0] = fankui;
        jdbcTemplate.update(sql, objects);
        return "success";
    }

    @PostMapping("/api/fankuiremove")
    public Object fankuiremove(@RequestBody Submitdata submitdata) {
        this.submitdata = submitdata;
        int id = submitdata.getId();
        String sql = "delete from submitdata where id = " + id;
        jdbcTemplate.update(sql);
        return "ok";
    }


    //查询个人反馈记录
    @PostMapping("/api/selectsubmitbyuser")
    public List<Map<String, Object>> selectsubmitbyuser(@RequestBody  Submitdata submitdata) {
        this.submitdata = submitdata;
        String submitbody = submitdata.getSubmitbody();
        String sql = "select  * from submitdata where submitbody = " + "'" + submitbody + "'";
        System.out.println(sql);
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql);
        return list_maps;
    }

    //查询所有人的反馈记录
    @PostMapping("/api/selectsubmit")
    public List<Map<String, Object>> selectsubmit(@RequestBody  Submitdata submitdata) {
        this.submitdata = submitdata;
        String submitbody = submitdata.getSubmitbody();
        String sql = "select  * from submitdata";
        System.out.println(sql);
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql);
        return list_maps;
    }


    //新增论坛
    @PostMapping("/api/addarticle")
    public Object addarticle(@RequestBody Artcle artcle) {
        this.artcle = artcle;
        // username,descstr, detail,trans_pic,datetime
        String username = artcle.getUsername();
        String descstr = artcle.getDescstr();
        String detail = artcle.getDetail();
        String trans_pic = artcle.getTrans_pic();
        String datetime = artcle.getDatetime();
        String usericon = artcle.getUsericon();
        String typetext = artcle.getTypetext();
        int userid = artcle.getUserid();
        String tapstr = artcle.getTapstr();
        String goodstatus = artcle.getGoodstatus();
        String status = artcle.getStatus();

        jdbcTemplate.update("insert into artcle(status,goodstatus,tapstr,username,descstr, detail,trans_pic,datetime,usericon,typetext,userid) " +
                "values (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", status,goodstatus,tapstr,username,descstr, detail,trans_pic,datetime,usericon,typetext,userid);
        return "success";

    }

    @PostMapping("/api/addapprase")
    public Object addapprase(@RequestBody Operation operation) {
        LocalDateTime currentTime = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedTime = currentTime.format(formatter);


        int userid = operation.getUserid();
        int shopid = operation.getShopid();

        String shopname = operation.getShopname();
        String type = operation.getType();


        jdbcTemplate.update("insert into operation (userid,shopid,shopname,datetime,type) " +
                "values (?,?, ?, ?, ?)", userid,shopid,shopname,formattedTime,type);
        return "ok";

    }


    //新增论坛评论
    @PostMapping("/api/insertchatart")
    public Object insertchatart(@RequestBody Artcle_chat artcle_chat) {
        this.artcle_chat = artcle_chat;
        String commenttime = artcle_chat.getCommenttime();
        String firstnickname = artcle_chat.getFirstnickname();
        String ispraise = artcle_chat.getIspraise();
        String comment = artcle_chat.getComment();
        String headimg = artcle_chat.getHeadimg();
        String secondnickname = artcle_chat.getSecondnickname();
        int annid = artcle_chat.getAnnid();
        int praisenum = artcle_chat.getPraisenum();
        int candelete = artcle_chat.getCandelete();
        int parentid = artcle_chat.getParentid();
        jdbcTemplate.update("insert into artcle_chat(COMMENT_TIME,FIRSTNICKNAME, IS_PRAISE,COMMENT,HEADIMGURL,SECONDNICKNAME,annid,PRAISE_NUM,CANDELETE,PARENTID)"
                + " values ('" + commenttime + "', '" + firstnickname + "','" + ispraise + "','" + comment + "','" + headimg + "','" + secondnickname
                + "'," + annid + "," + praisenum + "," + candelete + "," + parentid+ ")");
        return "success";
    }

    //查询所有论坛
    @PostMapping("/api/queryallarticle")
    public List<Map<String, Object>> queryallarticle(@RequestBody Artcle artcle) {
        this.artcle = artcle;
        String sql = "select  * from artcle";
        System.out.println(sql);
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql);
        return list_maps;
    }
    //查询论坛
    @PostMapping("/api/queryarticle")
    public List<Map<String, Object>> queryarticle(@RequestBody Artcle artcle) {
        String keyword = artcle.getKeyword();
        String goodstatus = artcle.getGoodstatus();
        String typetext = artcle.getTypetext();
        int userid = artcle.getUserid();
        String status = artcle.getStatus();
        String sql = "select * from artcle where id > 0 ";
        List<Object> params = new ArrayList<>();
        if (keyword != null && !keyword.isEmpty()) {
            sql += " and descstr LIKE ?";
            params.add("%" + keyword + "%");
        }
        if (goodstatus != null && !goodstatus.isEmpty()) {
            sql += " and goodstatus = ?";
            params.add(goodstatus);
        }
        if (!typetext.equals("全部帖子") &&(typetext != null && !typetext.isEmpty()) ) {
            sql += " and typetext = ?";
            params.add(typetext);
        }
        if (status != null && !status.isEmpty()) {
            sql += " and status = ?";
            params.add(status);
        }
        if (userid != 0) {
            sql += " and userid = ?";
            params.add(userid);
        }

        sql += " ORDER BY datetime DESC";

        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql, params.toArray());
        return list_maps;
    }


    @PostMapping("/api/queryarticlebyid")
    public List<Map<String, Object>> queryarticlebyid(@RequestBody Artcle artcle) {
        int id = artcle.getId();
        String sql = "select  * from artcle where id = ?";
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql,id);
        return list_maps;
    }


    @PostMapping("/api/selectpingjia")
    public List<Map<String, Object>> selectpingjia(@RequestBody Operation operation) {
        int shopid = operation.getShopid();
        int userid = operation.getUserid();
        String sql01 = "select count(1) as diancannum from operation where shopid = ? and type = '点赞'";
        List<Map<String, Object>> list_maps01 = jdbcTemplate.queryForList(sql01,shopid);

        String sql02 = "select count(1) as diancainum from operation where shopid = ? and type = '点踩'";
        List<Map<String, Object>> list_maps02 = jdbcTemplate.queryForList(sql02,shopid);

        String sql03 = "select count(1) as shoucangnum from operation where shopid = ? and type = '收藏'";
        List<Map<String, Object>> list_maps03 = jdbcTemplate.queryForList(sql03,shopid);

        String sql04 = "select count(1) as mydiancannum from operation where shopid = ? and type = '点赞' and userid = ?";
        List<Map<String, Object>> list_maps04 = jdbcTemplate.queryForList(sql04,shopid,userid);

        String sql05 = "select count(1) as mydiancainum from operation where shopid = ? and type = '点踩' and userid = ?";
        List<Map<String, Object>> list_maps05 = jdbcTemplate.queryForList(sql05,shopid,userid);

        String sql06 = "select count(1) as myshoucangnum from operation where shopid = ? and type = '收藏' and userid = ?";
        List<Map<String, Object>> list_maps06 = jdbcTemplate.queryForList(sql06,shopid,userid);

        Map<String, Object> list_maps = new HashMap<>();
        list_maps.put("diancannum", list_maps01.get(0).get("diancannum"));
        list_maps.put("diancainum", list_maps02.get(0).get("diancainum"));
        list_maps.put("shoucangnum", list_maps03.get(0).get("shoucangnum"));
        list_maps.put("mydiancannum", list_maps04.get(0).get("mydiancannum"));
        list_maps.put("mydiancainum", list_maps05.get(0).get("mydiancainum"));
        list_maps.put("myshoucangnum", list_maps06.get(0).get("myshoucangnum"));

        return Collections.singletonList(list_maps);
    }


    //修改论坛状态
    @PostMapping("/api/updateartclestatus")
    public Object updateartclestatus(@RequestBody Artcle artcle) {
        this.artcle = artcle;
        int id = artcle.getId();
        String status = artcle.getStatus();
        String sql = "update artcle set status=? where id = "
                + id;

        Object[] objects = new Object[1];
        objects[0] = status;

        jdbcTemplate.update(sql, objects);
        return "success";
    }

    //查询论坛
    @PostMapping("/api/queryarticleall")
    public List<Map<String, Object>> queryarticleall(@RequestBody Artcle artcle) {
        this.artcle = artcle;
        String sql = "select  * from artcle";
        System.out.println(sql);
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql);
        return list_maps;
    }

    //查询论坛聊天记录
    @PostMapping("/api/querychatart")
    public List<Map<String, Object>> querychatart(@RequestBody Artcle_chat artcle_chat) {
        this.artcle_chat = artcle_chat;
        int annid = artcle_chat.getAnnid();
        String sql = "select  * from artcle_chat where annid = " + annid;
        System.out.println(sql);
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql);
        return list_maps;
    }

    @PostMapping("/api/deletearticle")
    public Object deletearticle(@RequestBody Artcle artcle) {
        this.artcle = artcle;
        int id = artcle.getId();
        String sql = "delete from artcle where id = ?";
        jdbcTemplate.update(sql, id);
        return "ok";
    }


    @PostMapping("/api/chatremove")
    public Object chatremove(@RequestBody Artcle artcle) {
        int id = artcle.getId();
        String sql = "DELETE FROM artcle_chat WHERE id =  ? or PARENTID = ?";
        jdbcTemplate.update(sql, id,id);
        return "ok";
    }

    @PostMapping("/api/deleteiscunzai")
    public Object deleteiscunzai(@RequestBody Operation operation) {
        int userid = operation.getUserid();
        int shopid = operation.getShopid();
        String type = operation.getType();
        String sql = "delete from operation where userid = ? and shopid = ? and type = ?";
        jdbcTemplate.update(sql, userid,shopid,type);
        return "ok";
    }


    //取消关注
    @PostMapping("/api/deletefans")
    public Object deletefans(@RequestBody Fans fans) {
        int userid = fans.getUserid();
        int fansuserid = fans.getFansuserid();
        String sql = "delete from fans where userid = ? and fansuserid = ?";
        jdbcTemplate.update(sql, userid,fansuserid);
        return "ok";
    }


    //关注
    @PostMapping("/api/addfans")
    public Object addfans(@RequestBody Fans fans) {
        LocalDateTime currentTime = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedTime = currentTime.format(formatter);
        int userid = fans.getUserid();
        int fansuserid = fans.getFansuserid();
        jdbcTemplate.update("insert into fans (userid,fansuserid,datetime) " +
                "values (?,?, ?)", userid,fansuserid,formattedTime);
        return "ok";

    }


    //查看是否关注
    @PostMapping("/api/querysfgz")
    public List<Map<String, Object>> querysfgz(@RequestBody Fans fans) {
        int userid = fans.getUserid();
        int fansuserid = fans.getFansuserid();
        String sql = "select  * from fans where userid = ? and fansuserid = ?";
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql,userid,fansuserid);
        return list_maps;
    }



    //查看关注列表
    @PostMapping("/api/querygzlist")
    public List<Map<String, Object>> querygzlist(@RequestBody Fans fans) {
        int fansuserid = fans.getFansuserid();
        String sql = "select b.* from fans a left join userdata b on a.userid = b.id where a.fansuserid = ?";
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql,fansuserid);
        return list_maps;
    }

    //查看粉丝列表
    @PostMapping("/api/queryfslist")
    public List<Map<String, Object>> queryfslist(@RequestBody Fans fans) {
        int userid = fans.getUserid();
        String sql = "select b.* from fans a left join userdata b on a.fansuserid = b.id where a.userid = ?";
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql,userid);
        return list_maps;
    }



    @PostMapping("/api/querysysnews")
    public List<Map<String, Object>> querysysnews(@RequestBody News news) {
        String keyword = news.getKeyword();
        String sql = "select * from news where id > 0 ";
        List<Object> params = new ArrayList<>();
        if (keyword != null && !keyword.isEmpty()) {
            sql += " and title LIKE ?";
            params.add("%" + keyword + "%");
        }
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql, params.toArray());
        return list_maps;
    }

    @PostMapping("/api/addsysnews")
    public Object addsysnews(@RequestBody News news) {
        LocalDateTime currentTime = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedTime = currentTime.format(formatter);
        String trans_pic = news.getTrans_pic();
        String title = news.getTitle();
//        String detail = news.getDetail();
        String submitbody = news.getSubmitbody();
        int status = news.getStatus();
        String keywordstr = news.getKeywordstr();

        String fee = news.getFee();
        String mdd = news.getMdd();
        String jtfs = news.getJtfs();
        String xingcheng = news.getXingcheng();
        String zhuyi = news.getZhuyi();

        jdbcTemplate.update("INSERT INTO news (fee,mdd,jtfs,xingcheng,zhuyi,keywordstr,trans_pic,datetime, title,submitbody,status) " +
                "values (?, ?, ?, ?,?,?, ?, ?, ?, ?, ?)", fee,mdd,jtfs,xingcheng,zhuyi,keywordstr,trans_pic,formattedTime, title,submitbody,status);
        return "success";

    }


    @PostMapping("/api/updatesysnews")
    public Object updatesysnews(@RequestBody News news) {
        LocalDateTime currentTime = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedTime = currentTime.format(formatter);
        int id = news.getId();
        String trans_pic = news.getTrans_pic();
        String title = news.getTitle();
//        String detail = news.getDetail();
        String submitbody = news.getSubmitbody();
        String keywordstr = news.getKeywordstr();
        String fee = news.getFee();
        String mdd = news.getMdd();
        String jtfs = news.getJtfs();
        String xingcheng = news.getXingcheng();
        String zhuyi = news.getZhuyi();

        String sql = "UPDATE news SET fee = ?,mdd = ?,jtfs = ?,xingcheng = ?,zhuyi = ?,keywordstr = ?, trans_pic = ?, datetime = ?, title = ?, submitbody = ? where id = ?";
        jdbcTemplate.update(sql, fee,mdd,jtfs,xingcheng,zhuyi,keywordstr, trans_pic, formattedTime, title, submitbody, id);

        return "success";
    }

    @PostMapping("/api/queryannouncementext")
    public List<Map<String, Object>> queryannouncementext(@RequestBody Gongsimsg gongsimsg) {
        String sql = "select * from gongsimsg";
        System.out.println(sql);
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql);
        return list_maps;
    }


    @PostMapping("/api/updateannouncementext")
    //`UPDATE user_fushi SET shuliang = ${obj.shuliang},orderno = '${obj.orderno}',shenhestatus = '${obj.shenhestatus}',kuaidistatus = '${obj.kuaidistatus}',  userdesc = '${obj.userdesc}',annid = ${obj.annid}, jiaoshiid = ${obj.jiaoshiid}, datetime = '${datetime}' where id = ${obj.id}`
    public Object updateannouncementext(@RequestBody Gongsimsg gongsimsg) {
        int id = gongsimsg.getId();
        String title = gongsimsg.getTitle();
        String trans_pic = gongsimsg.getTrans_pic();
        String detail = gongsimsg.getDetail();
        String fee1 = gongsimsg.getFee1();
        String fee2 = gongsimsg.getFee2();
        String fee3 = gongsimsg.getFee3();
        String fee4 = gongsimsg.getFee4();
        String sql = "update gongsimsg set fee1 = ?,fee2 = ?,fee3 = ?,fee4 = ?, title = ?, detail = ?, trans_pic = ? where id = ?";
        jdbcTemplate.update(sql, fee1,fee2,fee3,fee4,title ,detail,trans_pic, id);
        return "success";
    }



    @PostMapping("/api/taskverify")
    public Object taskverify(@RequestBody Artcle artcle) {
        LocalDateTime currentTime = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedTime = currentTime.format(formatter);
        int id = artcle.getId();
        String status = artcle.getStatus();

        String sql = "UPDATE artcle SET status = ? where id = ?";
        jdbcTemplate.update(sql, status, id);

        return "success";
    }

    @PostMapping("/api/updatataskstatus")
    public Object updatataskstatus(@RequestBody Artcle artcle) {
        LocalDateTime currentTime = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedTime = currentTime.format(formatter);
        int id = artcle.getId();
        String goodstatus = artcle.getGoodstatus();

        String sql = "UPDATE artcle SET goodstatus = ? where id = ?";
        jdbcTemplate.update(sql, goodstatus, id);

        return "success";
    }

    @PostMapping("/api/taskverifymore")
    public Object taskverifymore(@RequestBody Artcle artcle) {
        LocalDateTime currentTime = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedTime = currentTime.format(formatter);
        List<Integer> ids = artcle.getIds();
        String status = artcle.getStatus();

        // 构建占位符字符串
        String placeholders = String.join(",", Collections.nCopies(ids.size(), "?"));

        // 构建 SQL 语句
        String sql = "UPDATE artcle SET status = ? WHERE id IN (" + placeholders + ")";

        // 构建参数列表
        List<Object> params = new ArrayList<>();
        params.add(status);
        params.addAll(ids);

        // 将参数列表转换为数组
        Object[] paramsArray = params.toArray();

        // 将 SQL 语句和参数数组传递给 jdbcTemplate
        jdbcTemplate.update(sql, paramsArray);

        return "success";
    }

    @PostMapping("/api/querysysnewsid")
    public List<Map<String, Object>> querysysnewsid(@RequestBody News news) {
        int id = news.getId();
        String sql = "SELECT * FROM news WHERE id = ?";
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql,id);
        return list_maps;
    }



    @PostMapping("/api/removesysnews")
    public Object removesysnews(@RequestBody News news) {
        int id = news.getId();
        String sql = "delete from news where id = ?";
        jdbcTemplate.update(sql, id);
        return "success";
    }




    @PostMapping("/api/questionselect")
    public Map<String, Object> questionselect(@RequestBody Question question) {
        String tmnr = question.getTmnr();
        int current = question.getCurrent();
        int size = question.getSize();
        int countdata = (current - 1) * size;

        // 查询总记录数
        String countSql = "SELECT COUNT(*) AS total FROM question WHERE id > 0";
        List<Object> countParams = new ArrayList<>();
        if (tmnr != null && !tmnr.isEmpty()) {
            countSql += " AND tmnr LIKE ?";
            countParams.add("%" + tmnr + "%");
        }
        int total = jdbcTemplate.queryForObject(countSql, countParams.toArray(), Integer.class);

        // 查询分页数据
        String dataSql = "SELECT * FROM question WHERE id > 0";
        List<Object> dataParams = new ArrayList<>();
        if (tmnr != null && !tmnr.isEmpty()) {
            dataSql += " AND tmnr LIKE ?";
            dataParams.add("%" + tmnr + "%");
        }
        dataSql += " LIMIT ?, ?";
        dataParams.add(countdata);
        dataParams.add(size);
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(dataSql, dataParams.toArray());

        // 构建结果对象，包含总记录数和分页数据
        Map<String, Object> result = new HashMap<>();
        result.put("count", total);
        result.put("data", list_maps);
        return result;
    }




    @PostMapping("/api/questioninsert")
    public Object questioninsert(@RequestBody Question question) {
        LocalDateTime currentTime = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedTime = currentTime.format(formatter);
        String tmzqdatext = question.getTmzqdatext();
        String tmbz = question.getTmbz();
        String tmda1 = question.getTmda1();
        String tmda2 = question.getTmda2();
        String tmda3 = question.getTmda3();
        String tmda4 = question.getTmda4();
        String tmda5 = question.getTmda5();
        String tmda6 = question.getTmda6();
        String tmdas = question.getTmdas();
        String tmlx = question.getTmlx();
        String tmnd = question.getTmnd();
        String tmnr = question.getTmnr();
        String tmtp = question.getTmtp();
        String tmxh = question.getTmxh();
        String tmzqda = question.getTmzqda();
        String tmzs = question.getTmzs();
        String belong = question.getBelong();

        jdbcTemplate.update("INSERT INTO question (tmzqdatext,tmbz,tmda1,tmda2,tmda3,tmda4,tmda5,tmda6,tmdas,tmlx,tmnd,tmnr,tmtp,tmxh,tmzqda,tmzs,belong) " +
                "values (?,?, ?, ?, ?, ?, ?,?,?, ?, ?, ?, ?, ?, ?, ?, ?)", tmzqdatext,tmbz,tmda1,tmda2,tmda3,tmda4,tmda5,tmda6,tmdas,tmlx,tmnd,tmnr,tmtp,tmxh,tmzqda,tmzs,belong);
        return "success";

    }




    @PostMapping("/api/questionupdata")
    public Object questionupdata(@RequestBody Question question) {
        LocalDateTime currentTime = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedTime = currentTime.format(formatter);
        int id = question.getId();
        String tmzqdatext = question.getTmzqdatext();
        String tmbz = question.getTmbz();
        String tmda1 = question.getTmda1();
        String tmda2 = question.getTmda2();
        String tmda3 = question.getTmda3();
        String tmda4 = question.getTmda4();
        String tmda5 = question.getTmda5();
        String tmda6 = question.getTmda6();
        String tmdas = question.getTmdas();
        String tmlx = question.getTmlx();
        String tmnd = question.getTmnd();
        String tmnr = question.getTmnr();
        String tmtp = question.getTmtp();
        String tmxh = question.getTmxh();
        String tmzqda = question.getTmzqda();
        String tmzs = question.getTmzs();
        String belong = question.getBelong();

        String sql = "UPDATE question SET tmzqdatext = ?, tmbz = ?, tmda1 = ?, tmda2 = ?, tmda3 = ?, tmda4 = ?, tmda5 = ?, tmda6 = ?, tmdas = ?, tmlx = ?, tmnd = ?, tmnr = ?, tmtp = ?, tmxh = ?, tmzqda = ?, tmzs = ?, belong = ? where id = ?";
        jdbcTemplate.update(sql, tmzqdatext,tmbz,tmda1,tmda2,tmda3,tmda4,tmda5,tmda6,tmdas,tmlx,tmnd,tmnr,tmtp,tmxh,tmzqda,tmzs,belong,id);

        return "success";
    }


    @PostMapping("/api/questionremove")
    public Object questionremove(@RequestBody Question question) {
        int id = question.getId();
        String sql = "delete from question where id = ?";
        jdbcTemplate.update(sql, id);
        return "success";
    }


    @PostMapping("/api/getquestionbyclass")
    public List<Map<String, Object>> getquestionbyclass(@RequestBody Question question) {
        String belong = question.getBelong();
        String sql = "SELECT * FROM question WHERE belong = ?";
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql,belong);
        return list_maps;
    }


    @PostMapping("/api/removecollection")
    public Object removecollection(@RequestBody Collection collection) {
        int userid = collection.getUserid();
        int questionid = collection.getQuestionid();
        String sql = "delete from collection WHERE userid = ? AND questionid = ?";
        jdbcTemplate.update(sql, userid,questionid);
        return "success";
    }

    @PostMapping("/api/querycollectionuser")
    public List<Map<String, Object>> querycollectionuser(@RequestBody Collection collection) {
        int userid = collection.getUserid();
        String sql = "SELECT b.*,a.datetime,a.id as idd FROM collection a left join question b on a.questionid = b.id WHERE userid = ?";
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql,userid);
        return list_maps;
    }

    @PostMapping("/api/removecollectionid")
    public Object removecollectionid(@RequestBody Collection collection) {
        int id = collection.getId();
        String sql = "delete from collection WHERE id = ?";
        jdbcTemplate.update(sql, id);
        return "success";
    }


    @PostMapping("/api/delpingjia")
    public Object delpingjia(@RequestBody Operation operation) {
        int id = operation.getId();
        String sql = "delete from operation WHERE id = ?";
        jdbcTemplate.update(sql, id);
        return "success";
    }


    @PostMapping("/api/insertcollection")
    public Object insertcollection(@RequestBody  Collection collection) {
        LocalDateTime currentTime = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedTime = currentTime.format(formatter);
        int userid = collection.getUserid();
        int questionid = collection.getQuestionid();

        jdbcTemplate.update("INSERT INTO collection (userid,questionid,datetime) " +
                "values (?,?, ?)", userid,questionid,formattedTime);
        return "success";

    }

    //我的收藏
    @PostMapping("/api/querymysc")
    public List<Map<String, Object>> queryfslist(@RequestBody Operation operation) {
        int userid = operation.getUserid();
        String sql = "select * from operation where userid = ? and type = '收藏'";
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql,userid);
        return list_maps;
    }

    //我的收藏
    @PostMapping("/api/querymydz")
    public List<Map<String, Object>> querymydz(@RequestBody Operation operation) {
        int userid = operation.getUserid();
        String sql = "select * from operation where userid = ? and type = '点赞'";
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql,userid);
        return list_maps;
    }



    //    个人中心相关数据
    @PostMapping("/api/querymycount")
    public List<Map<String, Object>> querymycount(@RequestBody Operation operation) {
        int userid = operation.getUserid();
        String sql01 = "select count(1) as fensicount from fans where userid = ? ";
        List<Map<String, Object>> list_maps01 = jdbcTemplate.queryForList(sql01,userid);

        String sql02 = "select count(1) as guanzhucount from fans where fansuserid = ?";
        List<Map<String, Object>> list_maps02 = jdbcTemplate.queryForList(sql02,userid);

        String sql03 = "select count(1) as shoucangnum from operation where userid = ? and type = '收藏'";
        List<Map<String, Object>> list_maps03 = jdbcTemplate.queryForList(sql03,userid);

        String sql04 = "select count(1) as mydiancannum from operation where userid = ? and type = '点赞'";
        List<Map<String, Object>> list_maps04 = jdbcTemplate.queryForList(sql04,userid);


        Map<String, Object> list_maps = new HashMap<>();
        list_maps.put("fensicount", list_maps01.get(0).get("fensicount"));
        list_maps.put("guanzhucount", list_maps02.get(0).get("guanzhucount"));
        list_maps.put("shoucangnum", list_maps03.get(0).get("shoucangnum"));
        list_maps.put("mydiancannum", list_maps04.get(0).get("mydiancannum"));
        return Collections.singletonList(list_maps);
    }

    // 新增活动
    @PostMapping("/api/insertactivity")
    public Object insertactivity(@RequestBody Activity activity) {
        this.activity = activity;
        String projectname = activity.getProjectname();
        String status = activity.getStatus();
        String detail = activity.getDetail();
        String img = activity.getImg();
        String address = activity.getAddress();
        String renshu = activity.getRenshu();
        int parentid = activity.getParentid();
        String activitydate = activity.getActivitydate();
        String yusuan = activity.getYusuan();
        jdbcTemplate.update("insert into activity(projectname,yusuan,parentid,status,renshu,detail,img,address,activitydate)"
                + "values ('" + projectname + "', '" + yusuan + "', " + parentid + ", '" + status + "','" + renshu + "','" + detail + "','" + img + "','" + address + "','" + activitydate + "')");
        return "success";
    }

    @PostMapping("/api/updataactivity")
    public Object updataactivity(@RequestBody Activity activity) {
        this.activity = activity;
        int id = activity.getId();
        String projectname = activity.getProjectname();
        String status = activity.getStatus();
        String detail = activity.getDetail();
        String img = activity.getImg();
        String address = activity.getAddress();
        String renshu = activity.getRenshu();
        String activitydate = activity.getActivitydate();
        int parentid = activity.getParentid();
        String yusuan = activity.getYusuan();
        String sql = "update activity set projectname=?,status=?,detail=?,img=?,address=?,parentid=?,renshu=?,activitydate=?,yusuan = ? where id = "
                + id;

        Object[] objects = new Object[9];
        objects[0] = projectname;
        objects[1] = status;
        objects[2] = detail;
        objects[3] = img;
        objects[4] = address;
        objects[5] = parentid;
        objects[6] = renshu;
        objects[7] = activitydate;
        objects[8] = yusuan;





        jdbcTemplate.update(sql, objects);
        return "success";
    }

    @PostMapping("/api/updataactivitystatus")
    public Object updataactivitystatus(@RequestBody Activity activity) {
        this.activity = activity;
        int id = activity.getId();
        String status = activity.getStatus();
        String sql = "update activity set status=? where id = "
                + id;

        Object[] objects = new Object[1];
        objects[0] = status;

        jdbcTemplate.update(sql, objects);
        return "success";
    }

    @PostMapping("/api/queryactivitylist")
    public List<Map<String, Object>> queryactivitylist(@RequestBody Activity activity) {
        int parentid = activity.getParentid();
        String keyword = activity.getKeyword();
        String sql = "select  b.userName as userdesc,a.* from activity a left join userdata b on a.parentid = b.id where a.id > 0 ";
        List<Object> params = new ArrayList<>();

        //当userid用于int
        if (parentid != 0) {
         sql += " and a.parentid = ?";
           params.add(parentid);
         }

        if (keyword != null && !keyword.isEmpty()) {
            sql += " and a.projectname LIKE ?";
            params.add("%" + keyword + "%");
        }

        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql, params.toArray());
        return list_maps;
    }



    // 查询活动列表
    @PostMapping("/api/queryactivitystatus")
    public List<Map<String, Object>> queryactivitystatus(@RequestBody Activity activity) {
        this.activity = activity;
        String status = activity.getStatus();
        String sql = "select  b.userName as userdesc,a.* from activity a left join userdata b on a.parentid = b.id where a.status = '" + status + "'";

        System.out.println(sql);
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql);
        return list_maps;
    }

//    //通过id查询活动列表
//    @PostMapping("/api/queryactivitybyid")
//    public List<Map<String, Object>> queryactivitybyid(@RequestBody Activity activity) {
//        this.activity = activity;
//        int id = activity.getId();
//        String sql = "select  * from activity where  id = " + id;
//        System.out.println(sql);
//        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql);
//        return list_maps;
//    }


    //通过id删除活动活动数据
    @PostMapping("/api/deleteactivity")
    public String deleteactivity(@RequestBody Activity activity) {
        this.activity = activity;
        int id = activity.getId();
        String sql = "delete from activity where  id = " + id;
        jdbcTemplate.update(sql);
        return "success";
    }

    @PostMapping("/api/updateSysUsersim")
    public Object updateSysUsersim(@RequestBody Userdata userdata) {
        int id = userdata.getId();
        String empNo = userdata.getEmpNo();
        String mobile = userdata.getMobile();
        String userName = userdata.getUserName();
        String email = userdata.getEmail();
        String sql = "UPDATE userdata SET  email = ?, empNo = ?, mobile = ?,  userName = ? where id = ?";
        jdbcTemplate.update(sql, email,empNo,mobile,userName, id);

        return "ok";
    }


    @PostMapping("/api/deleteuseractivity")
    public String deleteuseractivity(@RequestBody User_activity user_activity) {
        int id = user_activity.getId();
        String sql = "delete from user_activity where  id = " + id;
        jdbcTemplate.update(sql);
        return "success";
    }

    @PostMapping("/api/queryactivitybyid")
    public List<Map<String, Object>> queryactivitybyid(@RequestBody Activity activity) {
        this.activity = activity;
        int id = activity.getId();
        String sql = "select  * from activity where  id = " + id;
        System.out.println(sql);
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql);
        return list_maps;
    }

    @PostMapping("/api/adduseractivity")
    public Object adduseractivity(@RequestBody User_activity user_activity) {
        this.user_activity = user_activity;
        String datetime = user_activity.getDatetime();
        int userid = user_activity.getUserid();
        int activityid = user_activity.getActivityid();
        String status = user_activity.getStatus();
        jdbcTemplate.update("insert into user_activity(datetime,userid,activityid,status)"
                + "values ('" + datetime + "', " + userid + ", " + activityid + ", '" + status + "')");
        return "success";
    }

    //查询之前是否报过名报名记录
    @PostMapping("/api/isqueryuseractivity")
    public List<Map<String, Object>> isqueryuseractivity(@RequestBody User_activity user_activity) {
        this.user_activity = user_activity;
        int userid = user_activity.getUserid();
        int activityid = user_activity.getActivityid();
        String sql = "select  * from user_activity where  userid = " + userid + " and activityid = " + activityid;
        System.out.println(sql);
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql);
        return list_maps;
    }


    @PostMapping("/api/queryactivitybyidrenshu")
    public List<Map<String, Object>> queryactivitybyidrenshu(@RequestBody User_activity user_activity) {
        this.user_activity = user_activity;
        int id = user_activity.getId();
        String sql = "select  count(1) as countsum from user_activity where  activityid = " + id;
        System.out.println(sql);
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql);
        return list_maps;
    }


    //查询已报名的活动
    @PostMapping("/api/queryactivitybymy")
    public List<Map<String, Object>> queryactivitybymy(@RequestBody User_activity user_activity) {
        this.user_activity = user_activity;
        int userid = user_activity.getUserid();
        int activityid = user_activity.getActivityid();
        String sql = "select a.activityid, b.projectname, a.datetime,a.status from user_activity a,activity b where  a.userid = " +  userid + " and a.activityid = b.id"  ;
        System.out.println(sql);
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql);
        return list_maps;
    }

    //查询报名列表
    @PostMapping("/api/queryshactivity")
    public List<Map<String, Object>> queryshactivity(@RequestBody User_activity user_activity) {
        this.user_activity = user_activity;
        int userid = user_activity.getUserid();
        int activityid = user_activity.getActivityid();
        String sql = "SELECT a.id,a.userid as userid, b.userName,c.projectname,a.status,a.datetime from user_activity a,userdata b,activity c where a.activityid = c.id and a.userid = b.id and c.parentid = " + userid  ;
        System.out.println(sql);
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql);
        return list_maps;
    }


    @PostMapping("/api/updateactivityshstatus")
    public Object updateactivityshstatus(@RequestBody User_activity user_activity) {
        this.user_activity = user_activity;
        int id = user_activity.getId();
        String status = user_activity.getStatus();
        String sql = "update user_activity set status=? where id = "
                + id;

        Object[] objects = new Object[1];
        objects[0] = status;

        jdbcTemplate.update(sql, objects);
        return "success";
    }



    @PostMapping("/api/queryactivityuserlist")
    public List<Map<String, Object>> queryactivityuserlist(@RequestBody User_activity user_activity) {
        int activityid = user_activity.getActivityid();
        String sql = "SELECT a.id,b.trans_pic, b.id as userid, b.userName,b.empNo,b.mobile from user_activity a left join userdata b on a.userid = b.id where a.activityid = " + activityid  ;
        System.out.println(sql);
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql);
        return list_maps;
    }



    //聊天信息插入
    @PostMapping("/api/insertchat")
    public Object insertchat(@RequestBody Chatlist chatlist) {
        String mineMsg = chatlist.getMineMsg();
        String headUrl = chatlist.getHeadUrl();
        String nickName = chatlist.getNickName();
        String chatTime = chatlist.getChatTime();
        String contactText = chatlist.getContactText();
        String bj = chatlist.getBj();
        String contenttype = chatlist.getContenttype();
        int userid = chatlist.getUserid();
        int doctorid = chatlist.getDoctorid();
        jdbcTemplate
                .update("insert into chatlist(mineMsg,contenttype,bj,headUrl,nickName,chatTime,contactText,userid,doctorid)"
                        + " values ('"
                        + mineMsg + "', '"
                        + contenttype + "', '"
                        + bj + "', '"
                        + headUrl + "','" + nickName + "','" + chatTime + "','" + contactText
                        + "'" + "," + userid + "," + doctorid+ ")");
        return "ok";
    }

    //查询用户与医生聊天记录
    @PostMapping("/api/querychat")
    public List<Map<String, Object>> querychat(@RequestBody Chatlist chatlist) {
        int userid = chatlist.getUserid();
        int doctorid = chatlist.getDoctorid();
        String sql = "select * from  chatlist where (userid = " + userid + " and doctorid = " + doctorid +") or " + "(userid = " + doctorid + " and doctorid = " + userid + ")";
        List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql);
        return list_maps;
    }





}
