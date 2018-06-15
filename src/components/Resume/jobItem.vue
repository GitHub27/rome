<template>
  <div class="resume-detail-main mar-bom job-detail">
    <el-form class="job-form" :key="21" :model="resumeForm" :rules="resumeRules" ref="resumeForm" label-position="left" label-width="80px">
      <div class="add-project-warp" style="padding: 30px 30px;">
        <p class="input-group-add">
          <el-form-item prop="jobname" label="公司名称：">
            <el-input maxlength="100" name="jobname" type="text" v-model="resumeForm.jobname">
            </el-input>
          </el-form-item>
          <el-form-item prop="department" style="width:30%;" label="所在部门：">
            <el-input maxlength="100" name="department" type="text" v-model="resumeForm.department">
              <span slot="suffix" class="custom-suffix">添加子部门</span>
            </el-input>
          </el-form-item>
          <el-form-item prop="workingPlace" style="width:24%;" label="工作地点：" @focus="workingPlaceFouse">
            <el-input maxlength="100" :readonly="true" name="workingPlace" type="text" v-model="resumeForm.workingPlace">
              <i class="region-icon" slot="suffix" @click="workingPlaceFouse"></i>
            </el-input>
          </el-form-item>
        </p>
        <div class="input-group-warp">
          <p class="input-group-add">
            <el-form-item prop="starttime" label="开始时间：" class="data-icon-correct">
              <el-date-picker name="starttime" v-model="resumeForm.starttime" :editable="false" :clearable="false" type="date" align="right">
              </el-date-picker>
            </el-form-item>
            <el-form-item prop="endtime" label="结束时间：" class="data-icon-correct">
              <el-date-picker name="endtime" v-model="resumeForm.endtime" :editable="false" :clearable="false" type="date" align="right">
              </el-date-picker>
            </el-form-item>
          </p>
        </div>
        <div class="input-group-warp">
          <p class="input-group-add">
            <el-form-item prop="jobFunction" label="职能：">
              <el-input maxlength="100" name="jobFunction" type="text" v-model="resumeForm.jobFunction">
              </el-input>
            </el-form-item>
            <el-form-item prop="jobPosition" label="职位：">
              <el-input maxlength="100" name="jobPosition" type="text" v-model="resumeForm.jobPosition">
              </el-input>
            </el-form-item>
          </p>
          <p class="input-group-add">
            <el-form-item prop="jobRank" label="职级：">
              <el-input maxlength="100" name="jobRank" type="text" v-model="resumeForm.jobRank">
              </el-input>
            </el-form-item>
          </p>
        </div>
        <div class="input-group-warp">
          <p class="input-group-add">
            <el-form-item prop="superior" label="汇报上级：">
              <el-input maxlength="100" name="jobsuperiorFunction" type="text" v-model="resumeForm.superior">
              </el-input>
            </el-form-item>
            <el-form-item prop="subordinate" label="下属：">
              <el-input maxlength="100" name="subordinate" type="text" v-model="resumeForm.subordinate">
                <span slot="suffix" class="custom-suffix">人</span>
              </el-input>
            </el-form-item>
          </p>
        </div>
        <div class="resume-detail-main recommended-reasons major-desc">
          <p>工作职责和业绩：</p>
          <el-form-item style="height:80px;" prop="jobPositionDesc">
            <el-input maxlength="1000" name="jobPositionDesc" type="textarea" v-model="resumeForm.jobPositionDesc">
            </el-input>
          </el-form-item>
        </div>
        <br/>
        <div class="projectlist-warp" v-for="(item,index) in projectList" :key="index">
          <p class="projectlist-title">项目经验：</p>
          <div>
            <p class="project-title">
              {{item.projectname}}
              <span>（{{item.starttime|dateFormat('yyyy.MM')}}-{{item.starttime|dateFormat('yyyy.MM')}}）</span>
              <span class="editbtn">
                <i class="el-icon-edit" @click="ActivateEducationEdit(item.id)"></i>
                <i class="el-icon-delete" @click="educationDelete(item.id)"></i>
              </span>
            </p>
            <p class="rome-line">
              <span class="lint-title">
                项目描述：
              </span>
              <span class="lint-content">
                {{item.projectDesc}}
              </span>
            </p>
            <p class="rome-line">
              <span class="lint-title">
                职责和业绩：
              </span>
              <span class="lint-content">
                {{item.projectOfjobFunction}}
              </span>
            </p>
          </div>
        </div>
        <project @cancel="showProjectAddBtn=true" v-show="!showProjectAddBtn"></project>
        <div class="form-footer" v-show="showProjectAddBtn" @click="ActivateProjectAdd">
          <div class="resume-detail-main project-add">
            <p class="text-c cursor-p ">
              <span class="resume-add-icon"></span>
              添加项目经验
            </p>
          </div>
        </div>
        <!-- <div class="form-footer">
          <el-button class="bor-rad0" @click="submit" type="primary">完成</el-button>
          <el-button class="bor-rad0" @click="cancel" plain>取消</el-button>
        </div> -->
      </div>
      <div class="form-footer" v-show="showProjectAddBtn">
        <el-button class="bor-rad0" @click="submit" type="primary">完成</el-button>
        <el-button class="bor-rad0" @click="cancel" plain>取消</el-button>
      </div>
    </el-form>
    <degree v-if="dialogRegionVisible" :defaultID="resumeForm.degreeid" :defaultName="resumeForm.degree" :defaultPID="defaultPID" :defaultPName="defaultPName" :dialogVisible='dialogRegionVisible' @closeRegion='closeRegion' @selectedOption='selectedRegion'>
    </degree>
  </div>
