<template>
  <div>
    <div class="resume-header">
      <h1>
        共享人才信息
      </h1>
      <span>
        您已累计共享
        <i>333</i>条
      </span>
    </div>
    <el-form :key="21" :model="resumeForm" :rules="resumeRules" ref="loginForm" label-position="left" label-width="80px">
      <div class="resume-warp">
        <p class="title">
          基本信息
        </p>
        <div class="resume-detail-main ">
          <div class="portrait fl">
            <img src="../../assets/user/portrait.png" alt="">
            <p>
              <span>修改</span>
              <span>删除</span>
            </p>
          </div>
          <div class="fl">
            <p class="input-group">
              <el-form-item prop="username" label="姓 名：">
                <el-input maxlength="20" name="username" type="text" v-model="resumeForm.username" placeholder="" />
              </el-form-item>
              <el-form-item label="性 别" prop="sex">
                <el-radio-group v-model="resumeForm.sex">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
            </p>
            <p class="input-group">
              <el-form-item prop="birthday" label="出生日期：" class="birthday-form-item">
                <el-date-picker v-model="resumeForm.birthday" :editable="false" :clearable="false" type="date" placeholder="" align="right">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="婚 姻" prop="sex">
                <el-radio-group v-model="resumeForm.sex">
                  <el-radio label="已婚"></el-radio>
                  <el-radio label="未婚"></el-radio>
                </el-radio-group>
              </el-form-item>
            </p>
            <p class="input-group">
              <el-form-item prop="householdregister" label="原 籍：">
                <el-input maxlength="100" name="householdregister" :readonly="true" @focus="householdregisterFouse" type="text" v-model="resumeForm.householdregister" placeholder="">
                  <i class="el-icon-edit el-input__icon" slot="suffix" @click="householdregisterFouse"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="目前住所" prop="residence">
                <el-input maxlength="100" name="residence" :readonly="true" @focus="residenceFouse" type="text" v-model="resumeForm.residence" placeholder="">
                  <i class="el-icon-edit el-input__icon" slot="suffix" @click="residenceFouse"></i>
                </el-input>
              </el-form-item>
            </p>
            <p class="input-group single-line">
              <el-form-item prop="householdregister" label="最高学历：">
                <el-input maxlength="100" name="householdregister" :readonly="true" @focus="householdregisterFouse" type="text" v-model="resumeForm.householdregister" placeholder="">
                  <svg-icon icon-class="down-arrow" class="down-arrow cursor-p" slot="suffix" @click="householdregisterFouse" />
                </el-input>
              </el-form-item>
            </p>
            <p class="input-group single-line">
              <el-form-item prop="certificate" label="资格证书：">
                <el-input maxlength="100" name="certificate" type="text" v-model="resumeForm.certificate" placeholder="">
                </el-input>
              </el-form-item>
            </p>
            <p class="input-group single-line">
              <el-form-item prop="phone" label="联系电话：">
                <el-input maxlength="100" name="phone" type="text" v-model="resumeForm.phone" placeholder="">
                </el-input>
              </el-form-item>
            </p>
            <p class="input-group single-line">
              <el-form-item prop="email" label="邮箱：">
                <el-input maxlength="100" name="email" type="text" v-model="resumeForm.email" placeholder="">
                </el-input>
              </el-form-item>
            </p>
          </div>
          <div class="resume-col3 fl">
            <p class="input-group single-line">
              <el-form-item prop="email" label="公司名称：">
                <el-input maxlength="100" name="email" type="text" v-model="resumeForm.email" placeholder="">
                </el-input>
              </el-form-item>
            </p>
            <p class="input-group single-line">
              <el-form-item prop="email" label="职位：">
                <el-input maxlength="100" name="email" type="text" v-model="resumeForm.email" placeholder="">
                </el-input>
              </el-form-item>
            </p>
            <p class="input-group single-line">
              <el-form-item prop="email" label="所在行业：">
                <el-input maxlength="100" name="householdregister" :readonly="true" @focus="householdregisterFouse" type="text" v-model="resumeForm.householdregister" placeholder="">
                  <svg-icon icon-class="down-arrow" class="down-arrow cursor-p" slot="suffix" @click="householdregisterFouse" />
                </el-input>
              </el-form-item>
            </p>
            <p class="input-group">
              <el-form-item prop="birthday" label="参加工作年份：" class="birthday-form-item join-job">
                <el-date-picker v-model="resumeForm.birthday" :editable="false" :clearable="false" type="date" placeholder="" align="right">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="目前就业状态：" class="current-job" prop="sex">
                <el-radio-group v-model="resumeForm.sex">
                  <el-radio label="在职"></el-radio>
                  <el-radio label="离职"></el-radio>
                </el-radio-group>
              </el-form-item>
            </p>
            <p class="input-group">
              <el-form-item prop="email" label="目前收入：">
                <el-input maxlength="100" name="householdregister" @focus="householdregisterFouse" type="text" v-model="resumeForm.householdregister" placeholder="">
                  <span slot="suffix" class="custom-suffix">万/年</span>
                </el-input>
              </el-form-item>
              <el-form-item prop="email" label="期望收入：">
                <el-input maxlength="100" name="householdregister" @focus="householdregisterFouse" type="text" v-model="resumeForm.householdregister" placeholder="">
                  <span class="custom-suffix" slot="suffix">万/年</span>
                </el-input>
              </el-form-item>
            </p>
            <p class="input-group single-line">
              <el-form-item prop="email" label="目标企业：">
                <el-input maxlength="100" name="householdregister" @focus="householdregisterFouse" type="text" v-model="resumeForm.householdregister" placeholder="">
                  <span slot="suffix" class="custom-suffix">目标岗位</span>
                </el-input>
              </el-form-item>
            </p>
          </div>
        </div>
      </div>
      <div class="resume-warp">
        <p class="title">
          推荐分享理由
          <span>(必填)</span>
        </p>
        <div class="resume-detail-main recommended-reasons">
          <el-form-item prop="recommendedReasons">
            <el-input maxlength="1000" name="recommendedReasons" type="textarea" v-model="resumeForm.recommendedReasons" placeholder="">
            </el-input>
          </el-form-item>
        </div>
      </div>
    </el-form>
    <div class="resume-warp">
      <p class="title">
        教育经历
      </p>
      <div class="education-list">
        <div class="resume-detail-main " v-for="(item,index) in educationList" :key="index">
          <div class="ohid education-item" v-if="!item.ismodify">
            <p class="school-name">{{item.schoolname}}
              <span>({{ item.starttime|dateFormat}}-{{item.endtime|dateFormat}})</span>
            </p>
            <p>专业：{{item.majorname}}</p>
            <p>学历：{{item.degree}}</p>
            <p>是否统招：{{item.generalRecruitment}}</p>
            <p class="fr">
              <i class="el-icon-edit" @click="educationModify(item.id)"></i>
              <i class="el-icon-delete"></i>
            </p>
          </div>
          <education-item :data="item" v-else class="pad0" @educationEdit="educationEdit" @educationCancel="showEducationWarp=false" @educationAdd="educationAdd">
          </education-item>
        </div>
        <!-- <div class="resume-detail-main education-item">
          <p class="school-name">中山大学
            <span>(2011.09-2004.7)</span>
          </p>
          <p>专业：金融管理</p>
          <p>学历：MBA</p>
          <p>是否统招：是</p>
          <p class="fr">
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
          </p>
        </div> -->
      </div>
      <education-item @educationCancel="showEducationWarp=false" @educationAdd="educationAdd" v-if="showEducationWarp"></education-item>
      <div v-if="false" class="resume-detail-main mar-bom">
        <el-form :key="21" :model="resumeForm" :rules="resumeRules" ref="loginForm" label-position="left" label-width="80px">
          <div class="add-project-warp">
            <p class="input-group-add">
              <el-form-item prop="email" label="学校名称：">
                <el-input maxlength="100" name="email" type="text" v-model="resumeForm.email" placeholder="">
                </el-input>
              </el-form-item>
              <el-form-item prop="email" label="专业名称：">
                <el-input maxlength="100" name="email" type="text" v-model="resumeForm.email" placeholder="">
                </el-input>
              </el-form-item>
            </p>
            <div class="input-group-warp">
              <p class="input-group-add">
                <el-form-item prop="birthday" label="学校名称：" class="data-icon-correct">
                  <el-date-picker v-model="resumeForm.birthday" :editable="false" :clearable="false" type="date" placeholder="" align="right">
                  </el-date-picker>
                </el-form-item>
                <el-form-item prop="email" label="专业名称：">
                  <el-input maxlength="100" name="email" type="text" v-model="resumeForm.email" placeholder="">
                  </el-input>
                </el-form-item>
              </p>
              <p class="input-group-add">
                <el-form-item prop="householdregister" label="学历：">
                  <el-input maxlength="100" name="householdregister" :readonly="true" @focus="householdregisterFouse" type="text" v-model="resumeForm.householdregister" placeholder="">
                    <svg-icon icon-class="down-arrow" class="down-arrow cursor-p" slot="suffix" @click="householdregisterFouse" />
                  </el-input>
                </el-form-item>
                <el-form-item prop="generalRecruitment" label="是否统招：">
                  <el-checkbox v-model="resumeForm.generalRecruitment">是</el-checkbox>
                </el-form-item>
              </p>
            </div>
            <div class="resume-detail-main recommended-reasons major-desc">
              <p>专业描述：</p>
              <el-form-item prop="majorDesc">
                <el-input maxlength="1000" name="majorDesc" type="textarea" v-model="resumeForm.majorDesc" placeholder="">
                </el-input>
              </el-form-item>
            </div>
            <div class="form-footer">
              <el-button class="bor-rad0" type="primary">完成</el-button>
              <el-button class="bor-rad0" plain>取消</el-button>
            </div>
          </div>
        </el-form>
      </div>
    </div>
    <div class="resume-warp add-project-btn">
      <div class="resume-detail-main">
        <p>
          <span class="resume-add-icon"></span>
          添加教育经历
        </p>
      </div>
    </div>

    <br/>
    <br/>
    <el-button type="text" @click="toggleRegionVisible">打开嵌套表格的 Dialog</el-button>
    <multiple-options v-if="dialogRegionVisible" :defaultID="defaultID" :defaultName="defaultName" :defaultPID="defaultPID" :defaultPName="defaultPName" :dialogVisible='dialogRegionVisible' @closeRegion='closeRegion' @selectedOption='selectedRegion'>

    </multiple-options>
    {{regionID}}--{{regionName}}--{{regionPID}}--{{regionPName}}
    <br/> {{resumeForm.sex}}
  </div>
