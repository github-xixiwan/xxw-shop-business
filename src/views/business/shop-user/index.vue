<template>
  <div class="app-container">
    <!-- 搜索相关区域 -->
    <div class="filter-container">
      <el-button size="mini" icon="el-icon-search" class="filter-item" @click="getPage()">{{ $t('table.search') }}</el-button>
      <el-button v-permission="['business:shopUser:save']" size="mini" icon="el-icon-plus" type="primary" class="filter-item" @click="addOrUpdateHandle()">{{ $t('table.create') }}</el-button>
    </div>

    <!-- 列表相关区域 -->
    <el-table
      v-loading="pageLoading"
      :data="pageVO.records"
      border
      fit
      highlight-current-row
      style="width: 100%;"
    >
      <!-- 昵称 -->
      <el-table-column :label="$t('business.shopUser.nickName')" prop="nickName" align="center" width="250">
        <template slot-scope="{row}">
          <span>{{ row.nickName }}</span>
        </template>
      </el-table-column>
      <!-- 头像 -->
      <el-table-column :label="$t('business.shopUser.avatar')" prop="avatar" align="center" width="100">
        <template slot-scope="{row}">
          <el-image :src="resourcesUrl + row.avatar" fit="contain" />
        </template>
      </el-table-column>
      <!-- 员工编号 -->
      <el-table-column :label="$t('business.shopUser.code')" prop="code" align="center">
        <template slot-scope="{row}">
          <span>{{ row.code }}</span>
        </template>
      </el-table-column>
      <!-- 联系方式 -->
      <el-table-column :label="$t('business.shopUser.phoneNum')" prop="phoneNum" align="center">
        <template slot-scope="{row}">
          <span>{{ row.phoneNum }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.actions')" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button v-if="!row.hasAccount" v-permission="['account:authAccount:shopSave']" type="text" @click="addOrUpdateAccountHandle(row.shopUserId,row.hasAccount)">
            设置账号
          </el-button>
          <el-button v-if="row.hasAccount" v-permission="['account:authAccount:shopUpdate']" type="text" @click="addOrUpdateAccountHandle(row.shopUserId,row.hasAccount)">
            修改账号
          </el-button>
          <el-button v-permission="['business:shopUser:update']" type="text" @click="addOrUpdateHandle(row.shopUserId)">
            {{ $t('table.edit') }}
          </el-button>
          <el-button v-permission="['business:shopUser:delete']" type="text" @click="deleteHandle(row.shopUserId)">
            {{ $t('table.delete') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页条 -->
    <pagination v-show="pageVO.totalRow>0" :total="pageVO.totalRow" :page.sync="pageQuery.pageNum" :limit.sync="pageQuery.pageSize" @pagination="getPage()" />
    <!-- 弹窗, 新增 / 修改 -->
    <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getPage()" />
    <!-- 账户弹窗, 新增 / 修改 -->
    <account-add-or-update v-if="accountaddOrUpdateVisible" ref="accountAddOrUpdate" @refreshDataList="getPage()" />
  </div>
</template>

<script>
import permission from '@/directive/permission/index.js'
import Pagination from '@/components/Pagination'
import AddOrUpdate from './add-or-update.vue'
import AccountAddOrUpdate from './account-add-or-update.vue'
import * as api from '@/api/business/shop-user'

export default {
  name: '',
  components: { Pagination, AddOrUpdate, AccountAddOrUpdate },
  directives: { permission },
  data() {
    return {
      // 查询的参数
      pageQuery: {
        pageSize: 10,
        pageNum: 1
      },
      // 返回参数
      pageVO: {
        records: [], // 返回的列表
        totalRow: 0, // 一共多少条数据
        totalPage: 0 // 一共多少页
      },
      // loading
      pageLoading: true,
      // 查询参数
      searchParam: {
      },
      addOrUpdateVisible: false,
      accountaddOrUpdateVisible: false,
      resourcesUrl: process.env.VUE_APP_RESOURCES_URL
    }
  },
  mounted() {
    this.getPage()
  },
  methods: {
    getPage() {
      this.pageLoading = true
      api.page({ ...this.pageQuery, ...this.searchParam }).then(pageVO => {
        this.pageVO = pageVO
        this.pageLoading = false
      })
    },
    addOrUpdateHandle(shopUserId) {
      this.addOrUpdateVisible = true
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(shopUserId)
      })
    },
    addOrUpdateAccountHandle(shopUserId, hasAccount) {
      this.accountaddOrUpdateVisible = true
      this.$nextTick(() => {
        this.$refs.accountAddOrUpdate.init(shopUserId, hasAccount)
      })
    },
    deleteHandle(shopUserId) {
      this.$confirm(this.$t('table.sureToDelete'), this.$t('table.tips'), {
        confirmButtonText: this.$t('table.confirm'),
        cancelButtonText: this.$t('table.cancel'),
        type: 'warning'
      }).then(() => this.deleteById(shopUserId)).catch(err => {
        console.log(err)
      })
    },
    deleteById(shopUserId) {
      api.deleteById(shopUserId).then(() => {
        this.$message({
          message: this.$t('table.actionSuccess'),
          type: 'success',
          duration: 1500,
          onClose: () => this.getPage()
        })
      })
    }
  }
}
</script>