</template>
<script>
import { uuid } from "../../utils/index";
import degree from "../../components/dialog/degree";
import project from "../../components/resume/project";
import { mapGetters } from "vuex";

// this.$store
//         .dispatch("LogOut")
//         .then(() => {
//           this.$router.push("/index");
//         })
//         .catch(e => {
//           console.log("signOut:" + e);
//         });
export default {
  components: {
    degree,
    project
  },
  props: {
    operationType: {
      type: String,
      default: "add"
    },
    data: {}
  },
  computed: {
    ...mapGetters({
      projectList: "projectList"
    })
  },
  data() {
    return {
      //显示隐藏“添加项目”
      showProjectAddBtn: true,
      //弹框
      dialogRegionVisible: false,
      regionID: 0,
      regionName: "",
      regionPID: 0,
      regionPName: "",
      defaultID: "",
      defaultName: "",
      defaultPID: "",
      defaultPName: "",
      //弹框
      resumeForm: {
        jobname: "", //公司名称
        department: "", //所在部门
        workingPlace: "", //工作地点
        starttime: "", //开始时间
        endtime: "", //开始时间
        jobFunction: "", //职能
        jobPosition: "", //职位
        jobRank: "", //职级
        superior: "", //上级
        subordinate: "", //下属
        jobPositionDesc: "", //专业描述
        //-------

        id: "", //唯一编号
        ismodify: false //是否修改状态
      },
      resumeRules: {
        jobname: [{ required: true, message: "请填公司名称", trigger: "blur" }],
        department: [
          { required: true, message: "请填所在部门", trigger: "blur" }
        ],
        starttime: [
          { required: true, message: "请填开始时间", trigger: "blur" }
        ],
        endtime: [{ required: true, message: "请填结束时间", trigger: "blur" }],
        jobFunction: [{ required: true, message: "请填职能", trigger: "blur" }],
        jobPosition: [{ required: true, message: "请填职位", trigger: "blur" }],
        jobRank: [{ required: false }],
        superior: [{ required: true, message: "请填上级", trigger: "blur" }],
        subordinate: [{ required: false }],
        jobPositionDesc: [
          { required: true, message: "请填工作职责和业绩", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    if (this.data && this.data.id) {
      this.resumeForm = this.data;
    }
  },
  watch: {},

  methods: {
    /*激活新加项目经历状态*/
    ActivateProjectAdd() {
      this.showProjectAddBtn = false;
    },
    toggleRegionVisible() {
      this.dialogRegionVisible = true;
    },
    closeRegion() {
      this.dialogRegionVisible = false;
    },
    //接收选定信息并绑定ui
    selectedRegion(data) {
      if (data) {
      }
      this.dialogRegionVisible = false;
    },
    /*工作地点*/
    workingPlaceFouse() {
      this.dialogRegionVisible = true;
    },
    /*提交*/
    submit() {
      this.$refs.resumeForm.validate(valid => {
        if (valid) {
          if (this.data && this.data.id) {
            this.$emit("educationEdit", this.resumeForm);
          } else {
            this.resumeForm.id = uuid();
            this.$emit("educationAdd", this.resumeForm);
            return;
          }
        } else {
          console.log("education submit :", valid);
        }
      });
    },
    /*取消*/
    cancel() {
      this.$emit("educationCancel");
    }
  },

  mounted() {},
  destroyed() {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
