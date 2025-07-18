<template>
  <el-menu mode="horizontal" background-color="#409EFF" text-color="#fff">
    <el-menu-item index="1" @click="$router.push('/')">Home</el-menu-item>
    <el-menu-item index="2" @click="$router.push('/add')">New Contact</el-menu-item>
  </el-menu>
</template>
