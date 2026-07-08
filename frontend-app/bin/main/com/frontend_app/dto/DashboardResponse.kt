package com.frontend_app.dto

data class DashboardResponse(
    val totalUsers: Int,
    val totalSales: Double,
    val activeUsers: Int
)