</template>
<script>
import MultipleOptions from "../../components/dialog/MultipleOptions";
import educationItem from "../../components/resume/educationItem";

export default {
  components: {
    MultipleOptions,
    educationItem
  },
  data() {
    return {
      dialogRegionVisible: false,
      regionID: 0,
      regionName: "",
      regionPID: 0,
      regionPName: "",
      defaultID: "2002",
      defaultName: "无锡",
      defaultPID: "2000",
      defaultPName: "江苏",
      showEducationWarp: true, //是否显示教育编辑框
      //form-begin
      resumeForm: {
        username: "",
        sex: "",
        birthday: "",
        householdregister: "", //户籍地
        residence: "", //目前住所
        certificate: "", //证书
        phone: "", //联系电话
        email: "", //邮箱
        recommendedReasons: "", //推荐理由
        generalRecruitment: false, //统招
        majorDesc: "" //专业描述
      },
      resumeRules: {
        username: [{ required: true, trigger: "blur" }],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        birthday: [
          { required: true, message: "请填出生日期", trigger: "blur" }
        ],
        householdregister: [
          { required: true, message: "请填原籍", trigger: "blur" }
        ],
        residence: [
          { required: true, message: "请填目前住所", trigger: "blur" }
        ],
        certificate: [{ required: false }],
        phone: [{ required: true, message: "请填联系电话", trigger: "blur" }],
        email: [{ required: true, message: "请填邮箱", trigger: "blur" }],
        recommendedReasons: [
          { required: true, message: "请填推荐理由", trigger: "blur" }
        ],
        generalRecruitment: [{ required: false }],
        majorDesc: [{ required: false }]
      },
      //form-end
      /*教育经历数组*/
      educationList: []
    };
  },
  computed: {},
  created() {},
  methods: {
    toggleRegionVisible() {
      this.dialogRegionVisible = true;
    },
    closeRegion() {
      this.dialogRegionVisible = false;
    },
    selectedRegion(data) {
      if (data) {
        this.regionID = data.id;
        this.regionName = data.name;
        this.regionPID = data.pid;
        this.regionPName = data.pname;
        this.defaultID = data.id;
        this.defaultName = data.name;
        this.defaultPID = data.pid;
        this.defaultPName = data.pname;
      }
      this.dialogRegionVisible = false;
    },
    householdregisterFouse() {
      console.log("householdregisterFouse");
    },
    residenceFouse() {
      console.log("residenceFouse");
    },
    /*添加教育经历*/
    educationAdd(data) {
      this.educationList.push(data);
      console.log("添加教育经历", this.educationList);
    },
    /*激活修改教育经历状态*/
    educationModify(id) {
      this.educationList.forEach((item, index) => {
        if (item.id == id) {
          let _item = item;
          _item.ismodify = true;
          this.educationList.splice(index, 1, _item);
        }
      });
    },
    /*修改教育经历*/
    educationEdit(data) {
      this.educationList.forEach((item, index) => {
        if (item.id == data.id) {
          data.ismodify = false;
          this.educationList.splice(index, 1, data);
        }
      });
      console.log("修改教育经历", this.educationList);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import "../../styles/user.scss";
@import "../../styles/multip-options.scss";
@import "../../styles/resume.scss";
</style>
